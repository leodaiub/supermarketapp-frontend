import React, { Component} from 'react';
import './List.css';
import api from '../services/api';
import {Link }from 'react-router-dom';

export default class List extends Component {
  state = {
      list: [],
  };

  async componentDidMount() {

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
                src={market.superMarketMainImage ? market.superMarketMainImage.location : market.superMarketMainImage.location} 
                width ='200' height='150' alt=""/>
              </div>
              <div className='images'>
                <img 
                src={market.superMarketAdditionalImages ? market.superMarketAdditionalImages[0][0].location : market.superMarketMainImage.location} 
                width ='100' alt=""/>
                <img 
                src={market.superMarketAdditionalImages ? market.superMarketAdditionalImages[1][0].location : market.superMarketMainImage.location} 
                width ='100' alt=""/>
                <img 
                src={market.superMarketAdditionalImages ? market.superMarketAdditionalImages[2][0].location : market.superMarketMainImage.location} 
                width ='100' alt=""/>
              </div>
              <div className="data">
                <p><strong>Name:</strong> { market.superMarketName ? market.superMarketName : 'ola' }</p>
                <p><strong>Phone:</strong> { market.superMarketName ? market.superMarketPhone : 'ola' }</p>
                <p><strong>Description:</strong> { market.superMarketName ? market.superMarketDescription : 'ola' }</p>
                <p><strong>Street:</strong> { market.superMarketLocation ? market.superMarketLocation.street : 'ola' }</p>
                <p><strong>Number:</strong> { market.superMarketLocation ? market.superMarketLocation.number : 'ola' }</p>
                <p><strong>Zip Code:</strong> { market.superMarketLocation ? market.superMarketLocation.zip : 'ola' }</p>
                <p><strong>District:</strong> { market.superMarketLocation ? market.superMarketLocation.district : 'ola' }</p>
                <p><strong>City:</strong> { market.superMarketLocation ? market.superMarketLocation.city : 'ola' }</p>
                <p><strong>State:</strong> { market.superMarketLocation ? market.superMarketLocation.state : 'ola' }</p>
                <p><strong>Country:</strong> {market.superMarketLocation ? market.superMarketLocation.country : 'ola' }</p>
              </div>   
            </div>
            </Link>
          ))}
      </div>
    );
  }
}