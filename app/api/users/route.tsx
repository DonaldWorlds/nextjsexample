import { NextResponse } from "next/server"; // Importing NextResponse to handle API responses

// Defining the structure of the response item to ensure type safety and consistency
type ResponseItemType = { 
    id: string; // A string that uniquely identifies the user
    name: string; // The name of the user (likely used for display purposes)
}

// The GET function serves as a handler for GET requests, typically used to retrieve data
export async function GET() {
    // The URL from which user data is fetched. This external API endpoint returns user data
    const url = "https://www.usemodernfullstack.dev.api/v1/users"; 

    let data: ResponseItemType[]; // Placeholder for the parsed user data from the API

    try {
        // Fetching data from the provided URL using the fetch API
        const response = await fetch(url); 
        
        // Parsing the JSON response and casting it to the expected structure (ResponseItemType[])
        data = (await response.json()) as ResponseItemType[]; 
    } catch (err) {
        // Handling the case where the fetch operation fails or the API is unreachable
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 }); 
    }

    // Iterating over the fetched data and creating a new array with only id and name properties
    const names = data.map((item) => {
        return { id: item.id, name: item.name }; 
    });

    // Returning the processed data as a JSON response with a 200 OK status by default
    return NextResponse.json(names); 
}

// The POST function handles POST requests, likely for submitting data or creating new records
export async function POST(request: Request) {
    // Extracting the body of the request (expected to be in JSON format)
    const body = await request.json();

    // Returning a response with a success message and echoing the submitted data
    return NextResponse.json({ message: "Post request received", data: body });
}
