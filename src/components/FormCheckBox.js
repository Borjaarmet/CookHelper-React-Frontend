import React, { Component } from 'react';
import DairyBoxCheck from './DairyBoxCheck';
import FishBoxCheck from './FishBoxCheck';
import MeatBoxCheck from './MeatBoxCheck';
import PastaBoxCheck from './PastaBoxCheck';
import VegBoxCheck from './VegBoxCheck';


class FormCheckBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchValueIngredient: [],
    }
  }

 handleSearchRecipeByIngredients = () => {
    const {searchValueIngredient} = this.state;
    console.log("searchvalueIngredient :", searchValueIngredient)
    const newCopy = [...this.props.initialRecipes]
    console.log("newCopy: ", newCopy)
    const recipesFounded = newCopy.filter((recipe) => {
      return recipe.ingredientsList.includes(searchValueIngredient)
    })
    console.log("recipes founded: ", {recipesFounded})
   this.setState({
       shownRecipes: recipesFounded
   })

  }

  handleSubmitCheckBox = (event) => {
    event.preventDefault()
     console.log("click search: ", this.props.value)
     this.props.onSearchRecipeByIngredient(this.props.value)
  }

  render() {
    return (
      <>
         <h3 className='title-search'>Search by ingredients</h3>
      <div className="search-ingredients"> 
        <form className='form-search' onSubmit={this.handleSubmitCheckBox}>
          <div className='searchBox'>
            <h4>meat</h4>
            <div className="searchBox-ing">
              <MeatBoxCheck          
                onSearchRecipeByIngredient = {this.handleSearchRecipeByIngredients} 
              />
            </div>
          </div>
          <div className='searchBox'>
            <h4>fish</h4>
            <div className="searchBox-ing">
              <FishBoxCheck/>
            </div>
          </div>
          <div className='searchBox'>
          <h4>vegetables</h4>
          <div className="searchBox-ing">
            <VegBoxCheck/>
          </div>
          </div>
          <div className='searchBox'> 
          <h4>pasta and grains</h4>
          <div className="searchBox-ing">
            <PastaBoxCheck/>
          </div>
          </div>
          <div className='searchBox'>
            <h4>dairy</h4>
            <div className="searchBox-ing">
              <DairyBoxCheck/>
            </div>
          </div>
          <br/>
         <button className='submit' type='submit'>Search</button>
        </form>
      </div> 
      </>
    )
  }
};

export default  FormCheckBox;
