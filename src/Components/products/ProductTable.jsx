import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from 'lucide-react';

const PRODUCT_DATA = [
    { id: 1, name: "Muhammed Saber", category: "Electronic", price: 800, stock: 145, sales: 1500 },
    { id: 2, name: "Ahmed Amir", category: "Electronic", price: 500, stock: 145, sales: 1200 },
    { id: 3, name: "Mohand Walid", category: "Electronic", price: 200, stock: 145, sales: 1600 },
    { id: 4, name: "Mohamed Sayed", category: "Home", price: 300, stock: 145, sales: 1900 },
    { id: 5, name: "Kalboba", category: "Fitness", price: 700, stock: 145, sales: 2000 },
];

export default function ProductTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

    useEffect(() => {
        const filtered = PRODUCT_DATA.filter(
            (product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm]);

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Products ..."
                        className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
            </div>

            <div className="overflow-x-auto">
                {filteredProducts.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                            <tr>
                                {["Name", "Category", "Price", "Stock", "Sales", "Action"].map((header) => (
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
                            {filteredProducts.map((product) => (
                                <motion.tr
                                    key={product.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        {product.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        {new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                        }).format(product.price)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        {product.stock}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                        {product.sales}
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
                    <p className="text-gray-400 text-center">No products found</p>
                )}
            </div>
        </motion.div>
    );
}
