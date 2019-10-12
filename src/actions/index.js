import {
    SET_COUNTRYNAME
} from "../constants/action-types";

export const setCountryName = value => ({
    type: SET_COUNTRYNAME,
    payload: value
});