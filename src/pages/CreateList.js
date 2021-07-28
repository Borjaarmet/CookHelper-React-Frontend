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

  handleDelete = async () => {
    console.log("click delete")
    try{
      const recipeId = await userClient.deleteRecipeCreated(this.props.match.params.id) 
      console.log("deleted recipe:" , recipeId)
      this.setState({
        createdList: this.state.createdList.splice(1, recipeId)
      })
    }
    catch(error) {
      console.log(error)
    }
    finally {
      this.setState({
        createdList: this.state.createdList.slice()
      })
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
        
         {this.state === "loading" ? <p>Loading...</p> :   
          <div  className="container-favList">
            <h1>Your own recipes</h1>
            {createdList.length === 1 && <h2>You have {createdList.length} recipe!</h2>} 
            {createdList.length > 1 && <h2>You have {createdList.length} recipes!</h2>}
            {createdList.length === 0 && <h2>You don´t have any recipe saved!</h2>} 
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
