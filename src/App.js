import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import UserForm from "./pages/UserForm";
import MyCart from "./component/MyCart";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import Categories from "./component/Categories";
import CategoryProducts from "./component/CategoryProducts";
import FavoritePage from "./component/FavoritePage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/myproduct/:category" element={<CategoryProducts/>} />
        <Route path="/FavoritePage" element={<FavoritePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
