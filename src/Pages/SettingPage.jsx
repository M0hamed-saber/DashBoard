import React from 'react'
import Header from '../Components/common/Header'
import Profile from '../Components/settings/Profile'
import Notification from '../Components/settings/Notification'
import Security from '../Components/settings/Security'
import ConnectedAccounts from '../Components/settings/ConnectedAccounts'
import DangerZone from '../Components/settings/DangerZone'

export default function SettingPage() {
    return (
            <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
                <Header title={"Settings"}/>
                <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
                    <Profile/>
                    <Notification/>
                    <Security/>
                    <ConnectedAccounts/>
                    <DangerZone/>
                </main>
            </div>
)
}
