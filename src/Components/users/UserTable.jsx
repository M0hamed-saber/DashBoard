import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Search } from 'lucide-react';

const userData = [
    {id : 1 , name : "Muhamed Mo" , email : "Muhamed@example.com" , role : "Admin" , status : "Active" },
    {id : 2 , name : "Ahmed Mero" , email : "Ahmed@example.com" , role : "Customer" , status : "Active" },
    {id : 3 , name : "Honda" , email : "Honda@example.com" , role : "Customer" , status : "InActive" },
    {id : 4 , name : "Osha" , email : "OSHA7@example.com" , role : "Admin" , status : "Active" },
    {id : 5 , name : "Sayed" , email : "Sayed22@example.com" , role : "Customer" , status : "InActive" },
]







export default function UserTable() {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredUsers, setFilteredUsers] = useState(userData)
    
    const handleSearch = (e) =>{
        const term = e.target.value.tolowerCase();
        setSearchTerm(term);
        const filtered = userData.filter(
            (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    }
    return (
        <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
    >
                    <div className="flex justify-between items-center mb-6 container">
                <h2 className="text-xl font-semibold text-gray-100">Users</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Users..."
                        className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
            </div>

            <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Name
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Email
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Role
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Status
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-700'>
                        {filteredUsers.map((user) => (
                            <motion.tr 
                            key={user}
                            initial={{opacity : 0}}
                            animate={{opacity : 1}}
                            transition={{duration :0.3}}
                            >
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='flex items-center'>
                                        <div className='flex-shrink-0 h-10 w-10'>
                                            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                                                {user.name.charAt(0)}
                                            </div>
                                        </div>
                                        <div className='ml-4'>
                                            <div className='text-sm font-medium text-gray-100'>{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-300'>{user.email}</div>
                                </td>
                                <td className='px-6 py-4 whitespace-normal'>
                                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
                                        {user.role}
                                    </span>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                        ${
                                            user.status === "Active"
                                            ? "bg-green-800 text-green-100"
                                            : "bg-red-800 text-red-100"
                                        }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 space-x-4 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                                        <span className="text-indigo-400 hover:text-indigo-300">
                                            Edit
                                        </span>
                                        <span className="text-red-400 hover:text-red-300">
                                            Delete
                                        </span>
                                    </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </motion.div>
)
}