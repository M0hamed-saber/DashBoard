import React from 'react'
import { motion } from "framer-motion";
import Header from '../Components/common/Header';
import StatCard from '../Components/common/StatCard';
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import DailyOrders from '../Components/order/DailyOrders';
import OrderDistribution from '../Components/order/OrderDistribution';
import OrderTable from '../Components/order/OrderTable';

const ordersates = {
    totalOrders : "80000",
    pendingOrders : "100",
    completedOrders : "1.199",
    totalRevenue : "$100.000"
}









export default function OrdersPage() {
    return (
    <div className='flex-1 relative z-10 overflow-auto'>
        <Header title={"Orders"}/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity:0 , y: 20}}
            animate={{opacity:1 , y : 0}}
            transition={{duration:1}}
            >
                <StatCard name="Total Orders" icon={ShoppingBag} value={ordersates.totalOrders} color='#6366f1' />
                <StatCard name="Pending Orders" icon={Clock} value={ordersates.pendingOrders} color='#10B981' />
                <StatCard name="Completed Orders" icon={CheckCircle} value={ordersates.completedOrders} color='#F59E0B' />
                <StatCard name="Total Revenue" icon={DollarSign} value={ordersates.totalRevenue} color='#EF4444' />
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <DailyOrders/>
                <OrderDistribution/>
            </div>
            <OrderTable/>
        </main>
    </div>
)
}
