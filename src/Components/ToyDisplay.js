import React from 'react'
import 'reset-css'

import {
    AppContainer,
    FormContainer,
    Image,
    // Image2,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStylesBT';

  class BrowseToys extends React.Component {
    render() {
    return (

      <FormContainer>
          <Image > {this.props.imageUrl} </Image>
        <FormHeader>
          <FormTitle>{this.props.title}</FormTitle>
        </FormHeader>
        <FormBtn register>See This Toy</FormBtn>
      </FormContainer>
  
      
  
      )
  }
}

export default BrowseToys