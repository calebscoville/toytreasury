import React from 'react'
import 'reset-css'
import {Link} from 'react-router-dom'

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStylesBT';

  class PatronDisplay extends React.Component {
    render() {
      console.log(this.props.user)
    return (

      <FormContainer>
        <FormHeader>
          <FormTitle>{this.props.user.first_name}</FormTitle>
          <text>{this.props.user.last_name}</text>
          <text>{this.props.user.username}</text>
          <text>{this.props.user.city}</text>
          <text>{this.props.user.email}</text>
        </FormHeader>
        <Link to='/edituser'>
        <FormBtn register>Edit</FormBtn>
        </Link>
      </FormContainer>
  
      
  
      )
  }
}

export default PatronDisplay