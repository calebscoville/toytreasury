import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from './../../redux/userReducer'
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

class RegisterForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            city: ''
        }
    }
    handleUserRegister = async (e) => {
        e.preventDefault()
        const { firstname, lastname, email, username, password, city } = this.state
        await axios
            .post('/auth/register', { firstname, lastname, email, username, password, city })
            .then((res) => {
                this.props.updateUser(res.data)
                this.props.history.push('/patrondash')
            })
            .catch((err) => {
                console.log(err)
            })
        // e.target.firstname.value = ''
        // e.target.lastname.value = ''
        // e.target.email.value = ''
        // e.target.password.value = ''
        // e.target.username.value = ''
        this.setState({
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            city: ''
        })
    }

    handleRegisterInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
            {/* <AppContainer> */}
                <FormContainer style={{ height: '90px'}}>
                {/* <h1>Sign Up</h1> */}
                <form onSubmit={this.handleUserRegister}>
                    <ul>
                        <li>
                    <input
                        type='text'
                        placeholder='first name'
                        name='firstname'
                        value={this.state.firstname}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='text'
                        placeholder='last name'
                        name='lastname'
                        value={this.state.lastname}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='text'
                        placeholder='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='text'
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='password'
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='text'
                        placeholder='city'
                        name='city'
                        value={this.state.city}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <button onClick={this.handleUserRegister}>Register</button>
                    </li>
                    </ul>
                </form>
                </FormContainer>
                {/* </AppContainer> */}
            </>
        )
    }
}



export default withRouter(connect(null, {updateUser}) (RegisterForm))