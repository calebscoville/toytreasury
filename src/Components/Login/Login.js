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
    FormBtn
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
            <div>
                <LoginForm />
                <RegisterForm />
            </div>
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