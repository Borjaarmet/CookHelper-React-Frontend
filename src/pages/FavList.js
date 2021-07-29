import React, { Component } from 'react';
import userClient from '../lib/userClient';
import recipeClient from '../lib/recipeClient';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar'

class FavList extends Component {
  constructor(props){
    super(props)
    this.state ={
      status: "loading",
      favouriteList: []
    }
  }
  
  async componentDidMount(){
    console.log("compdidmount");
   try{
    const myList = await userClient.getUserFavouriteList();
      console.log("favList: ",myList)
      this.setState({
        status: 'loaded',
        favouriteList: myList.favourites,
      })  
   }
   catch(error) {
    console.log(error)
   } 
  };

  handleDelete = async () => {
    console.log("props", this.props)
    const {recipeId} = this.props
    try{
      const deletedRecipe = await recipeClient.deleteRecipeFromFav(recipeId) 
      console.log("deleted recipe:" , deletedRecipe)
      this.setState({
        favouriteList: this.state.favouriteList.splice(1, deletedRecipe)
      })
    }
    catch(error) {
    console.log(error)
   } 
  };

  handleSortByTime = () => {
    console.log("click");
    const { favouriteList } = this.state;

    const newCopy = [...favouriteList];
    newCopy.sort(function (a, b) {
      if (a.TimeToCook > b.TimeToCook) {
        return 1;
      } else if (a.TimeToCook < b.TimeToCook) {
        return -1;
      }
      return 0;
    });
    this.setState({
      favouriteList: newCopy,
    });
  };

  handleSortByIngredients = () => {
    console.log("click");
    const { favouriteList } = this.state;

    const newCopy = [...favouriteList];
    newCopy.sort(function (a, b) {
      if (a.ingredientsList > b.ingredientsList) {
        return 1;
      } else if (a.ingredientsList < b.ingredientsList) {
        return -1;
      }
      return 0;
    });
    this.setState({
      favouriteList: newCopy,
    });
  };

   handleSortByDifficulty = () => {
    console.log("click");
    const { favouriteList } = this.state;
    
    const newCopy = [...favouriteList];
    newCopy.sort(function (a, b) {
      if (a.difficulty > b.TimeToCook) {
        return 1;
      } else if (a.TimeToCook < b.TimeToCook) {
        return -1;
      }
      return 0;
    });
    this.setState({
      favouriteList: newCopy,
    });
  };
    
  render() {
    const {favouriteList} = this.state
    return (
      <>
        <Navbar/>
        <div>
       
       {this.state === "loading" ? <p>Loading...</p> :   
          <div  className="container-favList">
            <h1>Your favourite recipes</h1>
            
            {favouriteList.length === 1 && <h2>You have {favouriteList.length} recipe!</h2>} 
            {favouriteList.length > 1 && <h2>You have {favouriteList.length} recipes!</h2> }
             {favouriteList.length === 0 && <h2>You don´t have any recipe saved!</h2>} 
            <div className="sortbtns">
            <button onClick={this.handleSortByTime}>Sort by time to cook</button>
            <button onClick={this.handleSortByDifficulty}>Sort by difficulty</button>
            <button onClick={this.handleSortByIngredients}>Sort by quantity of ingredients</button>
            </div>
              <div className="recipe-box">
              {favouriteList.map((recipe) => {
                return <div className="recipe-box-recipe" key={recipe._id}>
                          <div className="recipeBox-title">
                            <h2>{recipe.recipeName}</h2>
                          </div>
                          <div className="recipeBox-video">
                            <iframe
                              width='200'
                              height='150'
                              src={recipe.videoLink}
                              title='YouTube video player'
                              frameBorder='0'
                              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="recipeBox-btns">
                            <Link to = {`/recipes/${recipe._id}/details`}>
                            <button>See details</button>
                            </Link>
                            <button onClick={this.handleDelete}>🗑️</button>                     
                          </div>
                      </div>
            })}  
          </div>  
        </div>
      }
      </div>
      </>
    )
  };
};


export default FavList;

