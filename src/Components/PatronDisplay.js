import React from 'react'
import 'reset-css'
import {Link} from 'react-router-dom'
import "./patronDisplay.css"

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn,
    EditBtn
  } from './AppStylesPD';

  class PatronDisplay extends React.Component {
    render() {
      // console.log(this.props.user)
    return (

      
      <FormContainer>
        <body className="image"></body>
        <FormHeader>
          <FormTitle>{this.props.user.first_name}</FormTitle>
          <text>{this.props.user.last_name}</text>
          <text>{this.props.user.username}</text>
          <text>{this.props.user.city}</text>
          <text>{this.props.user.email}</text>
        </FormHeader>

        <Link to='/edituser'>
        <EditBtn register>Edit</EditBtn>
        </Link>
      
      </FormContainer>
  
      
  
      )
  }
}

export default PatronDisplay