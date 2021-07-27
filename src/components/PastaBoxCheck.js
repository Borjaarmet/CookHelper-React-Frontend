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
         <input className='input-searchBox' type='checkbox' name='macarroni' id="macarroni" value={this.state.macarroni} onChange={this.handleChange}/>
            <label htmlFor="macarroni"> Macarroni</label><br />
            <input className='input-searchBox' type='checkbox' name='spaghetti' id="spaghetti"  value={this.state.spaghetti} onChange={this.handleChange}/>
            <label htmlFor="spaghetti"> Spaghetti</label><br />
            <input className='input-searchBox' type='checkbox' name='ravioli' id="raviolis" value={this.state.raviolis} onChange={this.handleChange}/>
            <label htmlFor="raviolis"> raviolis</label><br />
            <input className='input-searchBox' type='checkbox' name='noodles' id="noodles" value={this.state.noodles} onChange={this.handleChange}/>
            <label htmlFor="noodles"> Nooddles</label><br />
            <input className='input-searchBox' type='checkbox' name='rice' id="rice" value={this.state.rice} onChange={this.handleChange}/>
            <label htmlFor="rice"> Rice</label><br />
            <input className='input-searchBox' type='checkbox' name='quinoa' id="quinoa" value={this.state.quinoa} onChange={this.handleChange} />
            <label htmlFor="quinoa"> Quinoa</label><br />
      </>
    )
  }
};

export default  PastaBoxCheck;
