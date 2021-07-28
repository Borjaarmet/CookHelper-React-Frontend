import React, { Component } from 'react';
import userClient from '../lib/userClient';
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

  deleteRecipe = async () => {
    try{
       const deletedRecipe = await userClient.getUserDeleteRecipeCreated(this.props.match.params.id) 
      console.log("deleted recipe:" , deletedRecipe)
      this.setState({
        createdList: this.state.createdList.slice(1, deletedRecipe)
      })
    }
    catch{
      console.log("eerror")
    }
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
        {/* <h1>My own recipes</h1>
        <p>You have {createdList.length} recipes!</p>
          <ul>
           {createdList.map((recipe, index) => {
            return <li key={index}>{recipe._id}, {recipe.recipeName}
            <button onClick = {this.deleteRecipe}>delete</button>
            <button onClick = {this.editRecipe}>edit</button>
            </li>
          })}  
        </ul>   */}
         {this.state === "loading" ? <p>Loading...</p> :   
          <div  className="container-favList">
            <h1>You have {createdList.length} recipes!</h1>
              <div className="recipe-box">
              {createdList.map((recipe) => {
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
      </>
    )
  };
};


export default CreateList;
