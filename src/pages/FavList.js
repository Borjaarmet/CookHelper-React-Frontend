import React, { Component } from 'react';
import userClient from '../lib/userClient'

class FavList extends Component {
  constructor(props){
    super(props)
    this.state ={
      status: "loading",
      favouriteList: []
    }
  }
  
  componentDidMount = async () => {
  // console.log("compdidmount");
   try {
     const favList = await userClient.getUserFavouriteList();
    // const favList = await userClient.getUserFavouriteList();
    // console.log("favList: ",favList)
      this.setState({
        status: 'loaded',
        favouriteList: favList.favourites,
      })  
   } catch (error){
    console.log(error);
   } 
  };
    
  render() {
    // console.log("render favList", this.state.favouriteList)
    const { favouriteList } = this.state;
    return (
      <>
      {this.state === "loading" ? <p>Loading...</p> : 
      <div>
        <h1>Favourite recipes</h1>
        <ul>
          {favouriteList.map((item) => {
            return <li key={item._id}>{item.recipeName}</li>
          })}
        </ul>
      </div>
  }
      </>
    )
  };
};


export default FavList;

