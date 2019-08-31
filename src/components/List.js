import React, { Component } from 'react';
import './List.css';
import cart from '../assets/shopping-cart.svg';

export default class components extends Component {
  state = {
    list: [{
      "superMarketLocation": 'test',
      "superMarketName": "String",
      "superMarketPhone": "String",
      "superMarketDescription": "String",
    },
    {
      "superMarketLocation": "test",
      "superMarketName": "String",
      "superMarketPhone": "String",
      "superMarketDescription": "String",
    }]
  };

  async componentDidMount() {
    this.setState(this.state);
}

  render() {
    return (
        <div className="lists-wrapper">
            <div className="item-wrapper">
                <div className="img"><img src={cart} width ='50' alt=""/></div>
                <div className="data">
                  <p>{this.state.list[0].superMarketName}</p>
                  <p>{this.state.list[0].superMarketPhone}</p>
                  <p>{this.state.list[0].superMarketDescription}</p>
                  <p>{this.state.list[0].superMarketLocation}</p>
                </div>
                
            </div>
            <div className="item-wrapper">
                <div className="img"><img src={cart} width ='50' alt=""/></div>
                <div className="data">
                  <p>{this.state.list[0].superMarketName}</p>
                  <p>{this.state.list[0].superMarketPhone}</p>
                  <p>{this.state.list[0].superMarketDescription}</p>
                  <p>{this.state.list[0].superMarketLocation}</p>
                </div>
                
            </div>
        </div>
    );
  }
}
