import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//component imports
import AdminHeaderLogin from '../components/AdminHeaderLogin'
//img import
import brassyLogo from '../assets/brassyLogo.png'
//css
import '../css/Utility.css'
import '../css/AdminLogin.css'
// import '../css/AdminLogin.css'

const AdminLogin = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const Navigate = useNavigate();

  const changeHandler = (e) => {
    setLogin((prevState) => ({...prevState,
      [e.target.name]: e.target.value
      }))
    }
  
  const submitHandler = (e) => {
    Navigate('/admin/dashboard')
  }
  return (
    <div className='loginWrapper flex col'>
      <AdminHeaderLogin />
      <div className='flex alignCenter flexGrow'>
        <div className='left flex col alignCenter flexGrow' >
          <h1>Admin login</h1>
          <form onSubmit={e => submitHandler(e)} className='mT2 flex col justAround form '>
            <div className='flex justifyBetween mT1'>
              <label htmlFor="login"> Login </label>
              <input type="text" id="login" value={login.username} onChange={e => changeHandler(e)}/>
            </div>
            <div className='flex justifyBetween mT1'>
              <label htmlFor="password"> Password </label>
              <input type="password" id='password'value={login.password} onChange={e => changeHandler(e)}/>
            </div>
            <button className='loginButton mT2' onClick={() => useNavigate('/admin/dashboard')}>Login</button>
          </form>
        </div>
        <div className='right flex justifyCenter alignCenter'>
          <div>
            <img src={brassyLogo}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin