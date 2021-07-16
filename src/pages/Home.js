import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import recipeClient from '../lib/recipeClient'
import Signup from '../components/Signup'

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
        console.log("recipes: ", data.recipes)
        console.log(data.recipes)
        
        this.setState({
          recipes: data.recipes.slice(0,12)
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
        <div>
        <h1>CookHelper App</h1>
        </div>
        <div>
        <h1>About</h1>
        </div>
        <div>
        <h1>Some recipes</h1>
         <div style={{ width: '20%'}}>
          { this.state.recipes.map( (recipe) => {
            return (
              <div key={recipe._id}>
                <Link to={`/recipes/${recipe._id}/details`}>
                  <h3>{recipe.recipeName}</h3>
                </Link>
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
            )})
          }
        </div> 
        </div>
        <div>
        <h1>Sign up</h1>
        <Signup/>
        </div>
        
         
      </div>
    )
  }
}

export default Home;
