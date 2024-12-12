import { DollarSign, ShoppingBag, TrendingUp, Users } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";


const INSIGHTS = [
    {
        icon : TrendingUp,
        color : "text-green-500",
        insight : "Revenue is up 15% compared to last month,driven primarily by a successful email campaign"
    },
    {
        icon : Users,
        color : "text-blue-500",
        insight : "Customer retention has improved by 8% following the launch of the new loyalty program"
    },
    {
        icon : ShoppingBag,
        color : "text-purple-500",
        insight : "Product category 'Electronics' shows the highest growth bassed on recent market"
    },
    {
        icon : DollarSign,
        color : "text-green-600",
        insight : "Revenue is up 15% compared to last month,driven primarily by a successful email campaign"
    }
]



export default function AIPoweredInsights() {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-gray-700'
            initial={{opacity : 0 , y : 20}}
            animate={{opacity : 1 , y : 0}}
            transition={{delay :1.0}}
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
            <div className='space-y-4'>
                {INSIGHTS.map((item , index) => (
                    <div key={index} className='flex items-center space-x-3'>
                        <div className={`p-2 items-center justify-center  rounded-full ${item.color} bg-opacity-20`}>
                            <item.icon className={`h-6 w-6 ${item.color}`}/>
                        </div>
                        <p className='text-gray-300'>{item.insight}</p>
                    </div>
                ))}
            </div>
        </motion.div>
)
}
