import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from 'lucide-react';

const orderData = [
    { id: "ORD001", customer: "Muhamed Saber", total: 355, status: "Delivered", date: "2024/12/1" },
    { id: "ORD002", customer: "Ahmed Amir", total: 400, status: "Pending", date: "2024/12/2" },
    { id: "ORD003", customer: "Muhamed Sayed", total: 500, status: "Shipped", date: "2024/12/3" },
    { id: "ORD004", customer: "Abdo Muhamed", total: 456, status: "Delivered", date: "2024/12/4" },
    { id: "ORD005", customer: "Mohand Walid", total: 654, status: "Pending", date: "2024/12/5" },
    { id: "ORD006", customer: "Abdallah", total: 789, status: "Delivered", date: "2024/12/6" },
    { id: "ORD007", customer: "Muhamed Saber", total: 374, status: "Shipped", date: "2024/12/16" },
    { id: "ORD008", customer: "Muhamed Saber", total: 967, status: "Delivered", date: "2024/12/17" },
];

export default function OrderTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orderData);

    useEffect(() => {
        const filtered = orderData.filter(
            (order) =>
                order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.status.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredOrders(filtered);
    }, [searchTerm]);

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Orders ..."
                        className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
            </div>

            <div className="overflow-x-auto">
                {filteredOrders.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                            <tr>
                                {["ID", "Customer", "Total", "Status", "Date", "Actions"].map((header) => (
                                    <th
                                        key={header}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {filteredOrders.map((order) => (
                                <motion.tr
                                    key={order.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        {order.customer}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        ${order.total.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        <span
                                        className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full ${
                                            order.status === "Delivered"
                                            ? "bg-gray-100 text-green-800"
                                            : order.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : order.status === "Shipped"
                                            ? "bg-blue-100 text-blue-800"
                                            : "bg-red-100 bg-red-800"
                                        }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        {order.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                                        <button className="text-indigo-400 hover:text-indigo-300">
                                            <Edit size={18} />
                                        </button>
                                        <button className="text-red-400 hover:text-red-300">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-400 text-center">No orders found</p>
                )}
            </div>
        </motion.div>
    );
}
