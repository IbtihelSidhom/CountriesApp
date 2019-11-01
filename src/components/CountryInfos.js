import React from "react";
import { connect } from "react-redux";
import { getCountryDetails } from "../selectors";
import "./index.css";


function CountryInfos(props) {
    const { countryDetails } = props;
    return (
        <div className="CountryInfosContainer">
            <div className="Card">
                <p> Capital </p>
                <p> {countryDetails.capital} </p>
            </div>
            <div className="Card">
                <p> Region </p>
                <p> {countryDetails.region} </p>
            </div>
            <div className="Card">
                <p> Subregion </p>
                <p> {countryDetails.subregion} </p>
            </div>
        </div>
    );

};

const mapStateToProps = state => {
    return {
        countryDetails: getCountryDetails(state)
    };
};

export default connect(mapStateToProps)(CountryInfos);