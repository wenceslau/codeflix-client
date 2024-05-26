
import { getUserById, getUserDate } from "@/app/lib/settings";
import { notFound } from "next/navigation";
import React from "react";

async function UserPage({ params }: { params: { id: string } }) {

    const {
        name,
        id,
        username,
        website,
    } = await getUserById(Number(params.id));

    if (!name) {
        notFound();
    }
    return (
        <div>
            <h1>User ${params.id}</h1>
            <div className="border border-dashed border-red-500 p-4">
                <div>Name: {name}</div>
                <div>id: {id}</div>
                <div>username: {username}</div>
                <div>website: {website}</div>
            </div>

        </div>
    )

}


export default UserPage;