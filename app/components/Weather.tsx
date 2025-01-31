import React from "react";
import Link from "next/link";



export default function WeatherPage(){
    return(
        <div>
            <h1>Welcome to the weather page </h1>
            <p>Here you can find the weather</p>
            <div>
                <Link href="/">
                    GO back to Home
                </Link>
            </div>
        </div>
    )
}

