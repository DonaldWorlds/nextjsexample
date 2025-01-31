import React from 'react';

//dynamic routes 

/**
 * This is how you create a dynamic route in Next.js.
 * Dynamic routes allow you to create pages that can handle different parameters in the URL.
 * For example, `/users/1`, `/users/2`, etc., can all be handled by a single dynamic route.
 *
 * In this case, the dynamic route is defined in `app/users/[userId]/page.tsx`.
 * The `[userId]` folder indicates that `userId` is a dynamic segment.
 */

export default function UserPage({ params }: { params: {userId: string }}){
    return(
        <div>
            <h1>User Profile</h1>
            <p>User Id: {params.userId}</p>
        </div>
    )
}