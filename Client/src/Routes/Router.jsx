import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from '../Pages/Home'
import { ProductDetails } from '../Pages/ProductDetails'
import { Shop } from '../Pages/Shop'
import { Cart } from '../Pages/Cart'



export const Router = () => {
  return (
    <>
    
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
    </>
  )
}
