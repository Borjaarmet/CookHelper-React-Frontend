import React, { Component } from 'react';
import userClient from '../lib/userClient';
import Navbar from '../components/Navbar'

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
        <h1>My own recipes</h1>
        <p>You have {createdList.length} recipes!</p>
          <ul>
           {createdList.map((recipe, index) => {
            return <li key={index}>{recipe._id}
            <button onClick = {this.deleteRecipe}>delete</button>
            <button onClick = {this.editRecipe}>edit</button>
            </li>
          })}  
        </ul>  
      </>
    )
  };
};


export default CreateList;
