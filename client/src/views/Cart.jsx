import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../components/Header'

import '../css/Utility.css'
import '../css/Cart.css'

const Cart = () => {
  const [listings, setListings] = useState([]);
  const [updateCart, setUpdateCart] = useState(null);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/listings")
        .then((res) => {
          setListings(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
  }, [updateCart])

  const removeOne = (each_listing) => {
    const removeCart= each_listing
    removeCart.inCart = false
    axios.patch(`http://localhost:8000/api/listings/${each_listing._id}`, removeCart)
    .then((res) => {
      console.log(res)
      setUpdateCart(removeCart)
      })
    .catch((err) => {
      console.log(err)
      })
  }

  return (
    <div >
      <Header />
      <div className='flex justifyAround mT3 gap3 m3'>
      <div className='border flex col alignCenter flex3 mT3'>
        <h1 className='mT1'>Cart</h1>
        {listings.filter(each_listing => each_listing.inCart === true).map((each_listing, idx) => {
          return (
            <div key={idx} className='flex justifyAround cartWrapper mT2 '>
              <div className='flex gap1'>
              <img className='img'src={each_listing.imgUrl} />
              <div className='flex col justifyBetween'>
                <h3>{each_listing.name}</h3>
                <p>${each_listing.price}</p>
                <label htmlFor='Quantity'>Quantity: </label>
                <input type="number" placeholder='1'/>
              </div>
              </div>
              <div className='flex alignCenter'>
                <button className='removeButton' onClick={() => removeOne(each_listing)}> Remove </button>
              </div>
            </div>
        )})}
      </div>
      <div className='flex1 checkOutDiv flex alignCenter justifyCenter mT1 checkoutMargin'>
        <button className='checkoutButton'>Proceed to Checkout</button>
      </div>
      </div>
    </div>
  )
}

export default Cart