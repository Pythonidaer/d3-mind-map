import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { nodes, links } from "../data/mindMapData";

const MindMap = () => {
  const svgRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const g = svg.append("g");

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(150)
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = g
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#66BB6A")
      .attr("stroke-width", 3);

    const hexagonPoints = (radius) => {
      const points = [];
      for (let i = 0; i < 6; i++) {
        const angle = ((2 * Math.PI) / 6) * i;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push([x, y]);
      }
      return points.map((p) => p.join(",")).join(" ");
    };

    const node = g
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .call(
        d3
          .drag()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    node
      .append((d) => {
        if (d.shape === "hexagon") {
          return document.createElementNS(
            "http://www.w3.org/2000/svg",
            "polygon"
          );
        } else if (d.shape === "rect") {
          return document.createElementNS("http://www.w3.org/2000/svg", "rect");
        }
        return null;
      })
      .attr("points", (d) => (d.shape === "hexagon" ? hexagonPoints(20) : null))
      .attr("fill", "#B9F6CA");

    node.each(function (d) {
      const labelLines = d.label.split('\n');

      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.visibility = "hidden";
      div.style.whiteSpace = "nowrap";
      div.innerHTML = d.label.replace('\n', '<br>');
      document.body.appendChild(div);
      const textWidth = div.offsetWidth + 20;
      const textHeight = div.offsetHeight + 20;
      document.body.removeChild(div);

      const shapeWidth = d.shape === "rect" ? textWidth : Math.max(textWidth, textHeight);
      const shapeHeight = d.shape === "rect" ? textHeight : Math.max(textWidth, textHeight);

      if (d.shape === "rect") {
        d3.select(this)
          .select("rect")
          .attr("width", shapeWidth)
          .attr("height", shapeHeight)
          .attr("x", -shapeWidth / 2)
          .attr("y", -shapeHeight / 2);
      } else if (d.shape === "hexagon") {
        d3.select(this)
          .select("polygon")
          .attr("points", hexagonPoints(shapeWidth / Math.sqrt(3)));
      }

      const foreignObject = d3.select(this)
        .append("foreignObject")
        .attr("width", shapeWidth)
        .attr("height", shapeHeight)
        .attr("x", -shapeWidth / 2)
        .attr("y", -shapeHeight / 2)
        .append("xhtml:div")
        .style("width", `${shapeWidth}px`)
        .style("height", `${shapeHeight}px`)
        .style("display", "flex")
        .style("flex-direction", "column")
        .style("align-items", "center")
        .style("justify-content", "center")
        .style("text-align", "center")
        .style("word-wrap", "break-word")
        .style("padding", "5px");

      labelLines.forEach(line => {
        foreignObject.append("xhtml:div").html(line);
      });
    });

    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("padding", "6px")
      .style("background", "white")
      .style("border", "1px solid #ccc")
      .style("border-radius", "4px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    node
      .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`<strong>${d.label}</strong><br>${d.definition}`)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(200).style("opacity", 0);
      });

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 10])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    const resizeObserver = new ResizeObserver(() => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      svg.attr("width", newWidth).attr("height", newHeight);
      simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
    });

    resizeObserver.observe(container);

    return () => {
      simulation.stop();
      svg.selectAll("*").remove();
      tooltip.remove();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <main className="mind-map" ref={containerRef}>
        <svg ref={svgRef}></svg>
      </main>
    </>
  );
};

export default MindMap;