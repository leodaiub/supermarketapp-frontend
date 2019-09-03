import React, { Component } from 'react';
import './List.css';
import api from '../services/api';

export default class components extends Component {
  state = {
      list: [],
  };

  async componentDidMount() {
      //this.registerToSocket();

      const response = await api.get('/');

      this.setState({list: response.data});
  }

  render() {
    return (
        <div className="lists-wrapper">
          {this.state.list.map(market => (
            <div className="item-wrapper">
              <div className='test'><img src={market.superMarketMainImage.url} width ='50' alt=""/></div>
              <div className="data">
                <p>{market.superMarketName}</p>
                <p>{market.superMarketPhone}</p>
                <p>{market.superMarketDescription}</p>
                <p>{market.superMarketLocation}</p>
              </div>   
            </div>
          )) }
      </div>
    );
  }
}
