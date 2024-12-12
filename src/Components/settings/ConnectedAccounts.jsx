import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { HelpCircle, Plus } from 'lucide-react'

export default function ConnectedAccounts() {
    const [connectedAccount, setConnectedAccount] = useState([
        {
            id : 1 , 
            name : "Google" , 
            connected : true,
            icon : "/src/assets/google.png"
        },
        {
            id : 2 , 
            name : "Facebook" , 
            connected : false,
            icon : "/src/assets/facebook.svg"
        },
        {
            id : 3 , 
            name : "Twitter" , 
            connected : true,
            icon : "/src/assets/x.png"
        },
    ])




    return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
        {connectedAccount.map((account) => (
            <div key={account.id} className='flex items-center justify-between py-3'>
                <div className='flex gap-1'>
                    <img src={account.icon} alt="Social img" className='size-6 object-cover rounded-full mr-2'/>
                    <span className='text-gray-300'>{account.name}</span>
                </div>
                <button
                className={`px-3 py-1 rounded-full ${
                    account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
                } transition duration-200`}
                onClick={()=>{
                    setConnectedAccount(
                        connectedAccount.map((acc) =>{
                            if(acc.id === account.id){
                                return {
                                    ... acc,
                                    connected:!acc.connected,
                                }
                            }
                            return acc
                        })
                    )
                }}
                >
                    {account.connected ? "Connected" : "Connected"}
                </button>
            </div>
        ))}
        <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
            <Plus  size={18} className='mr-2'/> Add Account
        </button>
    </SettingSection>
)
}
