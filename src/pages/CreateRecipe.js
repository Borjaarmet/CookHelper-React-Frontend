import React, { Component } from 'react'
import userClient from '../lib/userClient'

export default class CreateRecipe extends Component {
  constructor(props) {
    super(props)
    this.state={
      status:"loading",
      recipeName:"",
      difficulty:"",
      TimeToCook:"", 
      ingredientsList:[],
      Steps:[], 
      videoLink:""
      
    }
  };

  async componentDidMount(){
    console.log(this.props)
    try{
      const data = await userClient.getUserCreateRecipe()
      console.log("body:",data)
      
      this.setState({
        status:"loaded",
        recipeName:"",
        difficulty:"",
        TimeToCook:"", 
        ingredientsList:[],
        Steps:[], 
        videoLink:""
      })
    }
     catch(error) {
    console.log(error)
   }    
  }

  handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

   handleSubmit = (event) => {
    event.preventDefault();

    this.setState = {
      name: this.state.name,
      recipeName: this.state.recipeName,
      difficulty: this.state.difficulty,
      TimeToCook: this.state.TimeToCook,
      ingredientsList: this.state.ingredientsList,
      Steps: this.state.Steps,
      videoLink: this.state.videoLink
    };
  };

   addToCreatedList = () => {
   console.log("click to CreatedList")
   userClient.getUserCreateRecipe(this.props.match.params.recipeId).then((recipe) => {
    console.log("recipe:", recipe)
    this.props.history.push('/user/create')
   })
  };


  render() {
    return(
      <>
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
        <button onClick={this.addToCreatedList}>
          Create Recipe!
        </button>
      </form>
      </>
    )
  }     
};
