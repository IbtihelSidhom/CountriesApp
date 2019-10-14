import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCountryName } from '../selectors/index';
import { setCountryName, fetchCountryDetails } from '../actions/index';
import { Input } from 'antd';


class CountryInput extends Component {
    constructor(props) {
        super(props);
        this.state = { countryName: "" };
    }

    handleChange = e => {
        this.setState({ countryName: e.target.value });
    };

    handlePressEnter = (e) => {
        const { setCountryNameAction, fetchCountryDetailsAction } = this.props;
        setCountryNameAction(e.target.value);
        fetchCountryDetailsAction(this.state.countryName);
        this.setState({ countryName: "" });
    };

    render() {
        return (
            <>
                <Input
                    placeholder="Basic usage"
                    value={this.state.countryName}
                    onChange={this.handleChange}
                    onPressEnter={event => this.handlePressEnter(event)}
                />
            </>
        );
    }
};

const mapStateToProps = state => {
    return {
        countryName: getCountryName(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCountryNameAction: countryName => dispatch(setCountryName(countryName)),
        fetchCountryDetailsAction: countryName => dispatch(fetchCountryDetails(countryName))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountryInput);