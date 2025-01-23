import { notFound } from "next/navigation"

// Define the type for a Post object, which includes a slug, title, and content.
type Post = {
    slug: string;   // Unique identifier for the post, used
    //  in the URL.
    title: string;  // Title of the post to be displayed.
    content: string; // Main content of the post.
}

// Define the type for the component's props, which includes the route parameters.
type Props = {
    params: {
        slug: string; // The slug parameter extracted from the URL.
    }
}

// Fetch data based on the slug provided in the URL.
// This function simulates fetching post data and returns a Post object or undefined if not found.
async function getPost(slug: string): Promise<Post | undefined> {
    // Replace this with your actual data fetching logic (e.g., API call).
    const posts: Post[] = [
        {slug: "post-1", title: "Post 1", content: "This is the first post"},
        {slug: "post-2", title: "Post 2", content: "This is the second post"}
    ];

    // Find and return the post that matches the provided slug.
    return posts.find((post) => post.slug === slug);
}

// Default export of the PostPage component, which is an async function.
// This component is responsible for rendering the post based on the slug parameter.
export default async function PostPage({ params }: Props) {
    // Call the getPost function to retrieve the post data using the slug from the parameters.
    const post = await getPost(params.slug);

    // If the post is not found, invoke the notFound function to return a 404 page.
    if (!post) {
        notFound();
    }

    // Render the post details if found.
    return (
        <div>
            <h1>{post.title}</h1>  // Display the title of the post.
            <p>{post.content}</p>  // Display the content of the post.
        </div>
    );
}
