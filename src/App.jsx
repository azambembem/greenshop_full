import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Product from "./pages/product";
import ShoppingCard from "./pages/shopping-card";
import ProductCheckout from "./components/product-checkout";
import Profile from "./pages/profile";
import { dashboard_mock } from "./utils/mock";
import { useAuth } from "./configs/auth";
// import Footer from "./components/Footer";

const App = () => {
  const { isAuthed } = useAuth();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:category/:productId" element={<Product />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
        <Route path="/product-checkout" element={<ProductCheckout />} />
        {isAuthed() && (
          <Route path="/profile" element={<Profile />}>
            {dashboard_mock.map(({ path, Component, id }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
          </Route>
        )}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
