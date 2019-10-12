import React from 'react';
import './App.css';
import Button from 'antd/es/button';
import { Layout, PageHeader } from 'antd';
import CountryInput from '../components/CountryInput';
const { Header, Footer, Sider, Content } = Layout;

const App = () => {

  return (
    <div className="App" >
      <PageHeader onBack={() => null} title="Country" subTitle="search the details of a country by name " />
      <CountryInput />
    </div>
  );
};

export default App;
