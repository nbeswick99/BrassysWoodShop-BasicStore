//functionality import
import React from 'react'
import { useNavigate } from 'react-router-dom'
//components 
import Header from '../components/Header'
//image imports
import woodShop from '../assets/woodShop.jpg'
import brassyLogo from '../assets/brassyLogo.png'
import decoration from '../assets/decorations.jpeg'
import furniture from '../assets/furniture.jpeg'
import outdoors from '../assets/outdoors.jpeg'
// css imports
import '../css/Utility.css'
import '../css/Home.css'

const Home = () => {

  const Navigate = useNavigate();
  return (
    <>
      <Header />
      <div>
        <img src={woodShop} alt="woodShop picture" className='splashImg'/>
        <button className='button1'onClick={() => Navigate("/store/all")}>Start Shopping</button>
      </div>
      <div className='flex col alignCenter'>
        <img src={brassyLogo} alt="Brassy's workshop logo"/>
        <p className='mT1'>Brassy's woodshoop makes quality handmade goods you're sure to love</p>
      </div>
      <div className='flex justifyCenter gap4 mT3'>
        <div className='flex col'>
          <img className='categoryImg' src={outdoors} alt="Outdoors Category" />
          <button className='button2' onClick={() => Navigate("/store/outdoors")}>Outdoors</button>
        </div>
        <div className='flex col'>
          <img className='categoryImg' src={furniture} alt="Furniture Category" />
          <button className='button2' onClick={() => Navigate("/store/furniture")}>Furniture</button>
        </div>
        <div className='flex col'>
          <img className='categoryImg'src={decoration} alt="Decoratons Category" />
          <button className='button2' onClick={() => Navigate("/store/decorations")}>Decorations</button>
        </div>
      </div>
    </>
  )
}

export default Home