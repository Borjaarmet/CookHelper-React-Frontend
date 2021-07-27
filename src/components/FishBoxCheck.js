import React, { Component } from 'react'

class FishBoxCheck extends Component {
  constructor(props){
    super(props)
    this.state = {
      salmon: false,
      tuna: false,
      seabass: false,
      monkfish: false
    }
  }

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
         <input className='input-searchBox' type='checkbox' name='salmon' id="salmon" value={this.state.salmon} onChange={this.handleChange} />
            <label htmlFor="salmon"> Salmon</label><br />
            <input className='input-searchBox' type='checkbox' name='tuna' id="tuna"  value={this.state.tuna} onChange={this.handleChange}/>
            <label htmlFor="tuna"> Tuna</label><br />
            <input className='input-searchBox' type='checkbox' name='seabass' id="seabass"  value={this.state.seabass} onChange={this.handleChange}/>
            <label htmlFor="seabass"> Seabass</label><br />
            <input className='input-searchBox' type='checkbox' name='monkfish' id="monkfish"  value={this.state.monkfish} onChange={this.handleChange}/>
            <label htmlFor="monkfish"> Monkfish</label><br />
      </>
    )
  }
};

export default FishBoxCheck;
