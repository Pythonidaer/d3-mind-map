const articleData = {
  introduction:
    "Data fetching and caching are vital for building performant and responsive React and Next.js applications. Choosing the right strategy depends on the app's interactivity needs, SEO requirements, and the nature of the data.",

  keyPrinciples: {
    title: 'Key Data Fetching Methods',
    content: [
      '**React Query (TanStack Query):** Powerful library that manages fetching, caching, updating, and syncing server state with features like background refetching and query invalidation.',
      '**SWR:** Lightweight library for client-side fetching using the stale-while-revalidate strategy, ensuring fast UX and fresh data without manual cache management.',
      '**getServerSideProps:** A Next.js server-side function that fetches data on every request, perfect for dynamic, frequently updated pages.',
      '**getStaticProps + getStaticPaths:** Next.js static site generation techniques that fetch data at build time, delivering highly optimized static pages.',
      '**Next.js API Routes:** Serverless functions acting as lightweight backend endpoints for fetching or manipulating data within a Next.js project.',
      '**Server Component Fetching:** In the App Router, server components fetch data directly using the fetch API without impacting client-side bundle size.',
    ],
  },

  benefits: {
    title: 'Benefits',
    content: [
      'Improved user experience through faster data loads and background updates.',
      'Reduced client-side bundle sizes by fetching data on the server or statically at build time.',
      'SEO enhancements by pre-rendering content through server-side and static generation.',
      'Fine-grained control over caching, refetching, and revalidation strategies.',
    ],
  },

  cons: {
    title: 'Cons',
    content: [
      'Choosing the wrong fetching strategy can cause slow pages or stale data.',
      'Overlapping client-side and server-side fetching strategies can create duplication and complexity.',
      'Misconfigured caching policies can lead to inconsistent or outdated UI data.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns',
    content: [
      'Mixing SWR or React Query client-side fetching with getStaticProps or getServerSideProps unnecessarily.',
      'Not handling loading, error, and empty states properly when fetching asynchronously.',
      'Fetching unnecessary data inside client components that could be prefetched or server-rendered.',
      'Ignoring stale data revalidation strategies, leading to poor user experience on data updates.',
    ],
  },

  codeExamples: [
    {
      title: 'Fetching with React Query',
      code: `import { useQuery } from '@tanstack/react-query';
  
  // Example component that fetches posts using React Query
  function Posts() {
    const { data, isLoading, error } = useQuery(['posts'], fetchPosts);
  
    if (isLoading) return 'Loading...'; // Handle loading state
    if (error) return 'An error occurred'; // Handle error state
  
    // Render list of posts when data is ready
    return <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>;
  }
  
  // Fetch function called by useQuery
  async function fetchPosts() {
    const res = await fetch('/api/posts');
    return res.json();
  }`,
    },
    {
      title: 'Fetching with SWR',
      code: `import useSWR from 'swr';
  
  // Fetcher function used by SWR (standard practice)
  const fetcher = (url) => fetch(url).then(res => res.json());
  
  function Profile() {
    const { data, error } = useSWR('/api/user', fetcher);
  
    if (!data) return 'Loading...'; // Shows loading UI while waiting
    if (error) return 'Failed to load'; // Handle fetch error
  
    // Data is now ready to display
    return <div>Welcome {data.name}</div>;
  }`,
    },
    {
      title: 'Next.js getServerSideProps Example',
      code: `// Server-side fetching at request time
  export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
  
    return { props: { data } }; // Pass data to the page component as props
  }
  
  // Page component using the server-fetched data
  export default function Page({ data }) {
    return <div>{data.title}</div>;
  }`,
    },
    {
      title: 'Next.js getStaticProps with getStaticPaths Example',
      code: `// Pre-generate all post paths at build time
  export async function getStaticPaths() {
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();
  
    return {
      paths: posts.map((post) => ({ params: { id: post.id.toString() } })),
      fallback: false, // Any non-listed path will 404
    };
  }
  
  // Fetch post data for each page during build
  export async function getStaticProps({ params }) {
    const res = await fetch(\`https://api.example.com/posts/\${params.id}\`);
    const post = await res.json();
  
    return { props: { post } };
  }
  
  // Page component receiving static data
  export default function Post({ post }) {
    return <h1>{post.title}</h1>;
  }`,
    },
  ],

  conclusion:
    'Mastering data fetching and caching strategies in React and Next.js is essential for delivering fast, scalable, and user-friendly web applications. A thoughtful balance between server-side, static, and client-side fetching ensures optimal performance and a seamless user experience.',
}

export default articleData
