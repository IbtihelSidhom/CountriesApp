import React from "react";
import { connect } from "react-redux";
import { getCountryFlag, getCountryName } from "../selectors";
import { Card, Empty } from 'antd';

const { Meta } = Card;

function CountryFlag(props) {
    const { countryFlag, countryName } = props;
    return (
        <>
            <Card
                //loading={true}
                hoverable={true}
                style={{ width: 300 }}
                cover={<img alt="flag" src={countryFlag} />}
            >
                {/* <Empty description={false} /> */}
                <Meta title={countryName} description="..." />
            </Card>


        </>
    );

};

const mapStateToProps = state => {
    return {
        countryFlag: getCountryFlag(state),
        countryName: getCountryName(state)
    };
};

export default connect(mapStateToProps)(CountryFlag);