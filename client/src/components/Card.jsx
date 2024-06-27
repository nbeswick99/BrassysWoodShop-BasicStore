import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import '../css/Utility.css'
import '../css/Card.css'

const Card = (props) => {
  const Navigate = useNavigate();
  console.log(props)

  const addToCart = () => {
    const updateCart = props.data
    updateCart.inCart = true
    axios.patch(`http://localhost:8000/api/listings/${props.data._id}`, updateCart)
    .then((res) => {
      console.log(res)
      })
    .catch((err) => {
      console.log(err)
      })
    }

  return (
    <li className='border'>
      <div>
        <img className='listingImg' src={props.data.imgUrl} onClick={() => Navigate(`/store/details/${props.data._id}`)}/>
        <h3 className='title'>{props.data.name}</h3>
        <div className='flex justifyBetween'>
          <div >
            <p className='price'>${props.data.price}</p>
            {props.data.quantity > 0?<p style={{"color":"#8FD14F"}} className='price'>In Stock</p>: <p style={{"color": "red"}} className='price'>unAvalaible</p>}
          </div>
          {props.data.quantity > 0?<button onClick={() => addToCart()} className='addToCart'>Add to Cart</button>: <button addToCart>Unavaible</button>}
        </div>
      </div>
    </li>
  )
}

export default Card