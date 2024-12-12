import React from 'react'
import Header from '../Components/common/Header'
import { motion } from "framer-motion";
import StatCard from '../Components/common/StatCard';
import { UserCheck, UserIcon, UserPlus, UserX } from 'lucide-react';
import UserTable from '../Components/users/UserTable';
import UserGrowthChart from '../Components/users/UserGrowthChart';
import UserActivityHeatmap from '../Components/users/UserActivityHeatmap';
import UserDemographicsChart from '../Components/users/UserDemographicsChart';


const userStats = {
    totalUsers : 155489,
    newUsersToday : 500,
    activeUsers : 9000,
    churnRate : "5.5%" ,
};

export default function Userspage() {
    return (
        <div className="flex-1 overflow-auto relative z-10">
    <Header title="Users" />

    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
            <StatCard 
            name="Total Users"
            icon={UserIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
            />
            <StatCard
            name='New Users Today'
            icon={UserPlus}
            value={userStats.newUsersToday}
            color='#10B981'
            />
            <StatCard
            name='Active Users'
            icon={UserCheck}
            value={userStats.activeUsers}
            color='#F59E0B'
            />
            <StatCard
            name='Churn Rate'
            icon={UserX}
            value={userStats.churnRate}
            color='#EF4444'
            />
        </motion.div>
        <UserTable/>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
            <UserGrowthChart/>
            <UserActivityHeatmap/>
            <UserDemographicsChart/>
        </div>
        </main>
    </div>
)
}
