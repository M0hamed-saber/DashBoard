import React from 'react'
import { motion } from "framer-motion";
import Header from '../Components/common/Header';
import StatCard from '../Components/common/StatCard';
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import SalesOverviewChart from '../Components/sales/SalesOverviewChart';
import SalesByCategoryChart from '../Components/sales/SalesByCategoryChart';
import DailySalesTrend from '../Components/sales/DailySalesTrend';

const salesStats = {
    totalRevenue : "$1.233.200",
    averageOrderValue : "$80.99",
    conversionRate : "3.45%",
    salesGrowth : "12.5%"
}


export default function SalesPage() {
    return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title="Sales"/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity:0 , y: 20}}
            animate={{opacity:1 , y : 0}}
            transition={{duration:1}}
            >
                <StatCard name="Total Revenue" icon={DollarSign} value={salesStats.totalRevenue} color='#6366f1' />
                <StatCard name="Average Order Value" icon={ShoppingCart} value={salesStats.averageOrderValue} color='#10B981' />
                <StatCard name="Conversion Rate" icon={TrendingUp} value={salesStats.conversionRate} color='#F59E0B' />
                <StatCard name="Sales Growth" icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
            </motion.div>
            <SalesOverviewChart/>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <SalesByCategoryChart/>
                <DailySalesTrend/>
            </div>
        </main>
    </div>
)
}