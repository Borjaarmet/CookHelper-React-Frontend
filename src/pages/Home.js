import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import '../App.css'
import TitleSection from '../components/TitleSection';

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
