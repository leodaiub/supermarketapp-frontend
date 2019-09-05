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
        const files = Array.from(this.state.superMarketAdditionalImages);

        data.append("superMarketAdditionalImages", files[0]);
        data.append("superMarketAdditionalImages", files[1]);
        data.append("superMarketAdditionalImages", files[2]);
        data.append("superMarketAdditionalImages", files[3]);
        data.append('superMarketName', this.state.superMarketName);
        data.append('superMarketPhone', this.state.superMarketPhone);
        data.append('superMarketDescription', this.state.superMarketDescription);
        data.append('superMarketLocation', JSON.stringify(this.state.superMarketLocation));

        await api.post('market', data);
        console.log(JSON.stringify(Object.fromEntries(data)));
        this.props.history.push('/');
    }

    handlgeImageChange = e => {
        let files = e.target.files;
        this.setState({ superMarketAdditionalImages: files }, () => { console.log(this.state.superMarketAdditionalImages) });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
     }

     handleChangeObject = e => {
        this.setState({  superMarketLocation:{
            ... this.state.superMarketLocation,
            [e.target.name]: e.target.value }});
        console.log(this.state)
     }

    render(){
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handlgeImageChange} multiple="multiple"/>
                <input 
                    type="text" 
                    name="superMarketName"
                    placeholder="Nome"
                    onChange={this.handleChange}
                 />
                <input 
                    type="number" 
                    name="superMarketPhone"
                    placeholder="Telefone"
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    name="superMarketDescription"
                    placeholder="Descrição"
                    onChange={this.handleChange}
                  
                 />
                <input 
                    type="text" 
                    name="street"
                    placeholder="Rua"
                    onChange={this.handleChangeObject}  
                />
                <input 
                    type="number" 
                    name="zip"
                    placeholder="CEP"
                    onChange={this.handleChangeObject}
                />
                <input 
                    type="text" 
                    name="city"
                    placeholder="Cidade"
                    onChange={this.handleChangeObject}
                />
                <input 
                    type="text" 
                    name="state"
                    placeholder="Estado"
                    onChange={this.handleChangeObject}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}