import Link from "next/link";
import React from "react";
import Image from "next/image"

export default function NextPage(){
  return(
    <>
    <div>
      <h1>Hello world</h1>
      <div>
          {/*External link using an anchor tag*/}
          <a href="https://nostarch.com" target="_blank" rel="noopener noreferrer">
              External website footlocker
          </a>
      </div>
    </div>
    <div>
        {/* Internal link using next/link */}
        <Link href="/weather">
          Go to weather page
        </Link>

        <Image src="/vercel.svg" alt="Vercel logo" width={72} height={16}/>
        <Image src="/file.svg" alt="Vercel logo" width={72} height={16}/>
        <Image src="/next.svg" alt="Vercel logo" width={72} height={16}/>
        <Image src="/window.svg" alt="Vercel logo" width={72} height={16}/>
        <Image src="/globe.svg" alt="Vercel logo" width={72} height={16}/>
        





       

    </div>
    
    </>
    
  )
}