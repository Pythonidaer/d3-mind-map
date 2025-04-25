const articleData = {
  introduction:
    'Static Site Generation (SSG) is a web rendering technique where HTML pages are pre-built at compile time and served as static files. It delivers exceptional performance, enhanced security, and high scalability, making it a powerful choice for many types of websites.',

  keyPrinciples: {
    title: 'Core Principles of SSG',
    content: [
      '**Pre-Rendering at Build Time:** Pages are generated once during build and served as static HTML files.',
      '**No Server Processing Per Request:** Since pages are already built, they do not require server computation for each user request.',
      '**Static Asset Hosting:** Files can be hosted easily on CDNs or static storage services, enabling global distribution and rapid delivery.',
    ],
  },

  benefits: {
    title: 'Benefits',
    content: [
      '**Exceptional Performance:** Users experience ultra-fast load times because HTML is ready at request time.',
      '**Enhanced Security:** No runtime server-side logic reduces vulnerability to server-side attacks.',
      '**High Scalability:** Static files are inherently easy to cache and distribute across CDNs.',
      '**Improved SEO:** Content is immediately crawlable by search engines without executing JavaScript.',
      '**Cost-Effective Hosting:** Static file hosting services are cheaper and simpler to maintain.',
    ],
  },

  cons: {
    title: 'Drawbacks',
    content: [
      '**Limited Dynamic Content:** Personalization and real-time updates require extra client-side or edge strategies.',
      '**Longer Build Times:** Very large sites can experience slow build processes.',
      '**Rebuild Required for Updates:** Any content change usually triggers a rebuild and redeploy, unless using incremental techniques.',
    ],
  },

  antiPatterns: {
    title: 'Common Anti-Patterns',
    content: [
      "**Building All Pages for Highly Dynamic Content:** Trying to statically generate millions of pages that change frequently defeats SSG's purpose.",
      '**Skipping Incremental Techniques:** Not using Incremental Static Regeneration (ISR) leads to unnecessary full rebuilds for minor changes.',
      '**Poor Caching Strategies:** Failing to leverage CDN caching properly negates the scalability advantage of static sites.',
    ],
  },

  codeExamples: [
    {
      title: 'Next.js SSG Example (getStaticProps)',
      code: `
  import React from 'react';
  
  // This function runs at build time
  export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return { props: { data } };
  }
  
  const Page = ({ data }) => (
    <div>
      <h1>Static Generated Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
  
  export default Page;
  
  // At build time, HTML is generated based on fetched data
  `,
    },
    {
      title: 'Next.js SSG with Dynamic Routes (getStaticPaths)',
      code: `
  import React from 'react';
  
  // Define which dynamic paths to build
  export async function getStaticPaths() {
    const res = await fetch('https://api.example.com/items');
    const items = await res.json();
    const paths = items.map(item => ({ params: { id: item.id.toString() } }));
  
    return { paths, fallback: false };
  }
  
  // Fetch data for each individual page
  export async function getStaticProps({ params }) {
    const res = await fetch(\`https://api.example.com/items/\${params.id}\`);
    const item = await res.json();
  
    return { props: { item } };
  }
  
  const ItemPage = ({ item }) => (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
  
  export default ItemPage;
  
  // Each item page is statically generated at build time
  `,
    },
    {
      title: 'Gatsby SSG Example (GraphQL Data Fetching)',
      code: `
  import React from 'react';
  import { graphql } from 'gatsby';
  
  export const query = graphql\`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  \`;
  
  const IndexPage = ({ data }) => (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>This page was statically generated with Gatsby.</p>
    </div>
  );
  
  export default IndexPage;
  
  // Gatsby uses GraphQL to fetch data at build time and renders pages statically
  `,
    },
    {
      title: 'Hugo Static Site Generation Example (Go Template)',
      code: `
  <!-- layouts/_default/single.html in Hugo -->
  <!DOCTYPE html>
  <html>
  <head>
    <title>{{ .Title }}</title>
  </head>
  <body>
    <h1>{{ .Title }}</h1>
    <div>{{ .Content }}</div>
  </body>
  </html>
  
  // Hugo transforms Markdown content into HTML using Go templates at build time
  `,
    },
    {
      title: 'Jekyll Static Site Example (Markdown + Liquid)',
      code: `
  <!-- _layouts/default.html in Jekyll -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    <h1>{{ page.title }}</h1>
    <div>{{ content }}</div>
  </body>
  </html>
  
  // Posts are written in Markdown, converted to static HTML at build time
  `,
    },
  ],

  conclusion:
    'Static Site Generation (SSG) is a foundational rendering strategy that optimizes for speed, security, scalability, and cost. It is especially effective for websites with mostly static content, like blogs, documentation, marketing pages, and portfolios. As web applications grow more complex, hybrid models such as Incremental Static Regeneration (ISR) and combining SSG with client-side rendering or edge functions allow developers to extend SSG into more dynamic use cases without sacrificing its core advantages. Understanding when and how to leverage SSG remains essential knowledge for modern web developers.',
}

export default articleData
