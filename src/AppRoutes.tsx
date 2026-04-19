import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import QRPayment from './pages/QRPayment';
import History from './pages/History';
import Profile from './pages/Profile';
import Points from './pages/Points';
import Vouchers from './pages/Vouchers';

export default function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<QRPayment />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/points" element={<Points />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="*" element={<Catalog />} />
      </Routes>
    </AnimatePresence>
  );
}
