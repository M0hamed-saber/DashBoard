import React from 'react'
import Header from '../Components/common/Header'
import { motion } from "motion/react"
import StatCard from '../Components/common/StatCard'
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import SalesOverviewCharts from '../Components/overview/SalesOverviewCharts'
import CategoryDistributionChart from '../Components/overview/CategoryDistributionChart'
import SalesChannelChart from '../Components/overview/SalesChannelChart'

export default function OverviewPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Overflow"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div 
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{opacity:0 , y: 20}}
        animate={{opacity:1 , y : 0}}
        transition={{duration:1}}
        >
          <StatCard name="Total Sales" icon={Zap} value='$12.333' color='#6366f1' />
          <StatCard name="New Users" icon={Users} value='2000' color='#8B5CF6' />
          <StatCard name="Total Products" icon={ShoppingBag} value='500' color='#EC4899' />
          <StatCard name="Conversion Rate" icon={BarChart2} value='15.2%' color='#10B981' />
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewCharts/>
          <CategoryDistributionChart/>
          <SalesChannelChart/>
        </div>
      </main>
    </div>
  )
}
