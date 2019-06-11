import React from 'react'
import 'reset-css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import PatronDisplay from './PatronDisplay'

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
    constructor() {
      super()
      this.state={
        user: {}
      }
    }

    componentDidMount() {
      axios.get("/auth/user")
      .then(res => {
        this.setState({
          user: res.data
        })
        console.log(this.state.user)
      })
    }
    render() {


    return (
            
    <AppContainer>

      <FormContainer>
      <PatronDisplay 
        user={this.state.user}
          />
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