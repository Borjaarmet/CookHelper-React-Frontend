import React, { Component } from 'react'
import recipeClient from '../lib/recipeClient'


class RecipeCard extends Component {
  constructor(props) {
    super(props)
    this.state={
      recipe: [],
    }
  }

   componentDidMount = () => {
    console.log("compdidmount")
    try{
      recipeClient.getRecipeDetails().then(data => {
        console.log("recipe: ",data)
        this.setState({
          recipe: data
        })
      })
    }
    catch{
      console.log("eerror")
    }
  };


  render() {
    return (
      <div>
        <h1>Recipe card</h1>
        <div>
      
        <h1>Recipe details</h1>
        
          <div style={{ width: '20%'}}>
          { this.state.recipe.map( (elem) => {
            return (
              <div key={elem._id}>
                  <h1>{elem.difficulty}</h1>
                  <h2>{elem.TimeToCook}</h2>
                  <h2>{elem.ingredientsList}</h2>
                  <p>{elem.Steps}</p>
                 <iframe
                    width='200'
                    height='200'
                    src={elem.videoLink}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                 ></iframe>
              </div>
            )})
          }
        </div> 
        <button>Add to favourites</button>    
      </div>
      </div>
    )
  }
};

export default RecipeCard;
