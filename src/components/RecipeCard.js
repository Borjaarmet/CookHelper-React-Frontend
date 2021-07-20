import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import recipeClient from '../lib/recipeClient'


class RecipeCard extends Component {
  constructor(props) {
    super(props)
    this.state={
      recipe: [],
    }
  }

   componentDidMount = () => {
    console.log("compdidmount")
    const {id} = this.props.match.params.recipeId
    try{
     
      recipeClient.getRecipeDetails(id).then(data => {
        console.log("recipe: ",data)
        this.setState({
          recipe: data
        })
      })
    }
    catch{
      console.log("eerror")
    }
  };


  render() {
    return (
      <div class="card">
        <div class="header">
          <div class="icon">
            <a href="#"><i class="fa fa-heart-o"></i></a>
          </div>
        </div>
        <div class="text">
          <h1 class="food">
            Chinese Noodles
          </h1>
          <i class="fa fa-clock-o"> 15 Mins</i>
          <i class="fa fa-users"> Serves 2</i>
      
          <div class="stars">
            <li>
              <a href="#"><i class="fa fa-star"></i></a>
              <a href="#"><i class="fa fa-star"></i></a>
              <a href="#"><i class="fa fa-star"></i></a>
              <a href="#"><i class="fa fa-star"></i></a>
              <a href="#"><i class="fa fa-star-o"></i></a>
            </li>
          </div>
          <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, temporibus.</p>
        </div>
        <a href="#" class="btn">Let's Cook!</a>
      </div>
    )
  }
};

export default RecipeCard;
