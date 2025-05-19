import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Product  from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='px-8 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
       <Routes>
         <Route path = '/' element ={<Home/>}/>
         <Route path='/collection' element={<Collection/>}/>
         <Route path='/login' element={<Login/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/product/:productId' element={<Product/>} />
         <Route path='/about' element={<About/>} />
         <Route path= '/cart' element={<Cart/>} />
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
