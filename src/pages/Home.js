import React, { Component } from 'react'

import Navbar from '../components/Navbar';

class Home extends Component {
 

  
  render() {
    console.log("render")
    return (
      <div>
        <Navbar/>
        <div>
        <h1>CookHelper App</h1>
        </div>
        <div>
        <h1>About</h1>
        </div>
        
        </div>
        
         
     
    )
  }
}

export default Home;
