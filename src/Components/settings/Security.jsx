import React, { useState } from "react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "../settings/ToggleSwith"; // Fixed typo in the component name
import { Lock } from "lucide-react"; // Imported the Lock icon for use in SettingSection

export default function Security() {
    const [twoFactor, setTwoFactor] = useState(false);

    const handleToggle = () => {
        setTwoFactor((prev) => !prev);
    };

    return (
        <SettingSection icon={Lock} title="Security">
        <ToggleSwitch
            label="Two-Factor Authentication"
            isOn={twoFactor}
            onToggle={handleToggle}
        />
        <div className="mt-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            Change Password
            </button>
        </div>
        </SettingSection>
    );
}
