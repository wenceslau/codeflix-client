import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <h1>Settings Layout</h1>
            <div className="bg-black text-white scrollbar-hide">
                {children}
            </div>
        </div>

    );
}