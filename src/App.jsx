import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Product from "./pages/product";
import ShoppingCard from "./pages/shopping-card";
import ProductCheckout from "./components/product-checkout";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:category/:productId" element={<Product />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
        <Route path="/product-checkout" element={<ProductCheckout />} />
      </Routes>
    </div>
  );
};

export default App;
