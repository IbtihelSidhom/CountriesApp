import React from "react";
import { connect } from "react-redux";
import { getCountryDetails } from "../selectors";
import "./index.css";
import { populationIcon, areaIcon, telephoneIcon, numbersIcon } from "../assets/icons/index";

function CountryInNumbers(props) {
    const { countryDetails } = props;
    return (
        <div className="CountryInNumbersContainer">
            <div className="Card">
                <p> Population </p>
                <img className="icon" src={populationIcon} />
                <p> {countryDetails.population} </p>
            </div>
            <div className="Card">
                <p> Area </p>
                <img className="icon" src={areaIcon} />
                <p> {countryDetails.area} km</p>
            </div>
            <div className="Card">
                <p> Numeric Code </p>
                <img className="icon" src={numbersIcon} />
                <p> {countryDetails.numericCode} </p>
            </div>
            <div className="Card">
                <p> Calling Code </p>
                <img className="icon" src={telephoneIcon} />
                <p> {countryDetails.callingCodes} </p>
            </div>
        </div >
    );

};

const mapStateToProps = state => {
    return {
        countryDetails: getCountryDetails(state)
    };
};

export default connect(mapStateToProps)(CountryInNumbers);