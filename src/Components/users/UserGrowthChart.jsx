import React from 'react';
import { motion } from "framer-motion";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const UserGrowthData = [
    { name: "Jan", sales: 9000 },
    { name: "Feb", sales: 5500 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 6000 },
    { name: "May", sales: 6500 },
    { name: "Jun", sales: 7800 },
    { name: "Jul", sales: 4200 },
    { name: "Aug", sales: 5200 },
    { name: "Sep", sales: 6200 },
    { name: "Oct", sales: 4100 },
    { name: "Nov", sales: 7200 },
    { name: "Dec", sales: 8200 },
];

export default function UserGrowthChart() {
    const sortedData = UserGrowthData.sort((a, b) =>
        new Date(`${a.name} 1`).getMonth() - new Date(`${b.name} 1`).getMonth()
    );

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">User Growth</h2>
            {sortedData.length > 0 ? (
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={sortedData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                            <XAxis dataKey="name" stroke="#9ca3af" />
                            <YAxis stroke="#9ca3af" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(31,41,55,0.8)",
                                    borderColor: "#4B5563"
                                }}
                                itemStyle={{ color: "#E5E7EB" }}
                            />
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#6366F1"
                                strokeWidth={3}
                                dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                                activeDot={{ r: 8, strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <p className="text-gray-400 text-center">No data available to display.</p>
            )}
        </motion.div>
    );
}
    