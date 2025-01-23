// Next.js API routes provide a solution to build your API with JavaScript and TypeScript. 
// They allow you to create server-side endpoints that can handle requests and responses, 
// enabling you to build full-stack applications with both client-side and server-side capabilities.

import { NextResponse } from "next/server";

// This function handles GET requests to the API route.
// It is an asynchronous function that returns a JSON response.
//get data from the server
export async function GET() {
    // The NextResponse.json method is used to create a JSON response.
    // Here, we are returning a simple message as a JSON object.
    return NextResponse.json({ message: "Hello, world" });
}


//This fintion handle POST requaet to the API route which sends data from the sever
export async function POST(request: Request){
    const body = await request.json; //parse the request body 
    return NextResponse.json({ message:"POST request recieved", data:body })
}