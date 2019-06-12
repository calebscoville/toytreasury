import React, {Component} from 'react'
import 'reset-css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { updateUser, clearUser } from '../redux/userReducer'
import PatronDisplay from './PatronDisplay'
import { connect } from 'react-redux'

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
      axios.get(`/auth/details/${this.props.user.id}`)
      .then(res => {
        this.setState({
          user: res.data
        })
        console.log(this.state.user)
      })
    }

    handleUserLogout = () => {
      axios.get('/auth/logout').then((res) => {
        this.props.clearUser()
        this.props.history.push('/')
      })
      }

    render() {
      console.log(this.props)

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
        
        {/* <FormBtn register></FormBtn> */}
        <FormBtn onClick={this.handleUserLogout}>Logout</FormBtn>

      </FormContainer>

      {/* <FormContainer>
        <FormHeader>
          <FormTitle>Your History</FormTitle>
        </FormHeader>
        <Image2> Chutes and Ladders </Image2>
        <FormBtn>See This Toy</FormBtn>
        <Image2> Basic Blocks </Image2>
        <FormBtn>See This Toy</FormBtn>

      </FormContainer>
   */}
      </AppContainer>
  
      
  
      )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.user
  }
}

const mapDispatchToProps = {
	updateUser,
	clearUser
}

export default connect (mapStateToProps, mapDispatchToProps) (PatronDash)