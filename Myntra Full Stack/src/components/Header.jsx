import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { filterActions } from '../features/filter/filterSlice';

function Header() {
    const [txt, setTxt] = useState('');
    const  bagItems = useSelector((state)=>{
        return state.bag.totalItems;
    })
    const dispatch = useDispatch()

    function useDebounce(callback, delay) {
        const timerRef = React.useRef(null);
      
        return React.useCallback((...args) => {
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            callback(...args);
          }, delay);
        }, [callback, delay]);
    }
    const debouncedSearch = useDebounce((value) => {
        dispatch(filterActions.searchQuery(value));
    }, 500);

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
                <input className="search_input" value ={txt} onChange={(e)=>{
                    setTxt(e.target.value);
                    debouncedSearch(e.target.value);
                }} placeholder="Search for products, brands and more"/>
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