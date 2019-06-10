import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class PostForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            condition: '',
            missingpieces: '',
            extrainfo: '',
            url: ''
        }
    }
    handlePostForm = (e) => {
        e.preventDefault()
        const { title, description, condition, missingpieces, extrainfo, url } = this.state
        axios
            .post('/auth/register', { title, description, condition, missingpieces, extrainfo, url })
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
            title: '',
            description: '',
            condition: '',
            missingpieces: '',
            extrainfo: '',
            url: ''
        })
    }

    handlePostFormInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
                <h1>Post a Toy</h1>
                <form onSubmit={this.handlePostForm}>
                    <input
                        type='text'
                        placeholder='title'
                        name='title'
                        value={this.state.title}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    <input
                        type='text'
                        placeholder='description'
                        name='description'
                        value={this.state.description}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    <input
                        type='text'
                        placeholder='condition'
                        name='condition'
                        value={this.state.condition}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    <input
                        type='text'
                        placeholder='missing pieces'
                        name='missingpieces'
                        value={this.state.missingpieces}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    <input
                        type='text'
                        placeholder='extra information'
                        name='extrainfo'
                        value={this.state.extrainfo}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    <input
                        type='text'
                        placeholder='url'
                        name='url'
                        value={this.state.url}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    <button onClick={this.handlePostForm}>Post Toy</button>
                </form>
            </>
        )
    }
}

export default withRouter(PostForm)