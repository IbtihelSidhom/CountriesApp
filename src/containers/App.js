import React, { Component } from 'react';
import { connect } from "react-redux";
import { getError } from '../selectors';
import SearchBar from '../components/SearchBar/SearchBar';
import CountryInfos from '../components/CountryInfos/CountryInfos';
import Header from '../components/Header/Header';
import "./App.css";
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import { toggleError } from '../actions';


class App extends Component {

  componentDidMount() {
    this.props.toggleErrorAction(true);
  }


  render() {
    const { error } = this.props;

    return (
      <div className="App" >

        <Header />

        <div className="banner"> </div>

        <div className="searchBar">
          <SearchBar />
        </div>

        <div className="content">
          {error ? <div> Please enter a valid country name...</div>
            : <CountryInfos />}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    error: getError(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleErrorAction: value => dispatch(toggleError(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
