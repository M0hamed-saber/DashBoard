import React from 'react';
import { motion } from "framer-motion";
import { Cell, Legend, Pie, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChart } from 'recharts';

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const useDemographicsData = [
    { name: "18-24", value: 20 },
    { name: "25-34", value: 30 },
    { name: "35-44", value: 25 },
    { name: "45-54", value: 15 },
    { name: "55+", value: 10 },
];

export default function UserDemographicsChart() {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-md shadow-lg lg:col-span-2 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-200">User Demographics</h2>
            {useDemographicsData.length > 0 ? (
                <div className="h-80">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={useDemographicsData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                dataKey="value"
                                label={({ name, percent }) =>
                                    `${name}: ${(percent * 100).toFixed(0)}%`
                                }
                            >
                                {useDemographicsData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(31,41,55,0.8)",
                                    borderColor: "#4B5563",
                                }}
                                itemStyle={{ color: "#E5E7EB" }}
                            />
                            <Legend
                                verticalAlign="bottom"
                                height={36}
                                wrapperStyle={{
                                    color: "#9CA3AF",
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <p className="text-center text-gray-400">No demographic data available.</p>
            )}
        </motion.div>
    );
}
