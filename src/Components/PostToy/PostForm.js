import React, { Component } from 'react'
import axios from 'axios'
import { updateToy} from '../../redux/toyReducer'
import { connect } from 'react-redux'
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
    handleToyPost = (e) => {
        e.preventDefault()
        const toyobj = {
            title: this.state.title,
            description: this.state.description,
            condition: this.state.condition,
            missingpieces: parseInt(this.state.missingpieces),
            extrainfo: this.state.extrainfo,
            url: this.state.url
            }
        axios.post('/api/toy', toyobj).then((res) => {
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
        return (
            <>
                <h1>Post a Toy</h1>
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
                    <button onClick={this.handleToyPost}>Post Toy</button>
                </form>
            </>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
  }
  
  // export default PostToy
  
  export default withRouter (connect(
    mapStateToProps,
    { updateToy }
  )(PostForm))