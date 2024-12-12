import React from 'react'
import { motion } from "framer-motion";
import { ArrowBigRight, ArrowDownRight, ArrowUpRight, DollarSign, Eye, ShoppingBag, Users } from 'lucide-react';




const overviewData = [
    {name : "Revenue" , value : "$1.565.333" , change : 12.5 , icon : DollarSign},
    {name : "Users" , value : "45.226" , change : 14.5 , icon : Users},
    {name : "Orders" , value : "9.555" , change : 11.5 , icon : ShoppingBag},
    {name : "Page Views" , value : "2.444.555" , change : 10.5 , icon : Eye},
]



export default function OverviewCards() {
    return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
        {overviewData.map((item , index) => (
            <motion.div
            key={item.name}
            className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-gray-700'
            initial={{opacity : 0 , y : 20}}
            animate={{opacity : 1 , y : 0}}
            transition={{delay : index * 0.1}}
            >
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
                        <p className='mt-1 text-xl font-semibold text-gray-100'>{item.value}</p>
                    </div>

                    <div 
                    className={`p-3 rounded-full bg-opacity-20 ${item.change >= 0 ? "bg-black" : "bg-red-500"}`}>
                        <item.icon className={`size-5 ${item.change >= 0 ? "bg-black" : "bg-red-500"}`}/>
                    </div>
                </div>

                <div 
                className={`mt-4 flex items-center ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                    {item.change >= 0 ? <ArrowUpRight size="20"/> : <ArrowDownRight size='20'/>}
                    <span className='ml-1 text-sm font-medium'>{item.change}%</span>
                    <span className='ml-2 text-sm text-gray-400'>vs last period</span>
                </div>
            </motion.div>
        ) )}
    </div>
)
}
