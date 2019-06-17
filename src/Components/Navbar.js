import React from 'react'
import 'reset-css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {
    nav,
    AppContainer,
    FormContainer,
    Span
  } from './AppStylesNav';

const Navbar = ({ username }) => {
    return (
        <AppContainer>
        <div>
            <Span><Link to='/' style={{ textDecoration: 'none', color: '#5e0a0a' }}> Home </Link></Span>
            <Span><Link to='/login' style={{ textDecoration: 'none', color: '#5e0a0a'  }}> Login/Sign Up </Link></Span>
            <Span><Link to='/howitworks' style={{ textDecoration: 'none', color: '#5e0a0a'  }}> How It Works </Link></Span>
            <Span><Link to='/about' style={{ textDecoration: 'none', color: '#5e0a0a'  }}> About </Link></Span>
            <Span><Link to='/donate' style={{ textDecoration: 'none', color: '#5e0a0a'  }}> Donate </Link></Span>
            <Span><Link to='/patrondash' style={{ textDecoration: 'none', color: '#5e0a0a'  }}> PatronDash </Link></Span>
            {/* <Link to='/admindash'> AdminDash </Link> */}
            <Span><Link to='/browsetoys' style={{ textDecoration: 'none', color: '#5e0a0a'  }}> Browse All Toys</Link></Span>
            <Span><Link to='/posttoy' style={{ textDecoration: 'none', color: '#5e0a0a'  }}> Post Toy </Link></Span>
            {/* <Link to='/toyinfo'> Toy Info </Link> */}
            {/* <Link to='/details'> Details </Link> */}
            <span>{username && username}</span>
        </div>
        </AppContainer>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        username: reduxState.username
    }
}

export default connect(mapStateToProps)(Navbar)