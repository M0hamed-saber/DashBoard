import React from 'react';
import { motion } from "framer-motion";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const userRetentionData = [
  { name: "Week 1", retention: 100 },
  { name: "Week 2", retention: 90 },
  { name: "Week 3", retention: 60 },
  { name: "Week 4", retention: 40 },
  { name: "Week 5", retention: 60 },
  { name: "Week 6", retention: 80 },
  { name: "Week 7", retention: 70 },
  { name: "Week 8", retention: 45 },
];

export default function UserRetention() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">User Retention</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userRetentionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(31,41,55,0.8)", borderColor: "#4B5563" }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="retention"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}