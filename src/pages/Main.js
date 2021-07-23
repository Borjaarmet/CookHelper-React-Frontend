// State
// initialRecipes: [] lo lleno con componentDidMount
// shownRecipes: [] lo lleno condicionalmente con los cambios de formulario (manipulación de Arrays)
// control de formularios y checkbox
// onCheckBoxMeat > Controlo el estado

// componente RecipeCard tiene sus botones me dirigen al single view
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { withAuth } from '../providers/AuthProvider';
import SearchInput from '../components/SearchInput';
import recipeClient from '../lib/recipeClient';
import {Link} from 'react-router-dom';



class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      initialRecipes: [],
      shownRecipes: [],
      searchValue: "",
      
    }
  }

  componentDidMount = () => {
    console.log("compdidmount")
    try{
      recipeClient.getAllRecipes().then(data => {
        console.log("recipes: ", data.recipes)
        this.setState({
          initialRecipes: data.recipes
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
   console.log("recipes founded: ", recipesFounded)
   this.setState({
     shownRecipes: this.state.shownRecipes.push(recipesFounded)
   })
  };
  
	render() {
    console.log(this.state.initialRecipes)
    const {shownRecipes} = this.state
     console.log("shownRecipes:" ,shownRecipes)
		return (
			<>
        <Navbar/>
				<SearchInput 
          value={this.state.searchValue}
          onSearchValue={this.handleSearchValue}
          onSearchRecipe= {this.handleSearchRecipe}
          />

				<div className="recipes-container">
          <h1>Some recipes</h1>
           <div className="recipe-box">
            
             {shownRecipes.map((recipe) => {
               return <div key={recipe._id}>
                 <Link to={`/recipes/${recipe._id}/details`}>
                  <h4>{recipe.recipeName}</h4>
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
             })}
          {/* { this.state.initialRecipes.map( (recipe) => {
           
            return (
              <div key={recipe._id}>
                
                <Link to={`/recipes/${recipe._id}/details`}>
                  <h4>{recipe.recipeName}</h4>
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
          } */}
        </div>  
				</div>
        
          
			</>
		);
	}
}

export default withAuth(Main) ;

