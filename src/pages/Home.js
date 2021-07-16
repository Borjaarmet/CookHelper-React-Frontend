import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
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
        <div>
        <h1>CookHelper App</h1>
        </div>
        <div>
        <h1>About</h1>
        </div>
        <div>
        <h1>Some recipes</h1>
        </div>
        <div>
        <h1>Sign up</h1>
        <Signup/>
        </div>
        
         {/* <div style={{width: '60%', float:"left"}}>
          { this.state.recipes.map( (recipe) => {
            return (
              <div key={recipe._id}>
                <Link to={`/recipes/${recipe._id}/details`}>
                  <h3>{recipe.recipeName}</h3>
                </Link>
                 <p style={{maxWidth: '400px'}} >{recipe.videoLinK} </p>
              </div>
            )})
          }
        </div> */}
      </div>
    )
  }
}

export default Home;
