import React, { Component } from 'react';
import './Create.css';
import api from '../services/api';

export default class Create extends Component {
    constructor(props){
        super(props)
        this.state ={
            superMarketLocation: {
              street: '',
              number: '',
              district: '',
              zip: '',
              country: '',
              city: '',
              state: ''
            },
            superMarketName: '',
            superMarketPhone: '',
            superMarketDescription: '',
            superMarketAdditionalImages: null,
        };
        this.handlgeImageChange = this.handlgeImageChange.bind(this)
    }
   

    handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        const files = [];
        files.push(this.state.superMarketAdditionalImages[0]);
        files.push(this.state.superMarketAdditionalImages[1]);
        files.push(this.state.superMarketAdditionalImages[2]);
        files.push(this.state.superMarketAdditionalImages[3]);

        data.append("superMarketAdditionalImages", files[0]);
        data.append("superMarketAdditionalImages", files[1]);
        data.append("superMarketAdditionalImages", files[2]);
        data.append("superMarketAdditionalImages", files[3]);
        data.append('superMarketName', this.state.superMarketName);
        data.append('superMarketPhone', this.state.superMarketPhone);
        data.append('superMarketDescription', this.state.superMarketDescription);
        data.append('superMarketLocation', JSON.stringify(this.state.superMarketLocation));

        await api.post('market', data);
        this.props.history.push('/');
    }

    handlgeImageChange = e => {
        this.setState({ superMarketAdditionalImages: e.target.files }, () => { console.log(this.state.superMarketAdditionalImages) });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
     }

     handleChangeObject = e => {
        this.setState({  superMarketLocation:{
            ...this.state.superMarketLocation,
            [e.target.name]: e.target.value }});
     }

    render(){
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>
                <label>Images: (max of four)</label>
                <input type="file"  required onChange={this.handlgeImageChange} multiple="multiple"/>
                <input 
                    type="text" 
                    name="superMarketName"
                    placeholder="Name"
                    required
                    onChange={this.handleChange}
                 />
                <input 
                    type="number" 
                    name="superMarketPhone"
                    placeholder="Phone"
                    required
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    name="superMarketDescription"
                    placeholder="Description"
                    required
                    onChange={this.handleChange}
                  
                 />
                <input 
                    type="text" 
                    name="street"
                    placeholder="Street"
                    required
                    onChange={this.handleChangeObject}  
                />
                <input 
                    type="text" 
                    name="number"
                    placeholder="Number"
                    required
                    onChange={this.handleChangeObject}  
                />
                <input 
                    type="text" 
                    name="district"
                    placeholder="District"
                    required
                    onChange={this.handleChangeObject}  
                />
                <input 
                    type="number" 
                    name="zip"
                    placeholder="Zip Code"
                    required
                    onChange={this.handleChangeObject}
                />
                <input 
                    type="text" 
                    name="city"
                    placeholder="City"
                    required
                    onChange={this.handleChangeObject}
                />
                <input 
                    type="text" 
                    name="state"
                    placeholder="State"
                    required
                    onChange={this.handleChangeObject}
                />
                 <input 
                    type="text" 
                    name="country"
                    placeholder="Country"
                    required
                    onChange={this.handleChangeObject}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}