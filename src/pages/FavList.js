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
    const myList = await userClient.getUserFavouriteList();
      console.log("favList: ",myList)
      this.setState({
        status: 'loaded',
        favouriteList: myList,
      })  
   }
   catch(error) {
    console.log(error)
   } 
  };
    
  render() {
    //  const {favouriteList} = this.state
    console.log("render favList", this.state.favouriteList)
    return (
      <div>
        <h1>Favourite recipes</h1>
         {/* <ul>
           {myList.map((recipe, index) => {
            return <li key={index}>{recipe}</li>
          })}  
        </ul>  */}
      </div>
    )
  };
};


export default FavList;

