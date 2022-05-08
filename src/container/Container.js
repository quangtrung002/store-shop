import { Routes, Route } from "react-router-dom"
import Product from "../navbar/page/Product/Product";
import Home from "../navbar/page/Home/Home";
import Cart from "../navbar/page/Cart/Cart";
import Blog from "../navbar/page/Blog/Blog";
import Contact from "../navbar/page/Contact/Contact";
import Error from "../navbar/page/404/404";
export default function Container() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/404" element={<Error />}></Route>
    </Routes>
  )
}
