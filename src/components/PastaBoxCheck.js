import React, { Component } from 'react'

class PastaBoxCheck extends Component {
  constructor(props){
    super(props)
    this.state = {
      macarroni: false,
      spaghetti: false,
      raviolis: false,
      noodles: false,
      rice: false,
      quinoa: false,
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
         <input className='input-searchBox' type='checkbox' name='macarroni' value={this.state.macarroni} onChange={this.handleChange}/>
            <label> Macarroni</label><br />
            <input className='input-searchBox' type='checkbox' name='spaghetti' value={this.state.spaghetti} onChange={this.handleChange}/>
            <label> Spaghetti</label><br />
            <input className='input-searchBox' type='checkbox' name='ravioli' value={this.state.raviolis} onChange={this.handleChange}/>
            <label> raviolis</label><br />
            <input className='input-searchBox' type='checkbox' name='noodles' value={this.state.noodles} onChange={this.handleChange}/>
            <label> Nooddles</label><br />
            <input className='input-searchBox' type='checkbox' name='rice' value={this.state.rice} onChange={this.handleChange}/>
            <label> Rice</label><br />
            <input className='input-searchBox' type='checkbox' name='quinoa' value={this.state.quinoa} onChange={this.handleChange} />
            <label> Quinoa</label><br />
      </>
    )
  }
};

export default  PastaBoxCheck;
