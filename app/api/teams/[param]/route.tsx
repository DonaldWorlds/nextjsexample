/** 
 * Dynamic URLs are routes that can change based on the data or parameters provided in the URL.
 * Instead of creating a separate file for each possible route, you define a single route with a placeholder, 
 * such as [id] or [slug]. The placeholder is dynamically replaced with actual values at runtime based on the request.
 * 
 * Example:
 * - A blog post page: /posts/[slug] --> dynamic URL where [slug] could be replaced with a specific blog post identifier, like /posts/my-first-post
 * - A user profile page: /users/[param] --> dynamic URL where [param] could be replaced with a unique user identifier (ID) or slug, like /users/1 or /users/john-doe
 * 
 * Here, [slug] and [param] are dynamic segments that act as placeholders, which will take any value depending on the request. 
 * When you access a URL like /users/john-doe, the [param] placeholder is replaced by "john-doe", and the application retrieves the relevant data.
 * 
 * How can I change the dynamic segments? 
 * - You can rename dynamic placeholders from [id] to something else like [slug] by renaming the file. For example, 
 *   if you want to use a slug for a blog post instead of an ID, you would create a file named `[slug].ts` instead of `[id].ts`.
 * - Changing `[param]` to `[slug]` simply involves renaming the placeholder inside the file structure, and adjusting the code to handle the new type of data.
 * 
 * Why use dynamic URLs?
 * - Scalability: You don't need to create a new file for each route. By using dynamic segments, a single file can handle multiple variations of the route.
 * - Flexibility: You can handle a wide range of data with one route by dynamically adapting to the changing parameter (e.g., user ID, post slug).
 * - SEO-friendly: Dynamic URLs help improve SEO by allowing each unique URL to be indexed, making it easier for search engines to identify and rank content.
 * 
 * How dynamic URLs work in the context of this code:
 * - The dynamic segment in the URL (e.g., [param]) is captured in the `params` object.
 * - When the API is hit, the corresponding value (e.g., the user ID or slug) is passed into the function to retrieve relevant data.
 * 
 * Example URL: /users/john-doe 
 * In this case, the value "john-doe" (which can be a user ID or a slug) will replace [param], and the system will fetch the corresponding user from the `users` array.
 * 
 * By changing the placeholder from [param] to [slug], you can handle different kinds of data, such as blog post slugs instead of user IDs.
 */

import { NextResponse } from "next/server"; // Importing NextResponse to return an HTTP response in Next.js API routes

// Defining a user object structure with TypeScript for type safety
type User = {
    id: string;    // The unique identifier for each user
    slug: string;  // The slug that uniquely identifies the user
    name: string;  // The name of the user
    email: string; // The email address of the user
}

// Sample data of users that our dynamic route will use to demonstrate the API
const users: User[] = [
    { id: "1", slug: "john-doe", name: "John Doe", email: "John@email.example.com" },
    { id: "2", slug: "jane-smith", name: "Jane Smith", email: "jane@example.com" },
];

// Defining the structure for params to ensure type safety
type Params = {
    param: string; // This matches the dynamic placeholder [param] in the route
}

// GET function to handle incoming GET requests and fetch the user data dynamically based on the provided parameter
export async function GET(request: Request, { params }: { params: Params }) {
    const { param } = params; // Extracting the dynamic parameter (id or slug) from the URL
    
    // Find the user in the array with the matching ID or slug
    //here us where wiuld would put the route an o page to select 
    const user = users.find((user) => user.id === param || user.slug === param);

    // If no user is found with the provided ID or slug, return a 404 response
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // If the user is found, return the user data as a JSON response with a 200 status code
    return NextResponse.json(user);
}
