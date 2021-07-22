import React, { Component } from 'react';
import userClient from '../lib/userClient';
import {Link} from 'react-router-dom';

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

    
  render() {
    const {favouriteList} = this.state
    return (
      <>
       <h1>Favourite recipes</h1>
       {this.state === "loading" ? <p>Loading...</p> :   
          <div>
            <p>You have {favouriteList.length} recipes!</p>
              <div className="favList">
              {favouriteList.map((recipe) => {
                return <div className="recipeBox" key={recipe._id}>
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


export default FavList;

