import React, { Component } from 'react'
import userClient from '../lib/userClient'
import Navbar from '../components/Navbar'

export default class CreateRecipe extends Component {
  constructor(props) {
    super(props)
    this.state={
      recipeName:"",
      difficulty:"",
      TimeToCook:"", 
      ingredientsList:[],
      Steps:[], 
      videoLink:"" 
    }
  };



  handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

   try{
    await userClient.getUserCreateRecipe(this.state)
    console.log("recipeCreated:" ,this.state)
    }
    catch(error) {
    console.log(error)
   } finally {
     this.props.history.push('/user/create',this.state)
   }
  }


  render() {

    return(
      <>
      <Navbar/>
      <h1>Do you want to create a recipe?</h1>
      <form
        className="form-container"
        onSubmit={this.handleSubmit}
      >
        <div className="">
          <label className="" htmlFor="name">
            Recipe name
          </label>
          <br/>
          <input
            type="text"
            name="recipeName"
            id="recipeName"
            onChange={this.handleChange}
            value={this.state.recipeName}
          />
        </div>
        <div className="">
          <label className="" htmlFor="image">
            Difficulty
          </label>
          <input
            type="text"
            name="difficulty"
            id="difficulty"
            onChange={this.handleChange}
            value={this.state.difficulty}
          />
        </div>
        <div className="">
          <label className="" htmlFor="calories">
            Time to cook
          </label>
          <input
            type="text"
            name="TimeToCook"
            id="TimeToCook"
            onChange={this.handleChange}
            value={this.state.TimeToCook}
          />
        </div>
         <div className="">
          <label className="" htmlFor="calories">
            Ingredients list
          </label>
          <input
            type="text"
            name="ingredientsList"
            id="ingredientsList"
            onChange={this.handleChange}
            value={this.state.ingredientsList}
          />
        </div>
         <div className="">
          <label className="" htmlFor="calories">
            Steps
          </label>
          <input
            type="text"
            name="Steps"
            id="Steps"
            onChange={this.handleChange}
            value={this.state.Steps}
          />
        </div>
         <div className="">
          <label className="" htmlFor="calories">
            video Link
          </label>
          <input
            type="text"
            name="videoLink"
            id="videoLink"
            onChange={this.handleChange}
            value={this.state.videoLink}
          />
        </div>
        <button type="submit">
          Create Recipe!
        </button>
      </form>
      </>
    )
  }     
};
