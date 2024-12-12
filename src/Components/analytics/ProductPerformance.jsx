import React from "react";
import { motion } from "framer-motion";
import { Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart } from "recharts";

const productPerformanceData = [
  { name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
  { name: "Product B", sales: 5000, revenue: 3400, profit: 2500 },
  { name: "Product C", sales: 6000, revenue: 5400, profit: 2600 },
  { name: "Product D", sales: 4500, revenue: 6500, profit: 3000 },
  { name: "Product E", sales: 3200, revenue: 5500, profit: 4000 },
];

export default function ProductPerformance() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Product Performance</h2>
      {productPerformanceData.length > 0 ? (
        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer>
            <BarChart data={productPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31,41,55,0.8)",
                  borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Legend
                wrapperStyle={{
                  color: "#9CA3AF",
                  marginTop: "10px",
                }}
              />
              <Bar dataKey="sales" fill="#6366F1" />
              <Bar dataKey="revenue" fill="#8B5CF6" />
              <Bar dataKey="profit" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-center text-gray-400">No product performance data available.</p>
      )}
    </motion.div>
  );
}
