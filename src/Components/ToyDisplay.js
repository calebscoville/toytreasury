import React from 'react'
import 'reset-css'

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
    render() {
    return (

      <FormContainer>
          <Image > <img src={this.props.imageUrl}/> </Image>
        <FormHeader>
          <FormTitle>{this.props.title}</FormTitle>
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