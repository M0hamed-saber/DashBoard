import React from 'react';
import { motion } from "framer-motion";
import { Bar, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart } from 'recharts';

const COLORS = ["#6366f1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_DATA = [
    { name: "Website", value: 45600 },
    { name: "Mobile App", value: 52000 },
    { name: "Marketplace", value: 32100 },
    { name: "Social Media", value: 50000 },
];

export default function SalesChannelChart() {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-md shadow-lg lg:col-span-2 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-200">Sales by Channel</h2>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={SALES_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis dataKey="name" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{ backgroundColor: "rgba(31,41,55,0.8)", borderColor: "#4B5563" }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                        <Bar dataKey="value">
                            {SALES_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
