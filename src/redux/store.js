import {createStore} from 'redux'
import reducer from './userReducer'
import toyReducer from './toyReducer'

export default createStore(reducer, toyReducer)