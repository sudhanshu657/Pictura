import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {

    const {showLogin} = useContext(AppContext)  

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100'>
   
     {/* applying nav bar should be visisble to all pages  */}
     <ToastContainer position='bottom-right'/>
     <Navbar />

     { showLogin && <Login />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/Buy' element={<BuyCredit />} />
      </Routes>

      <Footer />


    </div>
  )
}

export default App