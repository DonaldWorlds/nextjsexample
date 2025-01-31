

// Define a TypeScript type for the response items
type ResponseItemType = {
    id: string; // The ID of the item, as a string
    name: string; // The name of the item, as a string
}

// Define an asynchronous function to fetch names from an external API
export const fetchNames = async (): Promise<ResponseItemType[]> => {
    // URL of the external API endpoint
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    
    // Initialize an empty array to hold the fetched data
    let data: ResponseItemType[] = [];

    try {
        // Make a fetch request to the API endpoint
        const response = await fetch(url);
        
        // Parse the JSON response and cast it to an array of ResponseItemType
        data = (await response.json()) as ResponseItemType[];
    } catch (err) {
        // Log any errors that occur during the fetch request
        console.error("Error fetching names", err);
        
        // Return an empty array if an error occurs
        return [];
    }

    // Map the fetched data to ensure it matches the ResponseItemType structure
    return data.map((item) => ({ id: item.id, name: item.name }));
}