import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login'
import ProductList from './pages/product/ProductList';
import ViewProduct from './pages/product/ViewProduct';
import Cart from './pages/Cart';

const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/products/:id' element={<ViewProduct />}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
