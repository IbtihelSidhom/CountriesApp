import Axios from "axios";
import { fetchCountryUrl } from "../api/countryApi";

import {
    SET_COUNTRYNAME,
    SET_COUNTRY_FLAG,
    SET_COUNTRY_DETAILS,
    TOGGLE_ERROR
} from "../constants/action-types";

export const toggleError = value => ({
    type: TOGGLE_ERROR,
    payload: value
});

export const setCountryName = value => ({
    type: SET_COUNTRYNAME,
    payload: value
});

export const setCountryFlag = value => ({
    type: SET_COUNTRY_FLAG,
    payload: value
});

export const setCountryDetails = value => ({
    type: SET_COUNTRY_DETAILS,
    payload: value
});

export const fetchCountryDetails = (CountryName) => {
    return dispatch => {
        const url = fetchCountryUrl(CountryName);

        Axios.get(url)
            .then(res => {
                console.log("country details from API: ", res.data["0"]);
                dispatch(setCountryFlag(res.data["0"].flag));
                dispatch(setCountryDetails(res.data["0"]));
                dispatch(toggleError(false));

            })
            .catch(error => {
                dispatch(toggleError(true));
                console.log("error from API: ", error.message);
            });
    };
};