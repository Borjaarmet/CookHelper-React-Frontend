import React, { Component } from 'react';
import userClient from '../lib/userClient'

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
        createdList: myList,
      })  
   }
   catch(error) {
    console.log(error)
   } 
  };
    
  render() {
    //  const {favouriteList} = this.state
    console.log("render createdList", this.state.createdList)
    return (
      <div>
        <h1>My own recipes</h1>
         {/* <ul>
           {myList.map((recipe, index) => {
            return <li key={index}>{recipe}</li>
          })}  
        </ul>  */}
      </div>
    )
  };
};


export default CreateList;
