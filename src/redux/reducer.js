import { GET_AUTH_USER } from './action-types.js'
const initialState={
    authUser: {},
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_AUTH_USER:
            return {
                ...state,
                authUser: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer