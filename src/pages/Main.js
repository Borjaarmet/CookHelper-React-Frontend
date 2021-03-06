import React, { Component} from 'react';
import {Link} from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';

import Navbar from '../components/Navbar';
import FormInput from '../components/FormInput';

import recipeClient from '../lib/recipeClient';

class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      initialRecipes: [],
      shownInputRecipe:[],
      shownRecipes: [],
      searchValue: "", 
      searchValueIngredients: [],
    }
  }

  componentDidMount = () => {
    try{
      recipeClient.getAllRecipes().then(data => {
        this.setState({
          initialRecipes: data.recipes,
        })
      })
    }
    catch{
      console.log("eerror")
    };
  };

  handleSearchValue = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };
  
  handleSearchRecipe = () => {
   const {searchValue} = this.state;
   const newCopy = [...this.state.initialRecipes]
   const recipesFounded = newCopy.filter((item) => {
        return item.recipeName === searchValue
     })
   this.setState({
       shownInputRecipe: recipesFounded[0]
   })
  };

  handleSearchRecipeByIngredients = (event) => {
    event.preventDefault();
    const { searchValueIngredients } = this.state; 
    const newCopy = [...this.state.initialRecipes];
    const foundRecipes = [];
    try {
      for (let element = 0; element < newCopy.length; element++) {
        let match = 0;
        for (let index = 0; index < searchValueIngredients.length; index++) {
          if(newCopy[element].ingredientsList.includes(searchValueIngredients[index])){
            match++;
          } 
        }
        if(match === searchValueIngredients.length) {
          foundRecipes.push(newCopy[element]);
        }
      }
    } catch(e){
      console.log(e)
    } finally {
      this.setState({
        shownRecipes: foundRecipes
      })
    }
  };

  handleSubmitCheckBox = (event) => {
    const values = this.state.searchValueIngredients;
    values.push(event.target.name);
      this.setState({
        searchValueIngredient: values,
      })
  }
  
	render() {
		return (
			<>
        <Navbar/>
				<FormInput 
          value={this.state.searchValue}
          onSearchValue={this.handleSearchValue}
          onSearchRecipe= {this.handleSearchRecipe}    
        /> 
        <h3 className="title-search">Search by ingredients</h3>
        <div className="search-ingredients">
          <form className="search-form" onSubmit={this.handleSearchRecipeByIngredients}>
            <div className="searchBox">
              <h4 className="title-box">Meat</h4>
              <hr/>
              <input className='input-searchBox' type='checkbox' name='pork' id="pork" onChange={this.handleSubmitCheckBox} />
              <label htmlFor="pork"> Pork</label><br />
              <input className='input-searchBox' type='checkbox' name='chicken' id="chicken" onChange={this.handleSubmitCheckBox} />
              <label htmlFor="chicken"> Chicken</label><br />
              <input className='input-searchBox' type='checkbox' name='hamburguer' id="hamburguer" onChange={this.handleSubmitCheckBox} />
              <label htmlFor="hamburguer"> Hamburguer</label><br />
              <input className='input-searchBox' type='checkbox' name='lamb' id="lamb" onChange={this.handleSubmitCheckBox} />
              <label htmlFor="lamb"> Lamb</label><br />
              <input className='input-searchBox' type='checkbox' name='bacon' id="bacon" onChange={this.handleSubmitCheckBox} />
              <label htmlFor="bacon"> Bacon</label><br />
              <input className='input-searchBox' type='checkbox' name='beef' id="beef" onChange={this.handleSubmitCheckBox} />
              <label htmlFor="beef"> Beef</label><br />
            </div>
            <div className="searchBox">
              <h4 className="title-box">Fish</h4>
              <hr/>
              <input className='input-searchBox' type='checkbox' name='salmon' id="salmon" onChange={this.handleSubmitCheckBox} />
              <label htmlFor="salmon"> Salmon</label><br />
              <input className='input-searchBox' type='checkbox' name='tuna' id="tuna" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="tuna"> Tuna</label><br />
              <input className='input-searchBox' type='checkbox' name='seabass' id="seabass" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="seabass"> Seabass</label><br />
              <input className='input-searchBox' type='checkbox' name='monkfish' id="monkfish" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="monkfish"> Monkfish</label><br />
            </div>
              <div className="searchBox">
              <h4 className="title-box">Vegetables</h4>
              <hr/>
              <input className='input-searchBox' type='checkbox' name='tomatoes' id="tomatoes" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="tomatoes">Tomatoes</label><br />
              <input className='input-searchBox' type='checkbox' name='peppers' id="peppers" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="peppers"> Peppers</label><br />
              <input className='input-searchBox' type='checkbox' name='onions' id="onions" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="onions"> Onions</label><br />
              <input className='input-searchBox' type='checkbox' name='cucumber' id="cucumber" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="cucumber"> Cucumber</label><br />
              <input className='input-searchBox' type='checkbox' name='carrots' id="carrots" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="carrots"> Carrots</label><br />
              <input className='input-searchBox' type='checkbox' name='zuchinni' id="zuchini" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="zuchini"> Zuchini</label><br />
              <input className='input-searchBox' type='checkbox' name='pumpkin' id="pumpkin" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="pumpkin"> Pumpkin</label><br />
              <input className='input-searchBox' type='checkbox' name='avocados' id="avocados" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="avocados"> Avocados</label><br />
              <input className='input-searchBox' type='checkbox' name='eggplants' id="eggplants" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="eggplants"> Eggplants</label><br />
              <input className='input-searchBox' type='checkbox' name='mushrooms' id="mushrooms" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="mushrooms"> Mushrooms</label><br />
            </div>
            <div className="searchBox">
              <h4 className="title-box">Pasta & grains</h4>
              <hr/>
              <input className='input-searchBox' type='checkbox' name='macarroni' id="macarroni" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="macarroni"> Macarroni</label><br />
              <input className='input-searchBox' type='checkbox' name='spaghetti' id="spaghetti" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="spaghetti"> Spaghetti</label><br />
              <input className='input-searchBox' type='checkbox' name='ravioli' id="raviolis" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="raviolis"> raviolis</label><br />
              <input className='input-searchBox' type='checkbox' name='noodles' id="noodles" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="noodles"> Nooddles</label><br />
              <input className='input-searchBox' type='checkbox' name='rice' id="rice" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor="rice"> Rice</label><br />
              <input className='input-searchBox' type='checkbox' name='quinoa' id="quinoa" onChange={this.handleSubmitCheckBox} />
              <label htmlFor="quinoa"> Quinoa</label><br />
            </div>
            <div className="searchBox">
              <h4 className="title-box">Dairy products</h4>
              <hr/>
              <input className='input-searchBox' type='checkbox' name='butter' id="butter" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor='butter'> Butter</label><br />
              <input className='input-searchBox' type='checkbox' name='milk' id="milk" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor='milk'> milk</label><br />
              <input className='input-searchBox' type='checkbox' name='eggs' id="eggs" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor='eggs'> Eggs</label><br />
              <input className='input-searchBox' type='checkbox' name='sour cream' id="sourCream" onChange={this.handleSubmitCheckBox} />
              <label htmlFor='sourCream'> Sour cream</label><br />
              <input className='input-searchBox' type='checkbox' name='coco milk' id="cocoMilk" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor='cocoMilk'> Coco milk</label><br />
              <input className='input-searchBox' type='checkbox' name='emmentaler cheese' id="emmentalerCheese" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor='emmentalerCheese'> Emmentaler cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='gouda cheese' id="goudaCheese" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor='goudaCheese'> Gouda cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='cheddar cheese' id="cheddarCheese" onChange={this.handleSubmitCheckBox}/>
              <label htmlFor='cheddarCheese'> Cheddar cheese</label><br />
            </div>
            <div className="btn-search2">
              <button className="fas fa-search"  type="submit"></button>
            </div>
          </form>
        </div>

        {this.state.shownInputRecipe !== [] ? (
            <>
              <div id="recipeFounded" className="hidden">
                <div className="recipe-box">
                  <div className="recipe-box-recipe">
                    <Link to={`/recipes/${this.state.shownInputRecipe._id}/details`}>
                      <h4>{this.state.shownInputRecipe.recipeName}</h4>
                      <iframe
                        width='200'
                        height='200'
                        src={this.state.shownInputRecipe.videoLink}
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      ></iframe> 
                    </Link>
                  </div>
                </div>
              </div>
            </>
         ): <h1>Recipe not found</h1>
        }   
        
        {this.state.shownRecipes.length !== 0 ? (
              <>
                <div  className="foundBox">
                  <h3 classsName="title-search">We found {this.state.shownRecipes.length} recipes</h3>
                  <div className="recipe-box">
                    {this.state.shownRecipes.map((recipe) => {
                      return (
                        <div className="recipe-box-recipe" key={recipe._id}>
                          <Link to={`/recipes/${recipe._id}/details`}>
                            <h4 >{recipe.recipeName}</h4>
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
                      )
                    })}
                  </div>
                </div>
              </>
            ) : <div id="recipeCheckBoxFound" className="foundBox">
                  <div className="recipe-box">
                    <div className="recipe-box-recipe">
                      <p className="foundedRecipe">Search results</p>
                    </div>
                  </div>
                </div>         
        } 
        
        <h3 className="title-search">Check out some of our recipes</h3>
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
          }; 
        </div>
			</>
		);
	};
};

export default withAuth(Main) ;

