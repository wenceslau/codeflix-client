import React from "react";

export default function Header() {
    return (
        <header
            className="
            fixed 
            top-0 
            z-50
            flex 
            w-full 
            items-center 
            justify-between 
            px-4 
            py-4 
            lg:px-10
            lg:py-6
            bg-blue-500"

        >
            <img src="/logo.svg" alt="CodeFlix" width={120} height={120} />

            <ul>
                <li >Home</li>
                <li >Movies</li>
                <li >Series</li>
                <li>My List</li>
            </ul>

        </header>
    )
}