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
    FormBtn,
    EditBtn
  } from './AppStylesPD';

  class PatronDash extends React.Component {
  
    handleUserLogout = () => {
      axios.get('/auth/logout').then((res) => {
        this.props.clearUser()
        this.props.history.push('/')
      })
      }

      handleUserDelete = () => {
        axios.delete(`/auth/delete/${this.props.user.user_id}`).then((res) =>{
          this.props.history.push('/')
        })
      }

    render() {

    return (
            
    <AppContainer>

      <FormContainer>
      <PatronDisplay 
        user={this.props.user}
          />
      </FormContainer>

      

      <FormContainer>
        <FormHeader>
          <FormTitle>You've Got Options</FormTitle>
        </FormHeader>
        <Link to='/posttoy'> <FormBtn register> 🧪  Post a Toy</FormBtn> </Link>
        <Link to='/browsetoys'>
          <FormBtn> 🔬 See All Toys</FormBtn> 
        </Link>
        
        <Link to='/donate'> <FormBtn register> 💸 Donate to the cause!</FormBtn> </Link>
        
        {/* <FormBtn register></FormBtn> */}
        <FormBtn onClick={this.handleUserLogout}> 🚪 Logout</FormBtn>

        <FormBtn onClick={this.handleUserDelete} register> 🌋  Delete My Account</FormBtn>

      </FormContainer>
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