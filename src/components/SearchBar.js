import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCountryName } from '../selectors/index';
import { setCountryName, fetchCountryDetails } from '../actions/index';
import { searchIcon } from "../assets/icons/index";
import "./index.css";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { countryName: "" };
    }

    handleChange = e => {
        this.setState({ countryName: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { setCountryNameAction, fetchCountryDetailsAction } = this.props;
        setCountryNameAction(this.state.countryName);
        fetchCountryDetailsAction(this.state.countryName);
        this.setState({ countryName: "" });
    };

    render() {
        return (
            <form className="search" onSubmit={event => this.handleSubmit(event)}>
                <div className="search-items">
                    <img className="search-icon" src={searchIcon} />

                    <input
                        className="search-input"
                        type="text"
                        placeholder="Enter country name..."
                        value={this.state.countryName}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
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
)(SearchBar);