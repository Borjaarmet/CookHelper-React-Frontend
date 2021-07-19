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
      {/* <div className="container">
        <div className="AboutSection">
        <h1>About</h1>
        </div>
        <div className="RecipesSection">
        <h1>Some recipes</h1>
        </div>
      </div> */}
      </>
    );
  };
};

export default Home;
