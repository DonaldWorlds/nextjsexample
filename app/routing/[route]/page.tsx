'use client'

import { useParams } from 'next/navigation'; // For dynamic route params in the app directory

const DynamicPage = () => {
   const params = useParams(); // This gives access to route parameters
   const { route } = params; // Destructure the route parameter

   return (
      <div>
         <h1>Dynamic Route</h1>
         <p>Route: {route}</p> {/* Display the dynamic parameter */}
      </div>
   );
};

export default DynamicPage;
