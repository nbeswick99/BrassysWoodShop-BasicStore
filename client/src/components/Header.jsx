import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

import shoppingCart from '../assets/shoppingCart2.png'
import searchGlass from '../assets/searchGlass.png'
import '../css/Header.css'
import '../css/Utility.css'


const Header = () => {
    const [search, setSearch] = useState("");
    const Navigate = useNavigate();
    
    return (
        <div className='fixed'>
            <div className='header flex justifyBetween alignCenter'>
                <h1>Brassy's WoodShop</h1>
                <div className='flex gap2 alignCenter'>
                    <div className='flex gap1 alignCenter'>
                        <input className='search' type="text" name="search" placeholder="search for something..." value={search} onChange={e => setSearch(e.target.value)}/>
                        <img src={searchGlass} alt="Search" />
                    </div>
                    <img src={shoppingCart} alt="Cart" onClick={() => Navigate("/cart")}/>
                </div>
            </div>
            <div className='navBar flex justifyCenter gap1 box-shadow'>
                <Link className='navLink' to={"/store/outdoors"}>Outdoors |</Link>
                <Link className='navLink' to={"/store/furniture"}>Furniture |</Link>
                <Link className='navLink' to={"/store/decorations"}>Decorations</Link>
            </div>
        </div>
    )
}

export default Header