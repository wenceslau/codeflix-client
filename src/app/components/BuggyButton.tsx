'use client'

import React from "react"

export default function BuggyButton() {
    const [cliecked, setClicked] = React.useState(false)

    if (cliecked) {
        throw new Error("I crashed!")
    }

    return <button
        className="bg-red-500 text-white p-2 rounded-md"
        onClick={() =>
            setClicked(true)
        }
    >Trigger error
    </button>
}