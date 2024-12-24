import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/Navbar'
import FreeShipping from '../components/FreeShipping'
import NewArrivals from '../components/NewArrivals'
import NewProduct from '../components/NewProduct'
import Discount from '../components/​Discount'
import Terminel from '../components/Terminel'
import CartTap from '../components/CartTap'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const Home = () => {
  return (
    <div>
      <NavBar />
      
      <FreeShipping />
      <NewArrivals />
      <NewProduct />
      <Discount />
      <Terminel />
      <ToastContainer />
    </div>
  )
}

export default Home