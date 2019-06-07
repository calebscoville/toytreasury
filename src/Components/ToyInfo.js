import React from 'react'
// import styled from 'styled-components'
import 'reset-css'
// import AppStyles from './AppStyles'

import {
    AppContainer,
    FormContainer,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStylesTI';

class ToyInfo extends React.Component {
    render() {
    return (
        
    <AppContainer>
    <FormContainer>
      <FormHeader>
        <FormTitle>Awesome Pictures of the Toy You Just Clicked On</FormTitle>
      </FormHeader>
      {/* <FormInput email="email" />
      <FormInput /> */}
      {/* <FormBtn>+ Click here to upload pictures +</FormBtn> */}
      <FormBtn register>Link to toy online for addtl. info</FormBtn>
    </FormContainer>

    <FormContainer>
      <FormHeader>
        <FormTitle>Toy Information</FormTitle>
            <text>
                Title
                Description
                Condition
                Missing Pieces
                Additional Information
                Tags
            </text>
      </FormHeader>
      <FormBtn>Check this toy out!</FormBtn>
    </FormContainer>

    </AppContainer>

    

    )
}
}

export default ToyInfo

// const Button = styled.button`
// background: palevioletred;
// border-radius: 3px;
// border: 2px solid palevioletred;
// color: black;
// margin: 0 1em;
// padding: 0.25em 1em;
// `