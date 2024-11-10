import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
