import React from "react";
import { getAppSettings } from "../lib/settings";
import BuggyButton from "../components/BuggyButton";

async function SettingsPage() {

    const { theme, language } = await getAppSettings();


    return <div>
        Settings
        <div className="border border-dashed border-red-500 p-4">
            <div>Theme: {theme}</div>
            <div>Language: {language}</div>
        </div>
        <div className="mt-4">

            <BuggyButton />
        </div>
    </div>

}


export default SettingsPage;
