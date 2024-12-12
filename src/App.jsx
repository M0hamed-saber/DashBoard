import { Route, Routes } from "react-router-dom"
import OverviewPage from "./Pages/OverviewPage"
import ProductsPage from "./Pages/ProductsPage"
import Sidebar from "./Components/common/Sidebar"
import Userspage from "./Pages/Userspage"
import SalesPage from "./Pages/SalesPage"
import OrdersPage from "./Pages/OrdersPage"
import AnalyticsPage from "./Pages/AnalyticsPage"
import SettingPage from "./Pages/SettingPage"

function App() {

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 opacity-80"/>
        <div className="absolute inset-0 backdrop-blur-sm"/>
      </div>
      <Sidebar/>
    <Routes>
      <Route path="/" element={<OverviewPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/users" element={<Userspage/>}/>
      <Route path="/sales" element={<SalesPage/>}/>
      <Route path="/orders" element={<OrdersPage/>}/>
      <Route path="/analytics" element={<AnalyticsPage/>}/>
      <Route path="/setting" element={<SettingPage/>}/>
    </Routes>
    </div>
  )
}

export default App



