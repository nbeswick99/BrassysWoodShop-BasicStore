import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
//components/views
import Card from '../components/Card'
import Header from '../components/Header'
//css
import '../css/Utility.css'
import '../css/Store.css'
const Store = () => {
  const {category} = useParams();
  const [selectCategory, setSelectedCategory] = useState(category)
  const [listings, setListings] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/listings")
        .then((res) => {
          setListings(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
  }, [])

  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='flex justifyEnd '>
          <label htmlFor="sortBy">Sort By: </label>
          <select name="sortBY" id="sortBY">
            <option value="">Sort By</option>
            <option value="highToLow">High to Low</option>
            <option value="lowToHigh">Low to High</option>
            <option value="recommended">Recommended</option>
          </select>
        </div>
        <div className='flex gap3 mT3'>
          <div>
            <div>
              <label htmlFor="category">Categories:</label>
              <select name="category" id="category" value={selectCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="decoration">Decoration</option>
                <option value="furniture">Furniture</option>
                <option value="outdoors">Outdoors</option>
              </select>
            </div>
            {/* <div>
              <h2>Price Range</h2>
              <PriceRange />;
            </div> */}
          </div>
          <ol className='flex gap2 products'>
            {listings.map( (each_listing,idx) => {
              return <Card key={idx} data={each_listing}/>
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default Store