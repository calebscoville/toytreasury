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

class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleLoginInfoUpdate = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUserLogin = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        axios
            .post('/auth/login', { username, password})
            .then((res) => {
                this.props.updateUser(res.data)
                this.props.history.push('/patrondash')
            })
        e.target.username.value = ''
        e.target.password.value = ''
    }
    render() {
        return (
            
            <>
                <FormContainer style={{ height: '90px'}}>
                <form onSubmit={this.handleUserLogin}>
                    <ul>
                    <li><input
                        type='text'
                        name='username'
                        placeholder='username'
                        value={this.state.username}
                        onChange={this.handleLoginInfoUpdate}
                        /></li>
                        
                        
                    <li><input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handleLoginInfoUpdate}
                        /></li>
                        <li><button>Log In</button></li>
                        </ul>
                </form>
                </FormContainer>
                {/* </AppContainer> */}
            </>
            
        )
    }
}

export default withRouter(connect(null, {updateUser}) (LoginForm))

// class LoginForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             username: '',
//             password: ''
//         }
//     }
//     handleLoginInfoUpdate = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleUserLogin = (e) => {
//         e.preventDefault()
//         const { username, password } = this.state
//         axios
//             .post('/auth/login', { username, password})
//             .then((res) => {
//                 this.props.history.push('/patrondash')
//             })
//         e.target.username.value = ''
//         e.target.password.value = ''
//     }
//     render() {
//         return (
//             <>
//                 <h1>Login</h1>
//                 <form onSubmit={this.handleUserLogin}>
//                     <input
//                         type='text'
//                         name='username'
//                         placeholder='username'
//                         onChange={this.handleLoginInfoUpdate}
//                         />
//                     <input
//                         type='password'
//                         name='password'
//                         placeholder='password'
//                         onChange={this.handleLoginInfoUpdate}
//                         />
//                         <button>Log In</button>
//                 </form>
//             </>
//         )
//     }
// }

// export default withRouter(LoginForm)