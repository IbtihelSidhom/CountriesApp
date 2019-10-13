import { SET_COUNTRY_FLAG } from "../constants/action-types"

export default function countryFlag(state = "", action) {
    switch (action.type) {
        case SET_COUNTRY_FLAG:
            return action.payload;
        default:
            return state;
    }
};