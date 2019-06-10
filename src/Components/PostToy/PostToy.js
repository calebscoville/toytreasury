import React, { Component } from 'react'
import 'reset-css'
import axios from 'axios'
import { updateToy} from '../../redux/toyReducer'
import { connect } from 'react-redux'
import PostForm from './PostForm'

class PostToy extends Component {
  componentDidMount() {
      axios.get('/auth/posttoy').then((res) => {
          this.props.updateToy(res.data)
          this.props.history.push('/details')
      })
      this.props.id && this.props.history.push('/details')
  }

  render() {
      return (
          <div>
              {/* <LoginForm /> */}
              <PostForm />
          </div>
      )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default PostToy

export default connect(
  mapStateToProps,
  { updateToy }
)(PostToy)

// connect(
//   mapStateToProps,
//   { updateUser }
// )(PostToy)





// import {
//     AppContainer,
//     FormContainer,
//     FormHeader,
//     FormTitle,
//     FormInput,
//     FormInput2,
//     FormInput3,
//     FormBtn
//   } from './AppStylesPT';

//   class PostToy extends React.Component {
//     render() {
//     return (
            
//     <AppContainer>
//       <FormContainer>
//         <FormHeader>
//           <FormTitle>Add Toy Pictures Here</FormTitle>
//         </FormHeader>
       
//         <FormBtn> + Click Here to Upload Pictures + </FormBtn>
//         <FormBtn register>Click Here to Add Link</FormBtn>
//       </FormContainer>

//       <FormContainer>
//         <FormHeader>
//           <FormTitle>Enter Toy Information</FormTitle>
//         </FormHeader>
//         <FormInput title="title" />
//         <FormInput />
//         <FormInput2 con="condition" />
//         <FormInput2 />
//         <FormInput3 add="Addtl. Info" />
//         <FormInput3 />
//         <FormBtn>Post This Toy for the Public!</FormBtn>
//       </FormContainer>
  
//       </AppContainer>
  
      
  
//       )
//   }
//   }

// export default PostToy