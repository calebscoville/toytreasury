import React, { Component } from 'react'
import axios from 'axios'
import { updateUser } from '../../redux/userReducer'
import { connect } from 'react-redux'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import 'reset-css'
import {Link} from 'react-router-dom'

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn,
    Title,
    FormWrapper
  } from '../AppStylesMany';

class Login extends React.Component {
    componentDidMount() {
        axios.get('/auth/user').then((res) => {
            this.props.updateUser(res.data)
            this.props.history.push('/details')
        })
        this.props.id && this.props.history.push('/details')
    }

    render() {
        return (
            <AppContainer>
               
                <Title style={{ textDecoration: 'none', color: '#5e0a0a' }}>The Toy Treasury</Title>
                <FormWrapper>
                <LoginForm />
                <RegisterForm />
                </FormWrapper>
            </AppContainer>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(
    mapStateToProps,
    { updateUser }
)(Login)