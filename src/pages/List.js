import React, { Component} from 'react';
import './List.css';
import api from '../services/api';
//import io from 'socket.io-client';
import cart from '../assets/shopping-cart.svg';
import {Link }from 'react-router-dom';

export default class List extends Component {
  state = {
      list: [],
  };

  async componentDidMount() {
      //this.registerToSocket();

      const response = await api.get();

      this.setState({list: response.data});

  }
  

  render() {
    return (
        <div className="lists-wrapper">
          {this.state.list.map(market => (
            <Link to={`/Market/${market._id}`}>
            <div className="item-wrapper">
              <div className='image'>
                <img 
                src={market.superMarketMainImage ? market.superMarketMainImage.location : cart} 
                width ='200' alt=""/>
              </div>
              <div className='images'>
                <img 
                src={market.superMarketMainImage ? market.superMarketMainImage.location : cart} 
                width ='100' alt=""/>
                <img 
                src={market.superMarketMainImage ? market.superMarketMainImage.location : cart} 
                width ='100' alt=""/>
                <img 
                src={market.superMarketMainImage ? market.superMarketMainImage.location : cart} 
                width ='100' alt=""/>
              </div>
              <div className="data">
                <p><strong>Nome:</strong> { market.superMarketName ? market.superMarketName : 'ola' }</p>
                <p><strong>Telefone:</strong> { market.superMarketName ? market.superMarketPhone : 'ola' }</p>
                <p><strong>Descrição:</strong> { market.superMarketName ? market.superMarketDescription : 'ola' }</p>
                <p><strong>Rua:</strong> { market.superMarketName ? market.superMarketLocation.Street : 'ola' }</p>
                <p><strong>CEP:</strong> { market.superMarketName ? market.superMarketLocation.Zip : 'ola' }</p>
                <p><strong>Cidade:</strong> { market.superMarketName ? market.superMarketLocation.city : 'ola' }</p>
                <p><strong>Estado:</strong> {market.superMarketName ? market.superMarketLocation.state : 'ola' }</p>
              </div>   
            </div>
            </Link>
          ))}
      </div>
    );
  }
}