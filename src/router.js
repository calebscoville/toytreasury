import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
import Login from './Components/Login/Login'
import HowItWorks from './Components/HowItWorks'
import About from './Components/About'
import Donate from './Components/Donate'
import PatronDash from './Components/PatronDash'
import AdminDash from './Components/AdminDash'
import BrowseToys from './Components/BrowseToys'
import PostToy from './Components/PostToy/PostToy'
import ToyInfo from './Components/ToyInfo'
import EditUser from './Components/EditUser'


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/details' component={Details}/>
        <Route path='/howitworks' component={HowItWorks} />
        <Route path='/about' component={About} />
        <Route path='/donate' component={Donate} />
        <Route path='/patrondash' component={PatronDash} />
        <Route path='/admindash' component={AdminDash} />
        <Route path='/browsetoys' component={BrowseToys} />
        <Route path='/posttoy' component={PostToy} />
        <Route path='/toyinfo' component={ToyInfo} />
        <Route path='/edituser' component={EditUser} />
    </Switch>
)