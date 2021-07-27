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
         <input className='input-searchBox' type='checkbox' name='tomatoes' id="tomatoes" value={this.state.tomatoes} onChange={this.handleChange}/>
            <label htmlFor="tomatoes">Tomatoes</label><br />
            <input className='input-searchBox' type='checkbox' name='peppers' id="peppers" value={this.state.peppers} onChange={this.handleChange}/>
            <label htmlFor="peppers"> Peppers</label><br />
            <input className='input-searchBox' type='checkbox' name='onions' id="onions" value={this.state.onions} onChange={this.handleChange}/>
            <label htmlFor="onions"> Onions</label><br />
            <input className='input-searchBox' type='checkbox' name='cucumber' id="cucumber" value={this.state.cucumber} onChange={this.handleChange}/>
            <label htmlFor="cucumber"> Cucumber</label><br />
            <input className='input-searchBox' type='checkbox' name='carrots' id="carrots" value={this.state.carrots} onChange={this.handleChange}/>
            <label htmlFor="carrots"> Carrots</label><br />
            <input className='input-searchBox' type='checkbox' name='zuchinni' id="zuchini" value={this.state.zuchini} onChange={this.handleChange}/>
            <label htmlFor="zuchini"> Zuchini</label><br />
            <input className='input-searchBox' type='checkbox' name='pumpkin' id="pumpkin" value={this.state.pumpkin} onChange={this.handleChange}/>
            <label htmlFor="pumpkin"> Pumpkin</label><br />
            <input className='input-searchBox' type='checkbox' name='avocados' id="avocados" value={this.state.avocados} onChange={this.handleChange}/>
            <label htmlFor="avocados"> Avocados</label><br />
            <input className='input-searchBox' type='checkbox' name='eggplants' id="eggplants" value={this.state.eggplants} onChange={this.handleChange}/>
            <label htmlFor="eggplants"> Eggplants</label><br />
            <input className='input-searchBox' type='checkbox' name='mushrooms' id="mushrooms" value={this.state.mushrooms} onChange={this.handleChange}/>
            <label htmlFor="mushrooms"> Mushrooms</label><br />
      </>
    )
  }
};

export default VegBoxCheck;
