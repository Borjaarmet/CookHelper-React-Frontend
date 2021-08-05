import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import TitleSection from '../components/TitleSection';

import '../App.css';

class Home extends Component {
  render() {
    console.log("render")
    return (
      <>
       <Navbar/>
       <TitleSection/>
      </>
    );
  };
};

export default Home;
