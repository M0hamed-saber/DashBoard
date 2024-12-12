import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { Bell } from 'lucide-react'
import ToggleSwith from './ToggleSwith'

export default function Notification() {
    const [notifications, setNotifications] = useState({
        push : true , 
        email : false , 
        sms : true,
    })
    return (
        <SettingSection icon={Bell} title={"Notifications"}>
            <ToggleSwith
            label={"Push Notifications"}
            isOn={notifications.push}
            onToggle={()=> setNotifications({ ...notifications, push: !notifications.push})}
            />
            <ToggleSwith
            label={"Email Notifications"}
            isOn={notifications.email}
            onToggle={()=> setNotifications({ ...notifications, email: !notifications.email})}
            />
            <ToggleSwith
            label={"SMS Notifications"}
            isOn={notifications.sms}
            onToggle={()=> setNotifications({ ...notifications, sms: !notifications.sms})}
            />
        </SettingSection>
)
}
