import React from 'react'
import 'reset-css'

import {
    AppContainer,
    FormContainer,
    Image,
    Image2,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStylesBT';

  class BrowseToys extends React.Component {
    render() {
    return (
            
    <AppContainer>

      <FormContainer>
          <Image> Pic of Cool Phone </Image>
        <FormHeader>
          <FormTitle>STEM Robot Kit</FormTitle>
        </FormHeader>
        <FormBtn register>See This Toy</FormBtn>
      </FormContainer>

      <FormContainer>
          <Image> Pic of Criss Cross Crash </Image>
        <FormHeader>
          <FormTitle>Criss Cross Crash</FormTitle>
        </FormHeader>
        <FormBtn register>See This Toy</FormBtn>
      </FormContainer>

      <FormContainer>
          <Image> Pic of Building Set</Image>
        <FormHeader>
          <FormTitle>Super Building Set</FormTitle>
        </FormHeader>
        <FormBtn register>See This Toy</FormBtn>
      </FormContainer>

      <FormContainer>
          <Image> Pic of Science Kit </Image>
        <FormHeader>
          <FormTitle>Mind Blowing Science Kit</FormTitle>
        </FormHeader>
        <FormBtn register>See This Toy</FormBtn>
      </FormContainer>

      <FormContainer>
          <Image> Pic of Marble Game </Image>
        <FormHeader>
          <FormTitle>Gravity Maze Marble Run Logic</FormTitle>
        </FormHeader>
        <FormBtn register>See This Toy</FormBtn>
      </FormContainer>

      <FormContainer>
          <Image> Pic of Cubes </Image>
        <FormHeader>
          <FormTitle>Mathlink Cubes</FormTitle>
        </FormHeader>
        <FormBtn register>See This Toy</FormBtn>
      </FormContainer>
  
      </AppContainer>
  
      
  
      )
  }
}

export default BrowseToys