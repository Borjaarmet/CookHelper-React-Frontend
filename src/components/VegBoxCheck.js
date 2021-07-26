import React, { Component } from 'react'

class VegBoxCheck extends Component {
  constructor(props){
    super(props)
      this.state = {
        tomatoes: false,
        peppers: false,
        onions: false,
        cucumber: false,
        carrots: false,
        zuchini: false,
        pumpkin: false,
        avocados: false,
        eggplants: false,
        mushrooms: false,
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
         <input className='input-searchBox' type='checkbox' name='tomatoes' value={this.state.tomatoes} onChange={this.handleChange}/>
            <label>Tomatoes</label><br />
            <input className='input-searchBox' type='checkbox' name='peppers' value={this.state.peppers} onChange={this.handleChange}/>
            <label> Peppers</label><br />
            <input className='input-searchBox' type='checkbox' name='onions' value={this.state.onions} onChange={this.handleChange}/>
            <label> Onions</label><br />
            <input className='input-searchBox' type='checkbox' name='cucumber' value={this.state.cucumber} onChange={this.handleChange}/>
            <label> Cucumber</label><br />
            <input className='input-searchBox' type='checkbox' name='carrots' value={this.state.carrots} onChange={this.handleChange}/>
            <label> Carrots</label><br />
            <input className='input-searchBox' type='checkbox' name='zuchinni' value={this.state.zuchini} onChange={this.handleChange}/>
            <label> Zuchini</label><br />
            <input className='input-searchBox' type='checkbox' name='pumpkin' value={this.state.pumpkin} onChange={this.handleChange}/>
            <label> Pumpkin</label><br />
            <input className='input-searchBox' type='checkbox' name='avocados' value={this.state.avocados} onChange={this.handleChange}/>
            <label> Avocados</label><br />
            <input className='input-searchBox' type='checkbox' name='eggplants' value={this.state.eggplants} onChange={this.handleChange}/>
            <label> Eggplants</label><br />
            <input className='input-searchBox' type='checkbox' name='mushrooms' value={this.state.mushrooms} onChange={this.handleChange}/>
            <label> Mushrooms</label><br />
      </>
    )
  }
};

export default VegBoxCheck;
