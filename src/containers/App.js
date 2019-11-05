import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import CountryInfos from '../components/CountryInfos/CountryInfos';
import Header from '../components/Header/Header';
import "./App.css";


const App = () => {

  return (
    <div className="App" >

      <Header />

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
