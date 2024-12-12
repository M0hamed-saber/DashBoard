import React from 'react'
import Header from '../Components/common/Header'
import OverviewCards from '../Components/analytics/OverviewCards'
import RevenueChart from '../Components/analytics/RevenueChart'
import ProductPerformance from '../Components/analytics/ProductPerformance'
import ChannelPerformance from '../Components/analytics/ChannelPerformance'
import UserRetention from '../Components/analytics/UserRetention'
import CustomerSegmentation from '../Components/analytics/CustomerSegmentation'
import AIPoweredInsights from '../Components/analytics/AIPoweredInsights'

export default function AnalyticsPage() {
    return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
        <Header title={"Analytics Dashboard"}/>
        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            <OverviewCards/>
            <RevenueChart/>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <ChannelPerformance/>
                <ProductPerformance/>
                <UserRetention/>
                {/* <CustomerSegmentation/> */}
            </div>
            <AIPoweredInsights/>
        </main>
    </div>
)
}