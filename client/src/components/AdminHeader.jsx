import React from 'react'
import { useNavigate } from 'react-router-dom'
//css imports
import '../css/AdminHeader.css'
import '../css/Utility.css'

const AdminHeader = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <div className='fixed'>
      <div className='headerSignedIn flex justifyBetween alignCenter'>
        <h1>Brassy's WoodShop</h1>
        <h2 onClick={() => Navigate('/admin')}>Sign Out</h2>
      </div>
    </div>
    </div>
  )
}

export default AdminHeader