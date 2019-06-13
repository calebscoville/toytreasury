const initialState = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    city: '',
    user_id: null
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'
const DELETE_USER = 'DELETE_USER'

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER
    }
}

export function deleteUser(user){
    return {
        type: DELETE_USER,
        payload: user
    }
}

function reducer(state = initialState, action){
    switch (action.type){
        case UPDATE_USER:
            const { username, first_name, last_name, email, city, user_id } = action.payload
            return { username, first_name, last_name, email, city, user_id }
            case CLEAR_USER:
                return { ...initialState }
                default:
                    return state
                    case DELETE_USER:
                        // WHAT GOES HERE!!!!!
    }
}

// function userReducer (state = initialState, action){
//     switch (action.type){
//         case UPDATE_USER:
//             const { firstname, description } = action.payload
//             return { ...state, title, description }
//             case CLEAR_TOY:
//                 return { ...initialState }
//                 default:
//                     return state
//     }
// }
export default reducer