import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import userClient from '../lib/userClient';
import recipeClient from '../lib/recipeClient';

import Navbar from '../components/Navbar';

class CreateList extends Component {
  constructor(props){
    super(props)
    this.state ={
      status: "loading",
      createdList: []
    }
  }
  
  async componentDidMount(){
   try{
    const myList = await userClient.getUserCreatedRecipesList();
      console.log("createdList: ",myList)
      this.setState({
        status: 'loaded',
        createdList: myList.created,
      })  
   }
   catch(error) {
    console.log(error)
   } 
  };

  handleDelete = (recipe) => {
    try {
      recipeClient.deleteRecipeCreated(recipe._id) 
    }
    catch(error) {
      console.log(error)
    } finally {
     const myRecipes = [...this.state.createdList].filter(item => {
       return item._id !== recipe._id
     })
     this.setState({
       createdList: myRecipes
     })
   }
  };

  handleSortByTime = () => {
    const { createdList } = this.state;
    const newCopy = [...createdList];
    newCopy.sort(function (a, b) {
      if (a.TimeToCook > b.TimeToCook) {
        return 1;
      } else if (a.TimeToCook < b.TimeToCook) {
        return -1;
      }
      return 0;
    });
    this.setState({
      createdList: newCopy,
    });
  };

  handleSortByIngredients = () => {
    const { createdList } = this.state;
    const newCopy = [...createdList];
    newCopy.sort(function (a, b) {
      if (a.ingredientsList < b.ingredientsList) {
        return 1;
      } else if (a.ingredientsList > b.ingredientsList) {
        return -1;
      }
      return 0;
    });
    this.setState({
      createdList: newCopy,
    });
  };
    
  render() {
    const {createdList} = this.state    
    return (
      <>
        <Navbar/>
         {this.state === "loading" ? <p>Loading...</p> :   
          <div  className="container-favList">
            <h1 className="title-search">Your own recipes</h1>
            {createdList.length === 1 && <h2 className="title-search">You have {createdList.length} recipe!</h2>} 
            {createdList.length > 1 && <h2 className="title-search">You have {createdList.length} recipes!</h2>}
            {createdList.length === 0 && <h2 className="title-search">You don´t have any recipe saved!</h2>} 
            <div className="sortbtns">
              <button onClick={this.handleSortByTime}>Sort by cooking time</button>
              <button onClick={this.handleSortByIngredients}>Sort by num of ingredients</button>
            </div>
            <div className="recipe-box">
              {createdList.map((recipe) => {
                return <div className="recipe-box-recipe" key={recipe._id}>
                          <div className="recipeBox-title">
                            <h3>{recipe.recipeName}</h3>
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
                            <button className="navBtnLink">See details</button>
                            </Link>
                            <button className="fas fa-trash" onClick={()=> {this.handleDelete(recipe)}}></button>                     
                          </div>
                      </div>
              })}  
            </div>  
          </div>
        }
      </>
    )
  };
};

export default CreateList;
