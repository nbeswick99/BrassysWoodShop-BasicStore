import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
//imports Components/Views
import Home from './views/Home'
import Store from './views/Store'
import AdminLogin from './views/AdminLogin'
import AdminDashboard from './views/AdminDashboard'
import CreateListing from './views/CreateListing'
import Cart from './views/Cart'

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/store/:category' element={<Store />}/>
        <Route path='/cart' element={<Cart />}/>

        <Route path='/admin' element={<AdminLogin />}/>
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/admin/new' element={<CreateListing />}/>
      </Routes>
    </>
  )
}

export default App
