import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart } from 'recharts';

const allSalesData = {
    "This Week": [
        { month: "Mon", sales: 1000 },
        { month: "Tue", sales: 2000 },
        { month: "Wed", sales: 1500 },
        { month: "Thu", sales: 3000 },
        { month: "Fri", sales: 2500 },
        { month: "Sat", sales: 4000 },
        { month: "Sun", sales: 4500 },
    ],
    "This Month": [
        { month: "Jan", sales: 4000 },
        { month: "Feb", sales: 3000 },
        { month: "Mar", sales: 5000 },
        { month: "Apr", sales: 6000 },
        { month: "May", sales: 7000 },
        { month: "Jun", sales: 5500 },
        { month: "Jul", sales: 3500 },
    ],
    "This Quarter": [
        { month: "Q1", sales: 12000 },
        { month: "Q2", sales: 18000 },
        { month: "Q3", sales: 14000 },
        { month: "Q4", sales: 16000 },
    ],
    "This Year": [
        { month: "2020", sales: 50000 },
        { month: "2021", sales: 70000 },
        { month: "2022", sales: 65000 },
        { month: "2023", sales: 80000 },
    ],
};

export default function SalesOverviewChart() {
    const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
    const salesData = allSalesData[selectedTimeRange] || [];

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
                <select
                    className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                >
                    <option disabled>Select Time Range</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                </select>
            </div>
            <div className="w-full" style={{ height: "20rem" }}>
                {salesData.length > 0 ? (
                    <ResponsiveContainer>
                        <AreaChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                            <XAxis dataKey="month" stroke="#9ca3af" />
                            <YAxis stroke="#9ca3af" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(31,41,55,0.8)",
                                    borderColor: "#4B5563",
                                }}
                                itemStyle={{ color: "#E5E7EB" }}
                            />
                            <Area
                                type="monotone"
                                dataKey="sales"
                                stroke="#8B5CF6"
                                fill="#8B5CF6"
                                fillOpacity={0.3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                ) : (
                    <p className="text-center text-gray-400">No data available for the selected time range.</p>
                )}
            </div>
        </motion.div>
    );
}
