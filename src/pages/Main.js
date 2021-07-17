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
import {Link} from 'react-router-dom'

class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      initialRecipes: [],
      ShownRecipes: [],
      searchValue: "",
    }
  }

  
  handleSearchValue = (searchValue) => {
    this.setState({
      searchValue: searchValue,
    });
  };

  componentDidMount = () => {
    console.log("compdidmount")
    try{
      recipeClient.getAllRecipes().then(data => {
        console.log("recipes: ", data.recipes)
        this.setState({
          initialRecipes: data.recipes.slice(0,5)
        })
      })
    }
    catch{
      console.log("eerror")
    };
  };

	render() {
		 const { user } = this.props
     console.log(this.state.initialRecipes)
		return (
			<div>
				<Navbar/>
				<h1>Welcome {user.username}</h1>
				 <SearchInput onSearchValue = {this.handleSearchValue} value= {this.state.searchValue}/>
				<button>Submit</button>
				<div>
					<h1>Profile</h1>
          <h1>Some recipes</h1>
           <div style={{ width: '20%'}}>
          { this.state.initialRecipes.map( (recipe) => {
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
          }
        </div>  
				</div>
         
			</div>
		);
	}
}

export default withAuth(Main) ;
