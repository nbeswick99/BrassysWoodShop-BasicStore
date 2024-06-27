import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

//compents imports
import AdminHeader from '../components/AdminHeader'

import '../css/Utility.css'
import '../css/AdminDashboard.css'
const AdminDashboard = () => {
  const [listings, setListings] = useState([]);
  const [deleteListing, setDeleteListing] = useState(null);
  const Navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:8000/api/listings")
        .then((res) => {
          setListings(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
  }, [deleteListing]);

  const deleteOne = ((_id) => {
    axios.delete(`http://localHost:8000/api/listings/${_id}`)
    .then(res => {
      console.log(res.data)
      setDeleteListing(_id)
    })
    .catch(err => console.log(err))
  })

  return (
    <div>
      <AdminHeader />
      <div className='flex justifyBetween gap3 m3'>
      <div className='flex col alignCenter gap2 flex1 linkDiv '>
        <Link className='link mT2' to='/admin/dashboard'> Listings </Link>
        <Link className='link' to='/admin/fulfillment'>Fulfillment</Link>
        <Link className='link' to='/admin/metrics'>Metrics</Link>
      </div>
      <div className='flex3 border'>
        <div className='flex justifyCenter gap3 mT3'>
          <h2 className='flex listingHeader'>Listings</h2>
          <button className='createNew'onClick={() => Navigate('/admin/new')}>CreateNew</button>
        </div>
        <div className='flex col alignCenter'>
        {listings.map( (each_listing,idx) => {
              return (
                <div key={idx} className='flex justifyAround listingWrapper mT2'>
                  <div className='flex gap1'>
                  <img className='img'src={each_listing.imgUrl} />
                  <div>
                    <h3>{each_listing.name}</h3>
                    <p>${each_listing.price}</p>
                    <p>Quantity: {each_listing.quantity}</p>
                  </div>
                  </div>
                  <div className='flex col justifyAround'>
                    <button className='crudButtons'onClick={() => deleteOne(each_listing._id)}> Delete </button>
                    <button className='crudButtons' onClick={() => Navigate(`/admin/edit`)}> Edit </button>
                  </div>
                </div>
              )})}
        </div>
      </div>
      </div>
    </div>
  )
}

export default AdminDashboard