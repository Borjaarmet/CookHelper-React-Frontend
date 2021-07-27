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
        <input className='input-searchBox' type='checkbox' name='butter' id="butter" value={this.state.butter} onChange={this.handleChange}/>
              <label htmlFor='butter'> Butter</label><br />
              <input className='input-searchBox' type='checkbox' name='milk' id="milk" value={this.state.milk} onChange={this.handleChange}/>
              <label htmlFor='milk'> Milk</label><br />
              <input className='input-searchBox' type='checkbox' name='eggs' id="eggs" value={this.state.eggs} onChange={this.handleChange}/>
              <label htmlFor='eggs'> Eggs</label><br />
              <input className='input-searchBox' type='checkbox' name='sour cream' id="sourCream" value={this.state.sourCream} onChange={this.handleChange} />
              <label htmlFor='sourCream'> Sour cream</label><br />
              <input className='input-searchBox' type='checkbox' name='coco milk' id="cocoMilk" value={this.state.cocoMilk} onChange={this.handleChange}/>
              <label htmlFor='cocoMilk'> Coco milk</label><br />
              <input className='input-searchBox' type='checkbox' name='emmentaler cheese' id="emmentalerCheese" value={this.state.emmentalerCheese} onChange={this.handleChange}/>
              <label htmlFor='emmentalerCheese'> Emmentaler cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='gouda cheese' id="goudaCheese" value={this.state.goudaCheese} onChange={this.handleChange}/>
              <label htmlFor='goudaCheese'> Gouda cheese</label><br />
              <input className='input-searchBox' type='checkbox' name='cheddar cheese' id="cheddarCheese" value={this.state.cheddarCheese} onChange={this.handleChange}/>
              <label htmlFor='cheddarCheese'> Cheddar cheese</label><br />
      </>
    )
  }
};

export default DairyBoxCheck;
