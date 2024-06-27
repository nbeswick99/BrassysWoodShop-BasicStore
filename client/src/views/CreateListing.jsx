import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
//compenent imports
import AdminHeader from '../components/AdminHeader'

import '../css/Utility.css'
import '../css/CreateListing.css'

const CreateListing = () => {
  const [product, setProduct] = useState({
    name: "",
    price:"",
    quantity:"",
    length:"",
    width: "",
    height: "",
    weight: "", 
    imgUrl: "",
    inCart:false 
  });

  const Navigate=useNavigate();

  const changeHandler = (e) => {
    setProduct((prevState) => ({...prevState,
      [e.target.name]: e.target.value
      }))
    }

  const submitHandler = (e) => {
    e.preventDefault();
    const createListing = product
    axios.post("http://localhost:8000/api/listings", createListing)
    .then((res) => {
      console.log(res.data)
      setProduct({
        name: "",
        price:"",
        quantity:"",
        length:"",
        width: "",
        height: "",
        weight: "", 
        imgUrl: "",
        inCart:false 
      });
      Navigate("/admin/dashboard")
  })
  .catch((err) => {
    {
      setCreateErr(err.response.data.errors)
      }
    })
  }

  return (
    <>
      <AdminHeader />
      <div className='flex justifyBetween gap3 m3'>
      <div className='flex col alignCenter gap2 flex1 linkDiv '>
        <Link className='link mT2' to='/admin/dashboard'> Listings </Link>
        <Link className='link' to='/admin/fulfillment'>Fulfillment</Link>
        <Link className='link' to='/admin/metrics'>Metrics</Link>
      </div>
      <div className='flex3 border'>
        <form className='formListings' onSubmit={ e => submitHandler(e)}>
          <div className='flex justifyBetween'>
            <label htmlFor="name">Product Name</label>
            <input type="text" id='name' name='name' value={product.name} onChange={e => changeHandler(e)}/>
          </div>
          <div className='flex justifyBetween mT2'>
            <label htmlFor="price">Price</label>
            <input type="number" id='price' name='price' value={product.price} onChange={e => changeHandler(e)}/>
          </div>
          <div className='flex justifyBetween mT2'>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id='quantity' name='quantity' value={product.quantity} onChange={e => changeHandler(e)}/>
          </div>
          <div>
            <h2 className='mT1'>Dimensions:</h2>
              <div className='flex justifyBetween mT2'>
                <label htmlFor="length">Length</label>
                <input type="number" id='length' name='length' value={product.length} onChange={e => changeHandler(e)}/>
              </div>
              <div className='flex justifyBetween mT2'>
                <label htmlFor="width">Width</label>
                <input type="number" id='width' name='width' value={product.width} onChange={e => changeHandler(e)}/>
              </div>
              <div className='flex justifyBetween mT2'>
                <label htmlFor="height">Height</label>
                <input type="number" id='height' name='height' value={product.height} onChange={e => changeHandler(e)}/>
              </div>
          </div>
          <div className='flex justifyBetween mT2'>
            <label htmlFor="weight">Weight</label>
            <input type="number" id='weight' name='weight' value={product.weight} onChange={e => changeHandler(e)}/>
          </div>
          <div className='flex justifyBetween mT2'>
            <label htmlFor="imgUrl">Image Url</label>
            <input type="text" id='imgUrl' name='imgUrl' value={product.imgUrl} onChange={e => changeHandler(e)}/>
          </div>
          <button className='mT2 createButton'>Add Listing</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default CreateListing