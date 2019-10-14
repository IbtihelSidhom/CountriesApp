import React from 'react';
import './App.css';
import { PageHeader } from 'antd';
import CountryInput from '../components/CountryInput';
import CountryFlag from '../components/CountryFlag';
import CountryInfos from '../components/CountryInfos';
import CountryInNumbers from '../components/CountryInNumbers';

const App = () => {

  return (
    <div className="App" >
      <PageHeader onBack={() => null} title="Country" subTitle="search the details of a country by name " />
      <CountryInput />
      <CountryFlag />
      <CountryInfos />
      <CountryInNumbers />
    </div>
  );
};

export default App;
