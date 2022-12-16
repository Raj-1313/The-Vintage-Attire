import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/AdminPages/Dashboard'
import { Cart } from '../Pages/cartPage/Cart'
import Checkout from '../Pages/checkout_page/Checkout'
import Kidspage from '../Pages/FilterPages/Kidspage'
import MensPage from '../Pages/FilterPages/MensPage'
import WomenPage from '../Pages/FilterPages/WomenPage'
import Home from '../Pages/Home/Home'
import KidsProductPage from '../Pages/Product_Page/KidsProductPage'
import MenProductPage from '../Pages/Product_Page/MenProductPage'
import WomenProductPage from '../Pages/Product_Page/WomenProductPage'
import Signup from '../Pages/Signup'
import SingleProduct from '../Pages/single_product/SingleProduct'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/admin' element={<Dashboard/>}></Route>
        <Route path='/product/men' element={<MenProductPage/>}></Route>
        <Route path='/product/women' element={<WomenProductPage/>}></Route>
        <Route path='/product/menspage' element={<MensPage/>}></Route>
        <Route path='/product/womenpage' element={<WomenPage/>}></Route>
        <Route path='/product/kids' element={<KidsProductPage/>}></Route>
        <Route path='/product/kidspage' element={<Kidspage/>}></Route>
        {/* <Route path='/product/home' element={<HomesPage/>}></Route> */}
        {/* <Route path='/product/accessories' element={<AccessoriesProductPage/>}></Route> */}
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/cart/checkout' element={<Checkout/>}></Route>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>
        {/* <Route path='/payment' element={<Payment/>}></Route> */}
            {/* private Routes need to be done */}
    </Routes>
  )
}

export default AllRoutes