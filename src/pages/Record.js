import React, { Component } from 'react';
import api from '../services/api';
import './Record.css';

export default class Record extends Component {
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
   

    async componentDidMount() {
       const id = this.props.match.params.id;

       const response = await api.get(`/market/${id}/`);

       await this.setState(response.data);
       console.log(this.state);
    }

    handleDelete = async e => {
        e.preventDefault();

        const id = this.props.match.params.id;

        await api.delete(`/market/${id}/`);

        this.props.history.push('/');
    }

    handleSubmit = async e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        //const data = new FormData();
        //const files = [];
        // files.push(this.state.superMarketAdditionalImages[0]);
        // files.push(this.state.superMarketAdditionalImages[1]);
        // files.push(this.state.superMarketAdditionalImages[2]);
        // files.push(this.state.superMarketAdditionalImages[3]);

        // data.append("superMarketAdditionalImages", files[0]);
        // data.append("superMarketAdditionalImages", files[1]);
        // data.append("superMarketAdditionalImages", files[2]);
        // data.append("superMarketAdditionalImages", files[3]);
        // data.append('superMarketName', this.state.superMarketName);
        // data.append('superMarketPhone', this.state.superMarketPhone);
        // data.append('superMarketDescription', this.state.superMarketDescription);
        // data.append('superMarketLocation', JSON.stringify(this.state.superMarketLocation));

        await api.put(`/market/${id}/`, this.state);
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
        return (
            <div className="data-wrap">
                <div className="images-wrap">
                <div className="main-image">
                <div><img src={this.state.superMarketMainImage ? this.state.superMarketMainImage.location : ''} alt=""/></div>
                </div>
                <div className="additional-images">
                    <div><img src={this.state.superMarketMainImage ? this.state.superMarketAdditionalImages[0][0].location : ''} alt=""/></div>
                    <div><img src={this.state.superMarketMainImage ? this.state.superMarketAdditionalImages[1][0].location : ''} alt=""/></div>
                    <div><img src={this.state.superMarketMainImage ? this.state.superMarketAdditionalImages[2][0].location : ''} alt=""/></div>
                </div>
                </div>
                <div className="form">
                    <label>Name:</label>
                    <input 
                        name="superMarketName"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketName} 
                    />
                    <label>Phone:</label>
                    <input
                        name="superMarketPhone"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketPhone} 
                    />
                    <label>Description:</label>
                    <input 
                        name="superMarketDescription"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketDescription} 
                    />
                    <label>Street:</label>
                    <input 
                        name="superMarketLocation.Street"
                        type="text"
                        onChange={this.handleChangeObject} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.street : ''} 
                    />
                    <label>Number:</label>
                    <input 
                        name="number"
                        type="text"
                        onChange={this.handleChangeObject} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.number : ''} 
                    />
                    <label>District:</label>
                    <input
                        name="district"
                        type="text"
                        onChange={this.handleChangeObject} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.district : ''} 
                    />
                    <label>City:</label>
                    <input 
                        name="city"
                        type="text"
                        onChange={this.handleChangeObject} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.city : ''} 
                    />
                    <label>State:</label>
                    <input 
                        name="state"
                        type="text"
                        onChange={this.handleChangeObject} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.state : ''}
                    />
                    <label>Country:</label>
                    <input 
                        name="superMarketLocation.state"
                        type="text"
                        onChange={this.handleChangeObject} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.country : ''} 
                    />
                    <input 
                        type="button" 
                        value="Send"
                        onClick={this.handleSubmit}
                    />
                    <input 
                        type="button" 
                        value="DELETE"
                        onClick={this.handleDelete}
                    />
                </div>
            </div> 
        );
    }
}