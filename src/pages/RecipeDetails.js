import React, { Component } from 'react'
import recipeClient from '../lib/recipeClient'
// import userClient from '../lib/userClient'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'


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

  addToFav = () => {
   console.log("click to fav")
   recipeClient.pushRecipeToFav(this.props.match.params.recipeId).then((recipe) => {
    console.log("recipe:", recipe);
    
   })
   
  }

 
  render() {
    console.log("render recipe", this.state.recipe)
    const {recipe, status} = this.state;
    return (
      <>
       <Navbar/>
        {status === 'loading' && <div>loading</div>}
        {status === 'loaded' && 
        <div className="card">
          <div className="header">
            <iframe 
              className="video"
              src={recipe.videoLink}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
          <div className="text">
            <h1 className="food">
              {recipe.recipeName}
            </h1>
            <i className="fa fa-clock">{recipe.TimeToCook}</i>
            <i className="fa fa-users"> Serves 4</i>
            
            <div className="stars">
              <li>
                  <a href="#"><i className="fa fa-star"></i></a>
                  <a href="#"><i className="fa fa-star"></i></a>
                  <a href="#"><i className="fa fa-star"></i></a>
                  <a href="#"><i className="fa fa-star"></i></a>
                  <a href="#"><i className="fa fa-star-o"></i></a>
              </li>
            </div>
            <div className="info">
              <h3>Steps</h3>
              <ul>
                {recipe.Steps.map((step,index) => {
                  return <li key={index}>{step}</li>
                })}
                  
              </ul>
              <h3>Ingredients</h3>
              <ul>
                {recipe.ingredientsList.map((ingredientt,index) => {
                  return <li key={index}>{ingredientt}</li>
                })}
                  
                </ul>
            </div>
          </div>
          <Link to={"/user/favourites"}>
          <button onClick={this.addToFav} className="btn"><span>Add to your list!</span></button>
          </Link>
        </div>
  } 
      </>
    )
  }
};

export default RecipeDetail;

 