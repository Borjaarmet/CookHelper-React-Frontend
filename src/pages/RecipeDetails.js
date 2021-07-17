import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'
import Navbar from '../components/Navbar'


class RecipeDetail extends Component {
 
  render() {
    
    return (
      <>
      <Navbar/>
      {/* No pintar card, directamente los detalles */}
      <RecipeCard/>
      </>
    )
  }
}

export default RecipeDetail;
