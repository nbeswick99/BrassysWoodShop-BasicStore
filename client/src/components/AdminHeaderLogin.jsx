import React from 'react'
//css import
import '../css/AdminHeader.css'
import '../css/Utility.css'

const AdminHeaderLogin = (props) => {
  
  return (
    <div className='fixed'>
      <div className='headerSignedOut flex justifyBetween alignCenter'>
        <h1>Brassy's WoodShop</h1>
        <h2>Admin Login</h2>
      </div>
    </div>
  )
}

export default AdminHeaderLogin