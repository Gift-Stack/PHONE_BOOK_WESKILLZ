import axios from 'axios';
import { useEffect, useReducer } from 'react';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import { LOADING, CREATE_CONTACT, CREATE_CONTACT_FAILED } from '../types';
import authAxios from '../../utils/setAuthToken';

const ContactState = ({ children }) => {
    const initialState = {
        loading: false,
    };
    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Loading
    const setLoading = () => dispatch({ type: LOADING });

    // Add contact
    const apiURL = 'https://we-skillz-phonebook-task.herokuapp.com/api/v1';

    const addContact = async data => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            setLoading();
            const res = await authAxios.post(
                `${apiURL}/contacts`,
                data,
                config,
            );
            dispatch({
                type: CREATE_CONTACT,
                payload: res.data,
            });

            console.log(res.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <ContactContext.Provider
            value={{ loading: state.loading, setLoading, addContact }}
        >
            {children}
        </ContactContext.Provider>
    );
};

export default ContactState;
