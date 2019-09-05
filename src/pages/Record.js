import React, { Component } from 'react';
import api from '../services/api';
import './Record.css';

export default class Record extends Component {
    state = {};

    async componentDidMount() {
       const id = this.props.match.params.id;

       const response = await api.get(`/market/${id}/`);

       await this.setState(response.data);
    }

    handleChange(event) {
        this.setState({inputVal: event.target.value});
      }

    handleDelete = async e => {
        e.preventDefault();

        const id = this.props.match.params.id;

        await api.delete(`/market/${id}/`);

        this.props.history.push('/');
    }

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();

        const id = this.props.match.params.id;

        data.append('superMarketName', this.state.superMarketName);
        data.append('superMarketPhone', this.state.superMarketPhone);
        data.append('superMarketDescription', this.state.superMarketDescription);
        data.append('superMarketLocation.Street', this.state.superMarketLocation.Street);
        data.append('superMarketLocation.Zip', this.state.superMarketLocation.Zip);
        data.append('superMarketLocation.city', this.state.superMarketLocation.city);
        data.append('superMarketLocation.state', this.state.superMarketLocation.state);

        console.log(data + "teste")
        await api.put(`/market/${id}/`, data);

        this.props.history.push('/');
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handlgeImageChange = e => {
        this.setState({superMarketAdditionalImages: e.target.files});
    }


    render(){
        return (
            <div className="data-wrap">
                <div className="images-wrap">
                <div className="main-image">
                <div><img src={this.state.superMarketMainImage ? this.state.superMarketMainImage.location : ''} alt=""/></div><input type="file" onChange={this.handlgeImageChange}/>
                </div>
                <div className="additional-images">
                    <div><img src={this.state.superMarketMainImage ? this.state.superMarketMainImage.location : ''} alt=""/><input type="file" onChange={this.handlgeImageChange}/></div>
                    <div><img src={this.state.superMarketMainImage ? this.state.superMarketMainImage.location : ''} alt=""/><input type="file" onChange={this.handlgeImageChange}/></div>
                    <div><img src={this.state.superMarketMainImage ? this.state.superMarketMainImage.location : ''} alt=""/><input type="file" onChange={this.handlgeImageChange}/></div>
                </div>
                </div>
                <div className="form">
                    <label>Nome:</label>
                    <input 
                        name="superMarketName"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketName} 
                    />
                    <label>Telefone:</label>
                    <input
                        name="superMarketPhone"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketPhone} 
                    />
                    <label>Descrição:</label>
                    <input 
                        name="superMarketDescription"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketDescription} 
                    />
                    <label>Rua:</label>
                    <input 
                        name="superMarketLocation.Street"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.Street : ''} 
                    />
                    <label>CEP:</label>
                    <input 
                        name="superMarketLocation.Zip"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.Zip : ''} 
                    />
                    <label>Cidade:</label>
                    <input
                        name="superMarketLocation.city"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.city : ''} 
                    />
                    <label>Estado:</label>
                    <input 
                        name="superMarketLocation.state"
                        type="text"
                        onChange={this.handleChange} 
                        defaultValue={this.state.superMarketLocation ? this.state.superMarketLocation.state : ''} 
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
                    {console.log(this.state)}
                </div>
            </div> 
        );
    }
}