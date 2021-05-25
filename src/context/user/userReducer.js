import { LOGIN, LOADING, LOGIN_FAIL, LOGOUT, LOAD_USER } from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };
        case LOGIN:
            localStorage.setItem('token', action.payload.token.accessToken);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
            };
        default:
            return state;
    }
};
