import React, { Component } from 'react'

class DairyBoxCheck extends Component {
  constructor(props){
    super(props)
    this.state = {
      butter: false,
      milk: false,
      eggs: false,
      sourCream: false,
      cocoMilk: false,
      emmentalerCheese: false,
      goudaCheese: false,
      cheddarCheese: false,
    }
  };

  handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.checked)
    this.setState({
      [event.target.name]: event.target.checked
    })
  };
  
  render() {
    return (
      <>
        <input className='input-searchBox' type='checkbox' name='butter' value={this.state.butter} onChange={this.handleChange}/>
              <label htmlFor='dairy1'> Butter</label><br />
              <input className='input-searchBox' type='checkbox' name='milk' value={this.state.milk} onChange={this.handleChange}/>
              <label htmlFor='dairy2'> Milk</label><br />
              <input className='input-searchBox' type='checkbox' name='eggs' value={this.state.eggs} onChange={this.handleChange}/>
              <label htmlFor='dairy3'> Eggs</label><br />
              <input className='input-searchBox' type='checkbox' name='sour cream' value={this.state.sourCream} onChange={this.handleChange} />
              <label htmlFor='dairy4'> Sour cream</label><br />
              <input className='input-searchBox' type='checkbox' name='coco milk' value={this.state.cocoMilk} onChange={this.handleChange}/>
              <label htmlFor='dairy5'> Coco milk</label><br />
              <input className='input-searchBox' type='checkbox' name='emmentaler cheese' value={this.state.emmentalerCheese} onChange={this.handleChange}/>
              <label htmlFor='dairy6'> Emmentaler cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='gouda cheese' value={this.state.goudaCheese} onChange={this.handleChange}/>
              <label htmlFor='dairy7'> Gouda cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='cheddar cheese' value={this.state.cheddarCheese} onChange={this.handleChange}/>
              <label htmlFor='dairy8'> Cheddar cheese</label><br />
      </>
    )
  }
};

export default DairyBoxCheck;
