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
         <input className='input-searchBox' type='checkbox' name='salmon' value={this.state.salmon} onChange={this.handleChange} />
            <label> Salmon</label><br />
            <input className='input-searchBox' type='checkbox' name='tuna' value={this.state.tuna} onChange={this.handleChange}/>
            <label> Tuna</label><br />
            <input className='input-searchBox' type='checkbox' name='seabass' value={this.state.seabass} onChange={this.handleChange}/>
            <label> Seabass</label><br />
            <input className='input-searchBox' type='checkbox' name='monkfish' value={this.state.monkfish} onChange={this.handleChange}/>
            <label> Monkfish</label><br />
      </>
    )
  }
};

export default FishBoxCheck;
