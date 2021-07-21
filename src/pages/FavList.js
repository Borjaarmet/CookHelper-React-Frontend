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
    console.log("render favList", this.state.favouriteList)
    return (
      <div>
        <h1>Favourite recipes</h1>
          <div className="favList">
           {favouriteList.map((recipe) => {
            return <div className="recipeBox" key={recipe._id}>
                      <h2>{recipe.recipeName}</h2>
                      <iframe
                        width='345'
                        height='400'
                        src={recipe.videoLink}
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      ></iframe>
                      <Link to = {`/recipes/${recipe._id}/details`}>
                      <button onClick={this.seeDetails}>See details</button>
                      </Link>
                   </div>
            })}  
         </div>  
      </div>
    )
  };
};


export default FavList;

