import * as types from './actionType.js';

const initialState = {
    users: [],
    user: {},
    loading: true
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case types.DELETE_USER:
        case types.EDIT_USER:
        case types.ADD_USER:
            return {
                ...state,
                loading: false,
            }
        case types.GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            }

        default:
            return state;
    }
}

export default usersReducers;