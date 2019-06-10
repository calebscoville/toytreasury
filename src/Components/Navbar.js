import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Navbar = ({ username }) => {
    return (
        <nav>
            <Link to='/'> Home </Link>
            <Link to='/login'> Login/Sign Up </Link>
            <Link to='/howitworks'> How It Works </Link>
            <Link to='/about'> About </Link>
            <Link to='/donate'> Donate </Link>
            <Link to='/patrondash'> PatronDash </Link>
            <Link to='/admindash'> AdminDash </Link>
            <Link to='/browsetoys'> Browse All Toys</Link>
            <Link to='/posttoy'> Post Toy </Link>
            <Link to='/toyinfo'> Toy Info </Link>
            <Link to='/details'> Details </Link>
            <span>{username && username}</span>
        </nav>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        username: reduxState.username
    }
}

export default connect(mapStateToProps)(Navbar)