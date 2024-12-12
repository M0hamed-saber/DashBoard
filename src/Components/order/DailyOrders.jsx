import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const dailyOrdersData = [
    { date: "1/12", orders: 40 },
    { date: "2/12", orders: 50 },
    { date: "3/12", orders: 45 },
    { date: "4/12", orders: 30 },
    { date: "5/12", orders: 80 },
    { date: "6/12", orders: 60 },
    { date: "7/12", orders: 70 },
];

export default function DailyOrders() {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-lg pb-3 font-semibold text-gray-100">Daily Orders</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={dailyOrdersData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis dataKey="date" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31,41,55,0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Line type="monotone" dataKey="orders" stroke="#10B981" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
