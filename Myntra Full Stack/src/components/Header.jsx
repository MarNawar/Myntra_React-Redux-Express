import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

function Header() {
    const  bagItems = useSelector((state)=>{
        return state.bag.totalItems;
    })
    return (
        <header>
            <div className="logo_container">
                <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
            </div>
            <nav className="nav_bar">
                <Link to="#">Women</Link>
                <Link to="#">Men</Link>
                <Link to="#">Kids</Link>
                <Link to="#">Home & Living</Link>
                <Link to="#">Beauty</Link>
                <Link to="#">Studio <sup>New</sup></Link>
            </nav>
            <div className="search_bar">
                <span className="material-symbols-outlined search_icon">search</span>
                <input className="search_input" placeholder="Search for products, brands and more"/>
            </div>
            <div className="action_bar">
                <div className="action_container">
                    <span className="material-symbols-outlined action_icon">person</span>
                    <span className="action_name">Profile</span>
                </div>

                <div className="action_container">
                    <span className="material-symbols-outlined action_icon">favorite</span>
                    <span className="action_name">Wishlist</span>
                </div>

                <Link className="action_container" to="/bag">
                    <span className="material-symbols-outlined action_icon">shopping_bag<span className="bag_item_count" style={{visibility: !bagItems?'hidden':'visible'}}>{bagItems}</span>
                    </span>
                    <span className="action_name">Bag</span>
                </Link>
            </div>
        </header>
    )
}

export default Header