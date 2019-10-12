import { SET_COUNTRYNAME } from "../constants/action-types";


export default function countryName(state = "", action) {
    switch (action.type) {
        case SET_COUNTRYNAME:
            return action.payload;
        default:
            return state;
    }
};