import React, { Component } from 'react';
import recipeClient from '../lib/recipeClient';
import Navbar from '../components/Navbar';
import NotFound from '../components/NotFound';

class RecipeDetail extends Component {
  constructor(props){
    super(props)
    this.state= {
      status: 'loading',
      recipe:undefined,
    }
  }

  async componentDidMount() {
    const {recipeId} = this.props.match.params
    try{
      const details = await recipeClient.getRecipeDetails(recipeId);
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
   recipeClient.pushRecipeToFav(this.props.match.params.recipeId).then((recipe) => {
    console.log("recipe:", recipe)
    this.props.history.push('/user/favourites')
   })
  };
 
  render() {
    const {recipe, status} = this.state;
    return (
      <>
       <Navbar/>
        {recipe === undefined && <NotFound/>}
        {status === 'loading' && <div>loading</div>}
        {status === 'loaded' && 
            <div className="container-profile">
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
                <h2 className="food">
                  {recipe.recipeName}
                </h2>
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
                  <h3>Difficulty</h3>
                  <p>{recipe.difficulty}</p>
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
              <button onClick={this.addToFav} className="btn"><span>Add to your list!</span></button>
            </div>
          </div>
        } 
      </>
    )
  }
};

export default RecipeDetail;

 