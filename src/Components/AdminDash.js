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
  } from './AppStylesAD';

  class AdminDash extends React.Component {
    render() {
    return (
            
    <AppContainer>
      <FormContainer>
          <Image> Your Hot Pic Here :) </Image>
        <FormHeader>
          <FormTitle>Caleb "BDC"</FormTitle>
        </FormHeader>
        <text>You are an admin</text>
        <text>Email: runcaleb@gmail.com</text>
        <text>City: Orem</text>
        <text>Toy posts to date: 3,453</text>
        <text>Admin ID: 96024</text>
        <FormBtn register>Edit Profile</FormBtn>
      </FormContainer>

      <FormContainer>
        <FormHeader>
          <FormTitle>What would you like to do rn?</FormTitle>
        </FormHeader>

        <Link to='/posttoy'> <FormBtn>Post a Toy</FormBtn> </Link>
        
        <Link to='/browsetoys'> <FormBtn register>See All Toys</FormBtn> </Link>
        
        <FormBtn>Messages</FormBtn>
        <Link to='/donate'> <FormBtn register>Payments & Donations</FormBtn> </Link>
        

      </FormContainer>
  
      </AppContainer>
  
      
  
      )
  }
  }

export default AdminDash