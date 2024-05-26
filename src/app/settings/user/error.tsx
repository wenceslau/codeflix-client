'use client';

import React, { useEffect } from "react";

export default function Error({ error, reset }: any) {

    useEffect(() => {
        console.log("Error", error);
    }, [error]);

    return (
        <div>
            <h1>Error User</h1>
            <div className="border border-dashed border-red-500 p-4">
                <div>someting went wrong</div>
            </div>
        </div>
    );
}