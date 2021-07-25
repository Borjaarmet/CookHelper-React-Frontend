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
  
  handleSubmitCheckBox = (event) => {
    event.preventDefault()
     console.log("click submit: ",this.props.value)
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
              <input className='input-searchBox' type='checkbox' name='pork' value='pork' onChange={this.handleChange} />
              <label> Pork</label><br />
              <input className='input-searchBox' type='checkbox' name='chicken' value='chicken' onChange={this.handleChange} />
              <label> Chicken</label><br />
              <input className='input-searchBox' type='checkbox' name='burguer' value='burguer' onChange={this.handleChange} />
              <label> Hamburguer</label><br />
              <input className='input-searchBox' type='checkbox' name='lamb' value='lamb' onChange={this.handleChange} />
              <label> Lamb</label><br />
              <input className='input-searchBox' type='checkbox' name='bacon' value='bacon' onChange={this.handleChange} />
              <label> Bacon</label><br />
              <input className='input-searchBox' type='checkbox' name='beef' value='beef' onChange={this.handleChange} />
              <label> Beef</label><br />
              </div>
          </div>
          <div className='searchBox'>
            <h4>fish</h4>
            <div className="searchBox-ing">
            <input className='input-searchBox' type='checkbox' name='salmon' value='salmon' onChange={this.handleChange} />
            <label> Salmon</label><br />
            <input className='input-searchBox' type='checkbox' name='tuna' value='tuna' onChange={this.handleChange}/>
            <label> Tuna</label><br />
            <input className='input-searchBox' type='checkbox' name='seabass' value='seabass' onChange={this.handleChange}/>
            <label> Seabass</label><br />
            <input className='input-searchBox' type='checkbox' name='monkfish' value='monkfish' onChange={this.handleChange}/>
            <label> Monkfish</label><br />
            </div>
          </div>
          <div className='searchBox'>
          <h4>vegetables</h4>
          <div className="searchBox-ing">
            <input className='input-searchBox' type='checkbox' name='tomatoes' value='tomatoes' onChange={this.handleChange}/>
            <label>Tomatoes</label><br />
            <input className='input-searchBox' type='checkbox' name='peppers' value='peppers' onChange={this.handleChange}/>
            <label> Peppers</label><br />
            <input className='input-searchBox' type='checkbox' name='onions' value='onions' onChange={this.handleChange}/>
            <label> Onions</label><br />
            <input className='input-searchBox' type='checkbox' name='cucumber' value='cucumber' onChange={this.handleChange}/>
            <label> Cucumber</label><br />
            <input className='input-searchBox' type='checkbox' name='carrots' value='carrots' onChange={this.handleChange}/>
            <label> Carrots</label><br />
            <input className='input-searchBox' type='checkbox' name='zuchinni' value='zuchini' onChange={this.handleChange}/>
            <label> Zuchini</label><br />
            <input className='input-searchBox' type='checkbox' name='pumpkin' value='pumpkin' onChange={this.handleChange}/>
            <label> Pumpkin</label><br />
            <input className='input-searchBox' type='checkbox' name='avocados' value='avocados' onChange={this.handleChange}/>
            <label> Avocados</label><br />
            <input className='input-searchBox' type='checkbox' name='eggplants' value='eggplants' onChange={this.handleChange}/>
            <label> Eggplants</label><br />
            <input className='input-searchBox' type='checkbox' name='mushrooms' value='mushrooms' onChange={this.handleChange}/>
            <label> Mushrooms</label><br />
            </div>
          </div>
          <div className='searchBox'> 
          <h4>pasta and grains</h4>
          <div className="searchBox-ing">
            <input className='input-searchBox' type='checkbox' name='macarroni' value='macarroni' onChange={this.handleChange}/>
            <label> Macarroni</label><br />
            <input className='input-searchBox' type='checkbox' name='spaghetti' value='spaghetti' onChange={this.handleChange}/>
            <label> Spaghetti</label><br />
            <input className='input-searchBox' type='checkbox' name='ravioli' value='ravioli' onChange={this.handleChange}/>
            <label> raviolis</label><br />
            <input className='input-searchBox' type='checkbox' name='noodles' value='nooddles' onChange={this.handleChange}/>
            <label> Nooddles</label><br />
            <input className='input-searchBox' type='checkbox' name='rice' value='rice' onChange={this.handleChange}/>
            <label> Rice</label><br />
            <input className='input-searchBox' type='checkbox' name='quinoa' value='quinoa' onChange={this.handleChange} />
            <label> Quinoa</label><br />
            </div>
          </div>
          <div className='searchBox'>
            <h4>dairy</h4>
            <div className="searchBox-ing">
              <input className='input-searchBox' type='checkbox' name='butter' value='butter' onChange={this.handleChange}/>
              <label htmlFor='dairy1'> Butter</label><br />
              <input className='input-searchBox' type='checkbox' name='milk' value='milk' onChange={this.handleChange}/>
              <label htmlFor='dairy2'> Milk</label><br />
              <input className='input-searchBox' type='checkbox' name='eggs' value='eggs' onChange={this.handleChange}/>
              <label htmlFor='dairy3'> Eggs</label><br />
              <input className='input-searchBox' type='checkbox' name='sour cream' value='sour cream' onChange={this.handleChange} />
              <label htmlFor='dairy4'> Sour cream</label><br />
              <input className='input-searchBox' type='checkbox' name='coco milk' value='coco milk' onChange={this.handleChange}/>
              <label htmlFor='dairy5'> Coco milk</label><br />
              <input className='input-searchBox' type='checkbox' name='emmentaler cheese' value='Emmentaler cheese' onChange={this.handleChange}/>
              <label htmlFor='dairy6'> Emmentaler cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='gouda cheese' value='Gouda cheese' onChange={this.handleChange}/>
              <label htmlFor='dairy7'> Gouda cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='cheddar cheese' value='Cheddar cheese' onChange={this.handleChange}/>
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