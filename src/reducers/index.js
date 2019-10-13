import { combineReducers } from "redux";
import countryName from "./countryName";
import countryFlag from "./countryFlag";
import countryDetails from "./countryDetails";


export default combineReducers({
    countryName,
    countryFlag,
    countryDetails
});