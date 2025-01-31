// Import React (necessary for JSX syntax)
import React from "react";

// Import the fetchNames function from the utils folder
import { fetchNames } from "../utils/fetch-names";

// Define an async function component for the SSR page
export default async function SSRPage() {
    // Fetch the names data using the fetchNames function
    const names = await fetchNames();

    // Return the JSX to render the page
    return (
        <div>
            <h1>
                Server Side Rendering (SSR)
            </h1>
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
This file defines a page component that uses Server-Side Rendering (SSR).
- The fetchNames function is imported from the utils folder. This function fetches data from an external API.
- The SSRPage component is an async function that fetches the names data on each request.
- The fetched data is then used to render a list of names in the returned JSX.
- Because this component is in the app/ssr folder, Next.js will use SSR to render this page on each request.
- The HTML is generated on the server for each request, ensuring that the data is always up-to-date.
- This approach is useful for pages that require fresh data on every request.
*/