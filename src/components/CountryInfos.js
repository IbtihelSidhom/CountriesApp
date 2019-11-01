import React from "react";
import { connect } from "react-redux";
import { getCountryDetails } from "../selectors";
import "./index.css";
import { AfricaIcon, AmericasIcon, AsiaIcon, EuropeIcon, OceaniaIcon, CapitalIcon } from "../assets/icons/index";

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
            <div className="Card">
                <img className="icon" src={CapitalIcon} />
                <p> Capital City: {countryDetails.capital} </p>
            </div>

            <div className="Card">
                <img src={countryDetails.flag} className="FlagContainer" />
                <p> {countryDetails.demonym} Flag</p>
            </div>

            <div className="Card">
                <img className="icon" src={regions[countryDetails.region]} />
                <p> Region: {countryDetails.region} </p>
                <p> Subregion: {countryDetails.subregion} </p>
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