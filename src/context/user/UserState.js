import { useEffect, useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { LOADING, LOGIN, LOGIN_FAIL, LOGOUT, LOAD_USER } from '../types';
import axios from 'axios';
import authAxios from '../../utils/setAuthToken';

const UserState = ({ children }) => {
    const initialState = {
        user: null,
        loading: false,
        isAuthenticated: false,
        token: localStorage.getItem('token'),
    };

    const apiURL = 'https://we-skillz-phonebook-task.herokuapp.com/api/v1';

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const [state, dispatch] = useReducer(UserReducer, initialState);

    // LOADING
    const setLoading = () => dispatch({ type: LOADING });

    // LOAD_USER
    const loadUser = async () => {
        setLoading();
        const res = await authAxios.get(`${apiURL}/auth/me`);
        dispatch({ type: LOAD_USER, payload: res.data });
    };

    // LOGIN
    const login = async data => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            setLoading();
            const res = await axios.post(
                `${apiURL}/auth/login`,
                JSON.stringify(data),
                config,
            );

            dispatch({
                type: LOGIN,
                payload: res.data,
            });

            loadUser();
        } catch (err) {
            console.log(err);
            dispatch({ type: LOGIN_FAIL });
        }
    };

    // LOGOUT
    const logout = () => dispatch({ type: LOGOUT });

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                isAuthenticated: state.isAuthenticated,
                token: state.token,
                login,
                loadUser,
                logout,
                setLoading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserState;
