import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar';
import CountryInfos from '../components/CountryInfos';
import CountryInNumbers from '../components/CountryInNumbers';
import "./App.css";
import { windroseIcon } from "../assets/icons/index";


const App = () => {

  return (
    <div className="App" >
      <header>
        <img id="icon" src={windroseIcon} />
      </header>
      <SearchBar />

      <div className="banner">
      </div>

      <div className="content">

        <CountryInfos />
        <CountryInNumbers />
      </div>
    </div>
  );
};

export default App;
