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
      videoLink:"", 
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
   console.log(this.state)
   try{
    const recipe = await userClient.getUserCreateRecipe(this.state)
    console.log("newRecipe:", recipe)
    }
    catch(error) {
    console.log(error)
   } finally {
     this.props.history.push('/user/create')
   }
  }


  render() {

    return(
      <>
      <Navbar/>
      <form onSubmit={this.handleSubmit} >
        <div className="container-createRecipe">
        <h2>Do you want to create a recipe?</h2>
        <p>Please fill in this form to create a recipe.</p>
        <hr/>
        <label>Recipe name</label>
        <input
          className="input-recipe"
          type="text"
          name="recipeName"
          onChange={this.handleChange}
          value={this.state.recipeName}
        />
        <label> Difficulty</label>
        <input
          type="text"
          name="difficulty"
          className="input-recipe"
          onChange={this.handleChange}
          value={this.state.difficulty}
        />
        <label>Time to cook</label>
        <input
          type="text"
          name="TimeToCook"
          className="input-recipe"
          onChange={this.handleChange}
          value={this.state.TimeToCook}
        />
        <label>Ingredients list</label>
        <input
          type="text"
          name="ingredientsList"
          className="input-recipe"
          onChange={this.handleChange}
          value={this.state.ingredientsList}
        />
        <label>Steps</label> 
        <input
          type="text"
          name="Steps"
          className="input-recipe"
          onChange={this.handleChange}
          value={this.state.Steps}
        />
        <label>video Link</label>
        <input
          type="text"
          name="videoLink"
          className="input-recipe"
          onChange={this.handleChange}
          value={this.state.videoLink}
            />
        <div className="clearfix">
          <button type="submit" className="signupbtn">Create Recipe!</button>
        </div>
        </div>
      </form>
      </>
    )
  }     
};
