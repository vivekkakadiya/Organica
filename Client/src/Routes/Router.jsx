import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from '../Pages/Home'
import { ProductDetails } from '../Pages/ProductDetails'
import { Shop } from '../Pages/Shop'
import { Cart } from '../Pages/Cart'
import { CheckOut } from '../Pages/CheckOut'
import { Login } from '../Pages/Login'
import { Singup } from '../Pages/Singup'



export const Router = () => {
  return (
    <>
    
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/checkout" element={<CheckOut />} />

    </Routes>
    </>
  )
}
