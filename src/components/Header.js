import React from 'react';
import logo from '../assets/shopping-cart.svg';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){
    return (
      <div className='header-wrap'>
        <div className="button">
          <Link to="/">
          <button className="button-item">Home</button>
          </Link>
        </div>
        <Link className="logo" to="/"> 
        <div className="logo">     
          <div className='logo-img'>
              <img src={logo} alt="Shopping Cart"/>
          </div>
          <div className="logo-text">SuperMarketApp</div>
        </div>
        </Link>  
        <div className="button">
        <Link to="/Create/">
          <button className="button-item">New Market</button>
        </Link>
        </div>
      </div> 
    );
}
