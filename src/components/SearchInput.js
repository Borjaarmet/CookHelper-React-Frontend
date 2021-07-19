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
         <h3 className='label-search'> meat</h3><br />
    
          <input className='input-search' type='checkbox' id='meat1' name='meat1' value='pork' />
          <label> Pork</label><br />
          <input className='input-search' type='checkbox' id='meat2' name='meat2' value='chicken' />
          <label> Chicken</label><br />
          <input className='input-search' type='checkbox' id='meat3' name='meat3' value='burguer' />
          <label> Hamburguer</label><br />
          <input className='input-search' type='checkbox' id='meat4' name='meat4' value='lamb' />
          <label> Lamb</label><br />

          <input className='input-search' type='checkbox' id='meat5' name='meat5' value='bacon' />
          <label> Bacon</label><br />
          <input className='input-search' type='checkbox' id='meat6' name='meat6' value='beef' />
          <label> Beef</label><br />

         <h3 className='label-search'>fish</h3><br />

          <input className='input-search' type='checkbox' id='fish1' name='fish1' value='salmon' />
          <label> Salmon</label><br />
          <input className='input-search' type='checkbox' id='fish2' name='fish2' value='tuna' />
          <label> Tuna</label><br />
          <input className='input-search' type='checkbox' id='fish3' name='fish3' value='seabass' />
          <label> Seabass</label><br />
          <input className='input-search' type='checkbox' id='fish4' name='fish4' value='monkfish' />
          <label> Monkfish</label><br />
    
         <h3 className='label-search'> vegetables</h3><br />
   
          <input className='input-search' type='checkbox' id='vegetables1' name='vegetables1' value='tomatoes' />
          <label>Tomatoes</label><br />
          <input className='input-search' type='checkbox' id='vegetables2' name='vegetables2' value='peppers' />
          <label> Peppers</label><br />
          <input className='input-search' type='checkbox' id='vegetables3' name='vegetables3' value='onions' />
          <label> Onions</label><br />
          <input className='input-search' type='checkbox' id='vegetables4' name='vegetables4' value='cucumber' />
          <label> Cucumber</label><br />
          <input className='input-search' type='checkbox' id='vegetables5' name='vegetables5' value='carrots' />
          <label> Carrots</label><br />
          <input className='input-search' type='checkbox' id='vegetables6' name='vegetables6' value='zuchini' />
          <label> Zuchini</label><br />
          <input className='input-search' type='checkbox' id='vegetables7' name='vegetables7' value='pumpkin' />
          <label> Pumpkin</label><br />
          <input className='input-search' type='checkbox' id='vegetables8' name='vegetables8' value='avocados' />
          <label> Avocados</label><br />
          <input className='input-search' type='checkbox' id='vegetables9' name='vegetables9' value='eggplants' />
          <label> Eggplants</label><br />
          <input className='input-search' type='checkbox' id='vegetables10' name='vegetables10' value='emushrooms' />
          <label> Mushrooms</label><br />
    
         <h3 className='label-search'> pasta and grains</h3><br />
 
          <input className='input-search' type='checkbox' id='pasta1' name='pasta1' value='macarroni' />
          <label> Macarroni</label><br />
          <input className='input-search' type='checkbox' id='pasta2' name='pasta2' value='spaghetti' />
          <label> Spaghetti</label><br />
          <input className='input-search' type='checkbox' id='pasta3' name='pasta3' value='ravioli' />
          <label> raviolis</label><br />
          <input className='input-search' type='checkbox' id='pasta4' name='pasta4' value='nooddles' />
          <label> Nooddles</label><br />
          <input className='input-search' type='checkbox' id='pasta5' name='pasta5' value='rice' />
          <label> Rice</label><br />
          <input className='input-search' type='checkbox' id='pasta6' name='pasta6' value='quinoa' />
          <label> Quinoa</label><br />
      
         <h3 className='label-search'>dairy</h3><br />
 
          <input className='input-search' type='checkbox' id='dairy1' name='dairy1' value='butter' />
          <label htmlFor='dairy1'> Butter</label><br />
          <input className='input-search' type='checkbox' id='dairy2' name='dairy2' value='milk' />
          <label htmlFor='dairy2'> Milk</label><br />
          <input className='input-search' type='checkbox' id='dairy3' name='dairy3' value='eggs' />
          <label htmlFor='dairy3'> Eggs</label><br />
          <input className='input-search' type='checkbox' id='dairy4' name='dairy4' value='sour cream' />
          <label htmlFor='dairy4'> Sour cream</label><br />
          <input className='input-search' type='checkbox' id='dairy5' name='dairy5' value='coco milk' />
          <label htmlFor='dairy5'> Coco milk</label><br />
          <input className='input-search' type='checkbox' id='dairy6' name='dairy6' value='Emmentaler cheese' />
          <label htmlFor='dairy6'> Emmentaler cheese</label><br />
          <input className='input-search' type='checkbox' id='dairy7' name='dairy7' value='Gouda cheese' />
          <label htmlFor='dairy7'> Gouda cheese</label><br />
          <input className='input-search' type='checkbox' id='dairy8' name='dairy8' value='Cheddar cheese' />
          <label htmlFor='dairy8'> Cheddar cheese</label><br />
    
         <button className='submit' type='submit'>Search</button>
        </form>
      </div>
        
    
  
  

      
   </div>   
    );
  }
}

export default Searchinput;