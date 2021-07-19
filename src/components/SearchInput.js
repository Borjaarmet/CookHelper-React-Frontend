import React, { Component } from 'react';

class Searchinput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }

  handleChange = (event) => {
    this.props.onSearchValue(event.target.value);
  };

   handleSubmit = (event) => {
    event.preventDefault();

  
  };

  render() {
    return (
     <div className="recipes-container">
      <div className="search-recipe">
       <h3>Search a recipe</h3>
        <form className="inputSearch" onSubmit={this.handleSubmit}>
          <input
          type= "text"
          name="search"
          value={this.props.value}
          onChange={this.handleChange}
          placeholder="Search for a recipe"
          />
          <button>Submit</button>
        </form>
      </div>
      <div className="search-ingredients">
        <h3 className='title-search'>Search by ingredients</h3>
        <form className='form-search' method='POST'>
          <div className='label-search'>
          <h3>meat</h3>
            <input className='input-search' type='checkbox' name='pork' value='pork' />
            <label> Pork</label><br />
            <input className='input-search' type='checkbox' name='chicken' value='chicken' />
            <label> Chicken</label><br />
            <input className='input-search' type='checkbox' name='burguer' value='burguer' />
            <label> Hamburguer</label><br />
            <input className='input-search' type='checkbox' name='lamb' value='lamb' />
            <label> Lamb</label><br />
            <input className='input-search' type='checkbox' name='bacon' value='bacon' />
            <label> Bacon</label><br />
            <input className='input-search' type='checkbox' name='beef' value='beef' />
            <label> Beef</label><br />
          </div>
          <div className='label-search'>
          <h3>fish</h3>
            <input className='input-search' type='checkbox' name='salmon' value='salmon' />
            <label> Salmon</label><br />
            <input className='input-search' type='checkbox' name='tuna' value='tuna' />
            <label> Tuna</label><br />
            <input className='input-search' type='checkbox' name='seabass' value='seabass' />
            <label> Seabass</label><br />
            <input className='input-search' type='checkbox' name='monkfish' value='monkfish' />
            <label> Monkfish</label><br />
          </div>
          <div className='label-search'>
          <h3>vegetables</h3>
            <input className='input-search' type='checkbox' name='tomatoes' value='tomatoes' />
            <label>Tomatoes</label><br />
            <input className='input-search' type='checkbox' name='peppers' value='peppers' />
            <label> Peppers</label><br />
            <input className='input-search' type='checkbox' name='onions' value='onions' />
            <label> Onions</label><br />
            <input className='input-search' type='checkbox' name='cucumber' value='cucumber' />
            <label> Cucumber</label><br />
            <input className='input-search' type='checkbox' name='carrots' value='carrots' />
            <label> Carrots</label><br />
            <input className='input-search' type='checkbox' name='zuchinni' value='zuchini' />
            <label> Zuchini</label><br />
            <input className='input-search' type='checkbox' name='pumpkin' value='pumpkin' />
            <label> Pumpkin</label><br />
            <input className='input-search' type='checkbox' name='avocados' value='avocados' />
            <label> Avocados</label><br />
            <input className='input-search' type='checkbox' name='eggplants' value='eggplants' />
            <label> Eggplants</label><br />
            <input className='input-search' type='checkbox' name='mushrooms' value='mushrooms' />
            <label> Mushrooms</label><br />
          </div>
          <div className='label-search'> 
          <h3>pasta and grains</h3>
            <input className='input-search' type='checkbox' name='macarroni' value='macarroni' />
            <label> Macarroni</label><br />
            <input className='input-search' type='checkbox' name='spaghetti' value='spaghetti' />
            <label> Spaghetti</label><br />
            <input className='input-search' type='checkbox' name='ravioli' value='ravioli' />
            <label> raviolis</label><br />
            <input className='input-search' type='checkbox' name='noodles' value='nooddles' />
            <label> Nooddles</label><br />
            <input className='input-search' type='checkbox' name='rice' value='rice' />
            <label> Rice</label><br />
            <input className='input-search' type='checkbox' name='quinoa' value='quinoa' />
            <label> Quinoa</label><br />
          </div>
          <div className='label-search'>
            <h3>dairy</h3>
            <input className='input-search' type='checkbox' name='butter' value='butter' />
            <label htmlFor='dairy1'> Butter</label><br />
            <input className='input-search' type='checkbox' name='milk' value='milk' />
            <label htmlFor='dairy2'> Milk</label><br />
            <input className='input-search' type='checkbox' name='eggs' value='eggs' />
            <label htmlFor='dairy3'> Eggs</label><br />
            <input className='input-search' type='checkbox' name='sour cream' value='sour cream' />
            <label htmlFor='dairy4'> Sour cream</label><br />
            <input className='input-search' type='checkbox' name='coco milk' value='coco milk' />
            <label htmlFor='dairy5'> Coco milk</label><br />
            <input className='input-search' type='checkbox' name='emmentaler cheese' value='Emmentaler cheese' />
            <label htmlFor='dairy6'> Emmentaler cheese</label><br />
            <input className='input-search' type='checkbox' name='gouda cheese' value='Gouda cheese' />
            <label htmlFor='dairy7'> Gouda cheese</label><br />
            <input className='input-search' type='checkbox' name='cheddar cheese' value='Cheddar cheese' />
            <label htmlFor='dairy8'> Cheddar cheese</label><br />
          </div>
    
         <button className='submit' type='submit'>Search</button>
        </form>
      </div>
        
    
  
  

      
   </div>   
    );
  }
}

export default Searchinput;