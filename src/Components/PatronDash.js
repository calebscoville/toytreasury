import React from 'react'
import 'reset-css'
import {Link} from 'react-router-dom'
import axios from 'axios'

import {
    AppContainer,
    FormContainer,
    Image,
    Image2,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStylesPD';

  class PatronDash extends React.Component {
    render() {
    return (
            
    <AppContainer>

      <FormContainer>
          <Image> Your Hot Pic Here :) </Image>
        <FormHeader>
          <FormTitle>Devan SSSS</FormTitle>
        </FormHeader>
        <text>Good day to you!</text>
        <text>Email: devan@devmtn.com</text>
        <text>City: Logan</text>
        <text>Checkouts to date: 2</text>
        <text>ID: 36</text>
        <text>I like ping-pong, break-dancing and eating candy, especially on the weekend.</text>
        <FormBtn register>Edit Profile</FormBtn>
      </FormContainer>

      <FormContainer>
        <FormHeader>
          <FormTitle>What would you like to do rn?</FormTitle>
        </FormHeader>
        <Link to='/browsetoys'>
          <FormBtn>See All Toys</FormBtn> 
        </Link>
        
        <FormBtn register>Messages</FormBtn>
        <Link to='/donate'> <FormBtn>Donate to the cause of toys!</FormBtn> </Link>
        
        <FormBtn register></FormBtn>

      </FormContainer>

      <FormContainer>
        <FormHeader>
          <FormTitle>Your History</FormTitle>
        </FormHeader>
        <Image2> Chutes and Ladders </Image2>
        <FormBtn>See This Toy</FormBtn>
        <Image2> Basic Blocks </Image2>
        <FormBtn>See This Toy</FormBtn>

      </FormContainer>
  
      </AppContainer>
  
      
  
      )
  }
  }

export default PatronDash