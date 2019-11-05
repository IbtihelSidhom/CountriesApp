import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import CountryInfos from '../components/CountryInfos/CountryInfos';
import "./App.css";


const App = () => {

  return (
    <div className="App" >

      <header></header>

      <div className="banner"> </div>

      <div className="searchBar">
        <SearchBar />
      </div>

      <div className="content">
        <CountryInfos />
      </div>
    </div>
  );
};

export default App;
