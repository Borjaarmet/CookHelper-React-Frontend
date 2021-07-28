import React, { Component } from 'react';
import userClient from '../lib/userClient';
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
    try{
      const deletedRecipe = await userClient.getUserDeleteRecipeCreated(this.props.match.params.id) 
      console.log("deleted recipe:" , deletedRecipe)

      
      this.setState({
        favouriteList: this.state.favouriteList.slice(1, deletedRecipe)
      })
    }
    catch{
      console.log("eerror")
    }
  };
    
  render() {
    const {favouriteList} = this.state
    return (
      <>
        <Navbar/>
        <div>
       
       {this.state === "loading" ? <p>Loading...</p> :   
          <div  className="container-favList">
            <h1>You have {favouriteList.length} recipes!</h1>
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

