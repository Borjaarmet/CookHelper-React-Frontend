import React, { Component } from 'react'
import recipeClient from '../lib/recipeClient'
// import userClient from '../lib/userClient'
import Navbar from '../components/Navbar'
// import {Link} from 'react-router-dom'


class RecipeDetail extends Component {
  constructor(props){
    super(props)
    this.state= {
      status: 'loading',
      recipe:undefined,
    }
  }

  async componentDidMount() {
    console.log("compdidmount")
    console.log(this.props.match.params.recipeId)
    
    try{
      const details = await recipeClient.getRecipeDetails(this.props.match.params.recipeId);
        console.log("recipe: ",details)
        this.setState({
          status: 'loaded',
          recipe: details.recipe
        })      
    }
    catch{
      console.log("eerror")
    }
  };

 
  render() {
    console.log("render recipe", this.state.recipe)
    const {recipe, status} = this.state;
    return (
      <>
      <Navbar/>
      
      <h1>Recipe details</h1>
      <div>
        {status === 'loading' && <div>loading</div>}
      {status === 'loaded' && 
        <div>
          <h2>{recipe.recipeName}</h2>
          <p>{recipe.difficulty}</p>
          <p>{recipe.TimeToCook}</p>
          <ul>
          {recipe.Steps.map((step,index) => {
            return <li key={index}>{step}</li>
          })}
            
          </ul>
    
           <ul>
          {recipe.ingredientsList.map((ingredientt,index) => {
            return <li key={index}>{ingredientt}</li>
          })}
            
          </ul>
          <iframe
            width='200'
            height='200'
            src={recipe.videoLink}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            ></iframe>
        </div>
      
      }
      </div>
      
      </>
    )
  }
}

export default RecipeDetail;
