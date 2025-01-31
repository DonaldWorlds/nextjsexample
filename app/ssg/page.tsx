// app/ssg/page.tsx

// Import React (necessary for JSX syntax)
import React from 'react';

// Import the fetchNames function from the utils folder
import { fetchNames } from '../utils/fetch-names';

// Define an async function component for the SSG page
export default async function SSGPage() {
  // Fetch the names data using the fetchNames function
  const names = await fetchNames();

  // Return the JSX to render the page
  return (
    <div>
      <h1>Static Site Generation (SSG)</h1>
      <ul>
        {/* Map over the names array and render each name in a list item */}
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

/*
This file defines a page component that uses Static Site Generation (SSG).
- The fetchNames function is imported from the utils folder. This function fetches data from an external API.
- The SSGPage component is an async function that fetches the names data at build time.
- The fetched data is then used to render a list of names in the returned JSX.
- Because this component is in the app/ssg folder, Next.js will use SSG to pre-render this page at build time.
- The HTML generated at build time will be served to the client on each request, ensuring fast load times and improved performance.
*/