import React, { Component} from 'react';
import './List.css';
import api from '../services/api';
//import io from 'socket.io-client';
import cart from '../assets/shopping-cart.svg';

class List extends Component {
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
            <div className="item-wrapper">
              <div className='test'><img src={market.superMarketMainImage ? market.superMarketMainImage.url : cart} width ='50' alt=""/></div>
              <div className="data">
                <p>{ market.superMarketName ? market.superMarketName : 'ola' }</p>
                <p>{ market.superMarketName ? market.superMarketName : 'ola' }}</p>
                <p>{ market.superMarketName ? market.superMarketName : 'ola' }}</p>
              </div>   
            </div>
          ))}
          {console.log(this.state)}
      </div>
    );
  }
}

export default List;