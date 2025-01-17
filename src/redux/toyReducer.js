const initialState = {
    title: '',
    description: '',
    condition: '',
    missingpieces: '',
    extrainfo: '',
    url: ''
}

const UPDATE_TOY = 'UPDATE_TOY'
const CLEAR_TOY = 'CLEAR_TOY'

export function updateToy(toy){
    return {
        type: UPDATE_TOY,
        payload: toy
    }
}

export function clearToy(){
    return {
        type: CLEAR_TOY
    }
}

function toyReducer (state = initialState, action){
    switch (action.type){
        case UPDATE_TOY:
            const { title, description } = action.payload
            return { ...state, title, description }
            case CLEAR_TOY:
                return { ...initialState }
                default:
                    return state
    }
}
export default toyReducer