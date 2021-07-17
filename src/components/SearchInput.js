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
      <form  onSubmit={this.handleSubmit}>
      <input
        type= "text"
        name="search"
        value={this.props.value}
        onChange={this.handleChange}
        placeholder="Search for a recipe"
      />
      </form>
    );
  }
}

export default Searchinput;