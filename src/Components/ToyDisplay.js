import React from 'react'
import 'reset-css'
import axios from 'axios'
import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStylesBT';

  class BrowseToys extends React.Component {
    componentDidMount = () => {
        axios.get(`/auth/gettoyanduser/${this.props.toyId}`)
        .then(res => {
          console.log('res.data :', res.data); 
        })
    }
    render() {
    return (

      <FormContainer>
          <Image > <img src={this.props.imageUrl}/> </Image>
        <FormHeader>
          <FormTitle>{this.props.title}</FormTitle>
          <text>Posted by {this.props.username}</text>
          <text>{this.props.description}</text>
          <text>{this.props.condition}</text>
          <text>{this.props.extra_info}</text>
          <text>{this.props.missing_pieces}</text>
          <text>{this.props.url}</text>
       
        </FormHeader>
        <FormBtn register>See This Toy</FormBtn>
      </FormContainer>
  
      
  
      )
  }
}

export default BrowseToys