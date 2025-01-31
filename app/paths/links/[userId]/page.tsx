/**
 * Interpolation is a programming concept where you dynamically insert values into a string or template.
 * In the context of Next.js, interpolation is often used to create dynamic paths for navigation,
 * especially when working with the `Link` component.
 */

import React from 'react';
import Link from 'next/link';

// Example of interpolation in JavaScript/TypeScript
// Here, we dynamically insert the value of `name` into the `greeting` string.
const name = "John doe";
const greeting = `Hello, ${name}`; // Interpolation: ${name} is replaced with "John doe"
console.log(greeting); // Output: "Hello, John doe"


/**
 * This is the Home page component.
 * It demonstrates how to use interpolation with the `Link` component to create dynamic navigation paths.
 */

//link use to navigate between pages
export function UserHome() {
  // An array of user IDs to demonstrate dynamic routing
  const userIds = ["1", "2", "3"];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {/* Map over the `userIds` array to create a list of links */}
        {userIds.map((userId) => (
          <li key={userId}>
            {/* 
              Use interpolation to dynamically generate the `href` for each link.
              For example, `/users/1`, `/users/2`, etc.
            */}
            <Link href={`/users/${userId}`}>User {userId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}