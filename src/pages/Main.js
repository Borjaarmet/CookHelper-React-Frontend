// State
// initialRecipes: [] lo lleno con componentDidMount
// shownRecipes: [] lo lleno condicionalmente con los cambios de formulario (manipulación de Arrays)
// control de formularios y checkbox
// onCheckBoxMeat > Controlo el estado

// componente RecipeCard tiene sus botones me dirigen al single view
import React, { Component} from 'react';
import Navbar from '../components/Navbar';
import { withAuth } from '../providers/AuthProvider';
import FormInput from '../components/FormInput';
import FormCheckBox from '../components/FormCheckBox';
import recipeClient from '../lib/recipeClient';
import {Link} from 'react-router-dom';
import Sidebar from '../components/Sidebar';




class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      initialRecipes: [],
      shownRecipes: [],
      searchValue: "", 
      isOpen: false,
    }
  }

  componentDidMount = () => {
    console.log("compdidmount")
    try{
      recipeClient.getAllRecipes().then(data => {
        this.setState({
          initialRecipes: data.recipes,
          shownRecipes: data.recipes
        })
      })
    }
    catch{
      console.log("eerror")
    };
  };

  handleSearchValue = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleSearchRecipe = () => {
   const {searchValue} = this.state;
   console.log("searchvalue :", searchValue)
   const newCopy = [...this.state.initialRecipes]
   console.log("newCopy: ", newCopy)
   const recipesFounded = newCopy.filter((item) => {
        return item.recipeName === searchValue
     })
   console.log("recipes founded: ", {recipesFounded})
   this.setState({
       shownRecipes: recipesFounded[0]
   })
  };

   toggle = () => {
    this.setState({
      isOpen: true,
    })
  };
  
	render() {
    console.log("initialRecipes" ,this.state.initialRecipes)
    console.log("shownRecipes:" ,this.state.shownRecipes)
   
		return (
			<>
        <Sidebar isOpen={this.state.isOpen} toggle = {this.toggle}/> 
        <Navbar toggle = {this.toggle}/>
				<FormInput 
          value={this.state.searchValue}
          onSearchValue={this.handleSearchValue}
          onSearchRecipe= {this.handleSearchRecipe}    
        />
        <div className="recipes-container"> <FormCheckBox/></div>
       
				<div className="recipes-container">
          <h3>Recipes founded ...</h3>
          <div className="recipe-box">
            <div>
              <Link to={`/recipes/${this.state.shownRecipes._id}/details`}>
                <h4>{this.state.shownRecipes.recipeName}</h4>
              </Link>
                <iframe
                    width='200'
                    height='200'
                    src={this.state.shownRecipes.videoLink}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                 ></iframe>
            </div>
          </div>
          <h3>Check some of our recipes</h3>
             <div className="recipe-box">
               { this.state.initialRecipes.map( (recipe) => { 
                return (
                  <div className="recipe-box-recipe" key={recipe._id}>
                
                    <Link to={`/recipes/${recipe._id}/details`}>
                      <h3>{recipe.recipeName}</h3>
                    </Link>
                    <iframe
                      width='200'
                      height='200'
                      src={recipe.videoLink}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                )})
               } 
             </div>
				</div>  
			</>
		);
	}
}

export default withAuth(Main) ;

