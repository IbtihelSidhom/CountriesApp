import React from "react";
import { connect } from "react-redux";
import { getCountryDetails } from "../selectors";
import { Card } from 'antd';

const { Meta } = Card;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
    padding: 20
};

function CountryInfos(props) {
    const { countryDetails } = props;
    return (
        <>
            <Card title="Country Infos">
                <Card.Grid style={gridStyle}>Capital: {countryDetails.capital}</Card.Grid>
                <Card.Grid style={gridStyle}>Population: {countryDetails.population}</Card.Grid>
                <Card.Grid style={gridStyle}>Region: {countryDetails.region} </Card.Grid>
                <Card.Grid style={gridStyle}>Subregion: {countryDetails.subregion} </Card.Grid>
            </Card>


        </>
    );

};

const mapStateToProps = state => {
    return {
        countryDetails: getCountryDetails(state)
    };
};

export default connect(mapStateToProps)(CountryInfos);