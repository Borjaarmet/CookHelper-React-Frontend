import React, { Component } from 'react';
import userClient from '../lib/userClient';
import recipeClient from '../lib/recipeClient';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

class CreateList extends Component {
  constructor(props){
    super(props)
    this.state ={
      status: "loading",
      createdList: []
    }
  }
  
  async componentDidMount(){
    console.log("compdidmount");
    console.log("props:",this.props.match.params)
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

  handleDelete = async (recipe) => {
    console.log("click delete")
    try{
      const recipeId = await recipeClient.deleteRecipeCreated(recipe._id) 
      console.log("deleted recipe:" , recipeId)
      console.log("props", this.props)
      this.setState({
        createdList: this.state.createdList.splice(1, recipeId)
      })
    }
    catch(error) {
      console.log(error)
    }
  };

   handleSortByTime = () => {
    console.log("click");
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
    console.log("click");
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

  handleSortByDifficulty = () => {
    console.log("click");
    const { createdList } = this.state;
    
    const newCopy = [...createdList];
    newCopy.sort(function (a, b) {
      if (a.difficulty > b.difficulty) {
        return 1;
      } else if (a.difficulty < b.difficulty) {
        return -1;
      }
      return 0;
    });
    this.setState({
      createdList: newCopy,
    });
  };

  // editRecipe = async() => {
  //   try{
  //     const updateRecipe = await userClient
  //   }
  // }
    
  render() {
    const {createdList} = this.state
    console.log("render createdList", this.state)
    
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
            <button onClick={this.handleSortByDifficulty}>Sort by difficulty</button>
            <button onClick={this.handleSortByIngredients}>Sort by num of ingredients</button>
            </div>
              <div className="recipe-box">
              {createdList.map((recipe) => {
                return <div className="recipe-box-recipe" key={recipe._id}>
                          <div className="recipeBox-title">
                            <h3>{recipe.recipeName}</h3>
                          </div>
                          {/* <div className="recipeBox-video">
                            <iframe
                              width='200'
                              height='150'
                              src={recipe.videoLink}
                              title='YouTube video player'
                              frameBorder='0'
                              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                              allowFullScreen
                            ></iframe>
                          </div> */}
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
