import { LOADING, CREATE_CONTACT, CREATE_CONTACT_FAILED } from '../types';

export default (state, action) => {
    switch (action) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case CREATE_CONTACT:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
