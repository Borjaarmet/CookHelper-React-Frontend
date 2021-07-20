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
  
  async componentDidMount(){
    console.log("compdidmount");
   try{
    const favList = await userClient.getUserFavouriteList();
      console.log("favList: ",favList)
      this.setState({
        status: 'loaded',
        favouriteList: [favList],
      })  
   }
   catch(error) {
    console.log(error)
   } 
  };
    
  render() {
    console.log("render favList", this.state.favouriteList)
    return (
      <div>
        <h1>Favourite recipes</h1>
      </div>
    )
  };
};


export default FavList;

