import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Products from "../products/products";
import About from "../about/about";
import Help from "../help/help";
import NotFound from "../not_found/not_found";
import Product from "../products/product/product";
import { MainLayout } from "../layouts/main_layouts";

const Router: React.FC = () => {
  return (
  <Routes >
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Help' element={<Help />} />
      <Route path='/Products' element={<Products />} />
      <Route path='/Products/:produectId' element={<Product />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
  )
}
  
 
export default Router;