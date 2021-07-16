import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import recipeClient from '../lib/recipeClient'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: []
    }
  };

  componentDidMount = () => {
    console.log("compdidmount")
    try{
      recipeClient.getAllRecipes().then(data => {
        console.log("recipes: ", data)
        this.setState({
          recipes: data
        })
      })
    }
    catch{
      console.log("eerror")
    };
  };

  render() {
    console.log("render")
    console.log(this.state.recipes)
    return (
      <div>
        <h1>list of recipes</h1>
         <div style={{width: '60%', float:"left"}}>
          { this.state.recipes.map( recipe => {
            return (
              <div key={recipe._id}>
                <Link to={`/recipes/${recipe._id}/details`}>
                  <h3>{recipe.recipeName}</h3>
                </Link>
                 <p style={{maxWidth: '400px'}} >{recipe.videoLinK} </p> 
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}

export default Home;
