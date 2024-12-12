import React from 'react';
import Header from '../Components/common/Header';
import { motion } from "framer-motion";
import StatCard from '../Components/common/StatCard';
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';
import ProductTable from '../Components/products/ProductTable';
import CategoryDistributionChart from '../Components/overview/CategoryDistributionChart';
import SalesTrendChart from '../Components/products/SalesTrendChart';

export default function ProductsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value={1235}
            color="#6366f1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#8B5CF6"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#EC4899"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={"$547,210"}
            color="#10B981"
          />
        </motion.div>
        <ProductTable />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
}
