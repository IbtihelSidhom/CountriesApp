import { SET_COUNTRY_DETAILS } from "../constants/action-types"

export default function countryDetails(state = "", action) {
    switch (action.type) {
        case SET_COUNTRY_DETAILS:
            return action.payload;
        default:
            return state;
    }
};