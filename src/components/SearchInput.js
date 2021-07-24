import React, { Component } from 'react';


class Searchinput extends Component {

  handleChange = (searchValue) => {
    this.props.onSearchValue(searchValue);
  };

  handleSubmitSearchInput = (event) => {
    event.preventDefault()
    console.log("click submit: ",this.props.value)
    this.props.onSearchRecipe(this.props.value)
  }

  render() {
    
    return (
     <div className="recipes-container">
     
       <h3>Search a recipe</h3>
       <div className="search-recipe">
         
        <form onSubmit={this.handleSubmitSearchInput}>
        <input 
         className="input-search" 
         type="text"
         name="search" 
         onChange = {this.handleChange}
         value={this.props.value}
         placeholder="Search a recipe"/>
         <div className="btn-search">
         <button type="submit" className="fas fa-search"></button>
         </div>
        </form>
      </div>
      <h3 className='title-search'>Search by ingredients</h3>
      <div className="search-ingredients"> 
        <form className='form-search' onSubmit={this.handleSubmitCheckBox}>
          <div className='searchBox'>
            <h4>meat</h4>
            <div className="searchBox-ing">
              <input className='input-searchBox' type='checkbox' name='pork' value='pork' />
              <label> Pork</label><br />
              <input className='input-searchBox' type='checkbox' name='chicken' value='chicken' />
              <label> Chicken</label><br />
              <input className='input-searchBox' type='checkbox' name='burguer' value='burguer' />
              <label> Hamburguer</label><br />
              <input className='input-searchBox' type='checkbox' name='lamb' value='lamb' />
              <label> Lamb</label><br />
              <input className='input-searchBox' type='checkbox' name='bacon' value='bacon' />
              <label> Bacon</label><br />
              <input className='input-searchBox' type='checkbox' name='beef' value='beef' />
              <label> Beef</label><br />
              </div>
          </div>
          <div className='searchBox'>
            <h4>fish</h4>
            <div className="searchBox-ing">
            <input className='input-searchBox' type='checkbox' name='salmon' value='salmon' />
            <label> Salmon</label><br />
            <input className='input-searchBox' type='checkbox' name='tuna' value='tuna' />
            <label> Tuna</label><br />
            <input className='input-searchBox' type='checkbox' name='seabass' value='seabass' />
            <label> Seabass</label><br />
            <input className='input-searchBox' type='checkbox' name='monkfish' value='monkfish' />
            <label> Monkfish</label><br />
            </div>
          </div>
          <div className='searchBox'>
          <h4>vegetables</h4>
          <div className="searchBox-ing">
            <input className='input-searchBox' type='checkbox' name='tomatoes' value='tomatoes' />
            <label>Tomatoes</label><br />
            <input className='input-searchBox' type='checkbox' name='peppers' value='peppers' />
            <label> Peppers</label><br />
            <input className='input-searchBox' type='checkbox' name='onions' value='onions' />
            <label> Onions</label><br />
            <input className='input-searchBox' type='checkbox' name='cucumber' value='cucumber' />
            <label> Cucumber</label><br />
            <input className='input-searchBox' type='checkbox' name='carrots' value='carrots' />
            <label> Carrots</label><br />
            <input className='input-searchBox' type='checkbox' name='zuchinni' value='zuchini' />
            <label> Zuchini</label><br />
            <input className='input-searchBox' type='checkbox' name='pumpkin' value='pumpkin' />
            <label> Pumpkin</label><br />
            <input className='input-searchBox' type='checkbox' name='avocados' value='avocados' />
            <label> Avocados</label><br />
            <input className='input-searchBox' type='checkbox' name='eggplants' value='eggplants' />
            <label> Eggplants</label><br />
            <input className='input-searchBox' type='checkbox' name='mushrooms' value='mushrooms' />
            <label> Mushrooms</label><br />
            </div>
          </div>
          <div className='searchBox'> 
          <h4>pasta and grains</h4>
          <div className="searchBox-ing">
            <input className='input-searchBox' type='checkbox' name='macarroni' value='macarroni' />
            <label> Macarroni</label><br />
            <input className='input-searchBox' type='checkbox' name='spaghetti' value='spaghetti' />
            <label> Spaghetti</label><br />
            <input className='input-searchBox' type='checkbox' name='ravioli' value='ravioli' />
            <label> raviolis</label><br />
            <input className='input-searchBox' type='checkbox' name='noodles' value='nooddles' />
            <label> Nooddles</label><br />
            <input className='input-searchBox' type='checkbox' name='rice' value='rice' />
            <label> Rice</label><br />
            <input className='input-searchBox' type='checkbox' name='quinoa' value='quinoa' />
            <label> Quinoa</label><br />
            </div>
          </div>
          <div className='searchBox'>
            <h4>dairy</h4>
            <div className="searchBox-ing">
              <input className='input-searchBox' type='checkbox' name='butter' value='butter' />
              <label htmlFor='dairy1'> Butter</label><br />
              <input className='input-searchBox' type='checkbox' name='milk' value='milk' />
              <label htmlFor='dairy2'> Milk</label><br />
              <input className='input-searchBox' type='checkbox' name='eggs' value='eggs' />
              <label htmlFor='dairy3'> Eggs</label><br />
              <input className='input-searchBox' type='checkbox' name='sour cream' value='sour cream' />
              <label htmlFor='dairy4'> Sour cream</label><br />
              <input className='input-searchBox' type='checkbox' name='coco milk' value='coco milk' />
              <label htmlFor='dairy5'> Coco milk</label><br />
              <input className='input-searchBox' type='checkbox' name='emmentaler cheese' value='Emmentaler cheese' />
              <label htmlFor='dairy6'> Emmentaler cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='gouda cheese' value='Gouda cheese' />
              <label htmlFor='dairy7'> Gouda cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='cheddar cheese' value='Cheddar cheese' />
              <label htmlFor='dairy8'> Cheddar cheese</label><br />
            </div>
          </div>
          <br/>

         <button className='submit' type='submit'>Search</button>
        </form>
      </div>
        
    
  
  

      
   </div>   
    );
  }
}

export default Searchinput;