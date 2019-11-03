import React from "react";
import { connect } from "react-redux";
import { getCountryDetails } from "../selectors";
import { AfricaIcon, AmericasIcon, AsiaIcon, EuropeIcon, OceaniaIcon, CapitalIcon } from "../assets/icons/index";
import { populationIcon, areaIcon, telephoneIcon, numbersIcon } from "../assets/icons/index";
import "./index.css";


const regions = {
    Africa: AfricaIcon,
    Americas: AmericasIcon,
    Asia: AsiaIcon,
    Europe: EuropeIcon,
    Oceania: OceaniaIcon,
};

function CountryInfos(props) {
    const { countryDetails } = props;
    return (
        <div className="CountryInfosContainer">

            <div className="FlagCard">
                <img src={countryDetails.flag} className="FlagContainer" />
                <p> {countryDetails.demonym} Flag</p>
            </div>

            <div className="Card">
                <img className="icon" src={CapitalIcon} />
                <p> Capital City: {countryDetails.capital} </p>
            </div>

            <div className="Card">
                <img className="icon" src={regions[countryDetails.region]} />
                <p> Region: {countryDetails.region} </p>
            </div>

            <div className="Card">
                <img className="icon" src={populationIcon} />
                <p> Population: {countryDetails.population} </p>
            </div>

            <div className="Card">
                <img className="icon" src={areaIcon} />
                <p> Area: {countryDetails.area} km</p>
            </div>

            <div className="Card">
                <img className="icon" src={numbersIcon} />
                <p> Numeric Code: {countryDetails.numericCode} </p>
            </div>

            <div className="Card">
                <img className="icon" src={telephoneIcon} />
                <p> Calling Code: {countryDetails.callingCodes}  </p>
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