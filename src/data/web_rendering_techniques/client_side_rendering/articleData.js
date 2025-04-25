const articleData = {
  introduction:
    "Client-Side Rendering (CSR) is a web rendering technique where content is generated in the user's browser using JavaScript. The server sends a minimal HTML shell and JavaScript files, and the browser dynamically builds the page after fetching and processing data.",

  keyPrinciples: {
    title: 'Core Principles of CSR',
    content: [
      '**Minimal Initial HTML:** The server delivers a lightweight HTML document with links to JavaScript bundles.',
      '**Dynamic Rendering in Browser:** JavaScript fetches data and manipulates the DOM to render the page dynamically.',
      "**Heavy Reliance on Client Resources:** The user's device CPU, memory, and network are key to page performance.",
    ],
  },

  benefits: {
    title: 'Benefits',
    content: [
      '**Rich Interactivity:** Allows for seamless updates, dynamic UI behavior, and app-like user experiences.',
      '**Reduced Server Load:** Servers mainly act as API providers, reducing backend computation per page view.',
      '**Faster Page Navigation:** After the initial load, client-side routing feels instant because only new data is requested.',
    ],
  },

  cons: {
    title: 'Drawbacks',
    content: [
      '**SEO Challenges:** JavaScript-rendered content can be harder for search engines to index reliably.',
      '**Slow Initial Load:** Users may experience a blank screen while JavaScript bundles download and execute.',
      '**Device Dependency:** Poor devices or networks can heavily degrade performance and responsiveness.',
    ],
  },

  antiPatterns: {
    title: 'Common Anti-Patterns',
    content: [
      '**Huge JavaScript Bundles:** Shipping large, monolithic bundles increases load time and degrades UX.',
      '**No Code Splitting:** Failing to split JavaScript into smaller chunks delays Time to Interactive (TTI).',
      '**Ignoring Accessibility:** Focusing only on dynamic JS behaviors without ensuring fallback accessibility harms users with limited capabilities.',
    ],
  },

  codeExamples: [
    {
      title: 'React CSR Example with useEffect and SWR',
      code: `
  import React from 'react';
  import useSWR from 'swr';
  
  const fetcher = url => fetch(url).then(res => res.json());
  
  const Page = () => {
    const { data, error } = useSWR('/api/data', fetcher);
  
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>Client-Side Rendered Data</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  
  export default Page;
  
  // Data is fetched dynamically from the browser using SWR after page load
  `,
    },
    {
      title: 'React useEffect Example for Simple Fetch',
      code: `
  import React, { useEffect, useState } from 'react';
  
  const SimplePage = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('/api/data')
        .then(response => response.json())
        .then(json => setData(json));
    }, []);
  
    if (!data) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>Simple Client-Side Fetch</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  
  export default SimplePage;
  
  // Data is fetched on client after initial page load
  `,
    },
    {
      title: 'Vue.js CSR Example (Lifecycle Hook)',
      code: `
  <template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { message: 'Loading...' };
    },
    mounted() {
      fetch('/api/data')
        .then(response => response.json())
        .then(data => {
          this.message = data.message;
        });
    }
  };
  </script>
  
  // Vue fetches and updates data after the component is mounted
  `,
    },
    {
      title: 'Angular CSR Example (Service and Subscription)',
      code: `
  // data.service.ts
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  @Injectable({ providedIn: 'root' })
  export class DataService {
    constructor(private http: HttpClient) {}
  
    fetchData(): Observable<any> {
      return this.http.get('/api/data');
    }
  }
  
  // page.component.ts
  import { Component, OnInit } from '@angular/core';
  import { DataService } from './data.service';
  
  @Component({
    selector: 'app-page',
    template: \`
      <div *ngIf="data; else loading">
        <h1>Data: {{ data.message }}</h1>
      </div>
      <ng-template #loading><p>Loading...</p></ng-template>
    \`
  })
  export class PageComponent implements OnInit {
    data: any;
  
    constructor(private dataService: DataService) {}
  
    ngOnInit() {
      this.dataService.fetchData().subscribe(response => {
        this.data = response;
      });
    }
  }
  
  // Angular fetches data and binds it to the template dynamically
  `,
    },
  ],

  conclusion:
    'Client-Side Rendering (CSR) empowers developers to create highly dynamic and engaging web applications by shifting rendering responsibilities to the client. However, careful attention must be paid to initial load performance, JavaScript bundle management, and SEO optimization. CSR remains an excellent fit for web applications where interactivity and fluid navigation take precedence over immediate SEO needs, such as dashboards, SaaS products, and social media platforms. With strategies like code splitting, preloading critical assets, and progressive enhancement, developers can maximize the strengths of CSR while mitigating its traditional weaknesses.',
}

export default articleData
