import React, { Component } from 'react'
import axios from 'axios'
import { updateToy} from '../../redux/toyReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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
    Input
  } from '../AppStylesMany';

class PostForm extends React.Component {
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
    handleToyPost = (e) => {
        e.preventDefault()
        const toyobj = {
            title: this.state.title,
            description: this.state.description,
            condition: this.state.condition,
            missingpieces: parseInt(this.state.missingpieces),
            extrainfo: this.state.extrainfo,
            url: this.state.url,
            user_id: this.props.user.user_id
            }
        axios.post('/api/toy', toyobj).then((res) => {
            console.log(toyobj)
            this.props.history.push('/browsetoys')
            this.props.updateToy(res.data)
        })
        this.setState({
            title: '',
            description: '',
            condition: '',
            missingpieces: '',
            extrainfo: '',
            url: ''
        })
        this.props.id && this.props.history.push('/details')
        
    }

    handlePostFormInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.props.user)
        return (
            // <AppContainer>
            <>
                <h1>Post a Toy</h1>
                {/* <Input> */}
                <form onSubmit={this.handleToyPost}>
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
                    {/* </Input> */}
                    <button onClick={this.handleToyPost}>Post Toy</button>
                </form>
            </>
            // </AppContainer>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
  }
  
  export default withRouter (connect(
    mapStateToProps,
    { updateToy }
  )(PostForm))