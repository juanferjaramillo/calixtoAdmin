import { LOGIN } from './action-types.js'
const initialState={
    authUser: {},
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer