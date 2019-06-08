import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class PostForm extends Component {
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
    handleUserRegister = (e) => {
        e.preventDefault()
        const { firstname, lastname, email, username, password, city } = this.state
        axios
            .post('/auth/register', { firstname, lastname, email, username, password, city })
            .then((res) => {
                this.props.history.push('/')
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
                <h1>Sign Up</h1>
                <form onSubmit={this.handleUserRegister}>
                    <input
                        type='text'
                        placeholder='first name'
                        name='firstname'
                        value={this.state.firstname}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                    <input
                        type='text'
                        placeholder='last name'
                        name='lastname'
                        value={this.state.lastname}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                    <input
                        type='text'
                        placeholder='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                    <input
                        type='text'
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                    <input
                        type='password'
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                    <input
                        type='text'
                        placeholder='city'
                        name='city'
                        value={this.state.city}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                    <button onClick={this.handleUserRegister}>Register</button>
                </form>
            </>
        )
    }
}

export default withRouter(PostForm)