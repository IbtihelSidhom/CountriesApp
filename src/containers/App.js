import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar';
import CountryInfos from '../components/CountryInfos';
import "./App.css";


const App = () => {

  return (
    <div className="App" >

      <header></header>

      <div className="banner"> </div>

      <SearchBar />

      <div className="content">
        <CountryInfos />
      </div>
    </div>
  );
};

export default App;
