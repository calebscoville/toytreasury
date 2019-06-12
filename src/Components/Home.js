import React from 'react'
import 'reset-css'
import {Link} from 'react-router-dom'
import Carousel from './Carousel'
import "./Home.css"

import {
    AppContainer,
    // FormContainer,
    // FormContainer2,
    // FormHeader,
    // FormTitle,
    // FormInput,
    FormBtn
  } from './AppStylesHome';

class Home extends React.Component {
    render() {
    return (
      

    <AppContainer>
    <div className="home-carousel">
      <Carousel />
      </div>
      

      // <Link to='/browsetoys'> <FormBtn register>See More Toys</FormBtn> </Link>
      
    

    </AppContainer>

    

    )
}
}

export default Home

// const Button = styled.button`
// background: palevioletred;
// border-radius: 3px;
// border: 2px solid palevioletred;
// color: black;
// margin: 0 1em;
// padding: 0.25em 1em;
// `


// import React from 'react'

// const Home = () => {
//     return <h1>Home</h1>
// }

// export default Home



{/* <FormContainer2>
      <FormHeader>
        <FormTitle>[Picture of Awesome Robot Toy]</FormTitle>
            <text>
                
            </text>
      </FormHeader>
      
      </FormContainer2> */}

      // <FormTitle>STEM Robot Kit</FormTitle>