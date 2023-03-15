import { SET_LOADING, SET_REPOS, SET_USER, SET_USERS, SHOW_ALERT } from "../types"
const reducerfunction = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case SET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }

        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload,

            }

    }


}

export default reducerfunction