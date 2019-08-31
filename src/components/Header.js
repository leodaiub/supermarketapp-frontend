import React, { Component } from 'react';
import logo from '../assets/shopping-cart.svg';
import './Header.css';

// import { Container } from './styles';

export default class components extends Component {
  render() {
    return (
      <div className='header-wrap'>
        <div className="invisible"></div>
        <div className="logo">
          <div className='logo-img'>
              <img src={logo} alt="Shopping Cart"/>
          </div>
          <div className="logo-text">SuperMarketApp</div>
        </div>
        <div className="button">
          <button className="button-item">Create New Market</button>
        </div>
      </div> 
    );
  }
}