import React from "react";
import { motion } from "framer-motion";
import { Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart } from "recharts";

const dailySales = [
    { name: "Mon", sales: 2000 },
    { name: "Tue", sales: 1000 },
    { name: "Wed", sales: 5000 },
    { name: "Thu", sales: 6000 },
    { name: "Fri", sales: 9000 },
    { name: "Sat", sales: 4000 },
    { name: "Sun", sales: 3000 },
];

export default function DailySalesTrend() {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
            </div>
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={dailySales}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31,41,55,0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Bar dataKey="sales" fill="#10B981" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
