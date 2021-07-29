import React, { Component } from 'react';


class FormInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: "loading"
    }
  }

  handleChange = (searchValue) => {
    this.props.onSearchValue(searchValue);
  };

  handleSubmitFormInput = (event) => {
    event.preventDefault()
    console.log("click submit: ",this.props.value)
    this.props.onSearchRecipe(this.props.value)
  }

  render() {
    
    return (
     <div className="recipes-container">
     
       <h3 className="title-search-input" >Search a recipe</h3>
       <div className="search-recipe">
         
        <form onSubmit={this.handleSubmitFormInput}>
        <input 
         className="input-search" 
         type="text"
         name="search" 
         onChange = {this.handleChange}
         value={this.props.value}
         placeholder="e.g. Salad"/>
         <div className="btn-search">
         <button type="submit" className="fas fa-search"></button>
         </div>
        </form>
      </div>
     
   </div>   
    );
  }
}

export default FormInput;