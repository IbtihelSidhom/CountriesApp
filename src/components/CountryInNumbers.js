import React from "react";
import { connect } from "react-redux";
import { getCountryDetails } from "../selectors";
import { Card, Empty } from 'antd';
import { Statistic, Row, Col, Icon } from 'antd';

const { Meta } = Card;

function CountryInNumbers(props) {
    const { countryDetails } = props;
    return (
        <>
            <Row gutter={40}>
                <Col span={5}>
                    <Card>
                        <Statistic title="population" value={countryDetails.population} prefix={<Icon type="team" />} />
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <Statistic title="Area" value={countryDetails.area} suffix="km" />
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <Statistic title="Numeric Code" value={countryDetails.numericCode} prefix={<Icon type="global" />} />
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <Statistic title="Calling Code" value={countryDetails.callingCodes} prefix={<Icon type="phone" />} />
                    </Card>
                </Col>
            </Row>
        </>
    );

};

const mapStateToProps = state => {
    return {
        countryDetails: getCountryDetails(state)
    };
};

export default connect(mapStateToProps)(CountryInNumbers);