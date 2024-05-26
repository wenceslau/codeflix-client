import BuggyButton from "@/app/components/BuggyButton";
import { getUserDate } from "@/app/lib/settings";
import React from "react";

async function UserPage() {

    const { name, email } = await getUserDate();


    return (
        <div>
            Settings
            <div className="border border-dashed border-red-500 p-4">
                <div>Name: {name}</div>
                <div>Email: {email}</div>
            </div>
            <div className="mt-4">

                <BuggyButton />
            </div>

        </div>
    )

}


export default UserPage;