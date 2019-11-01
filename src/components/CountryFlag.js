import React from "react";
import { connect } from "react-redux";
import { getCountryFlag, getCountryName } from "../selectors";
import "./index.css";

function CountryFlag(props) {
    const { countryFlag, countryName } = props;
    return (
        <div className="Card">
            <img src={countryFlag} className="FlagContainer" />
            <p> {countryName} </p>
        </div>
    );

};

const mapStateToProps = state => {
    return {
        countryFlag: getCountryFlag(state),
        countryName: getCountryName(state)
    };
};

export default connect(mapStateToProps)(CountryFlag);