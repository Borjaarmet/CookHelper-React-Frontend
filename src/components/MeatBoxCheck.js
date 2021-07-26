import React, { Component } from 'react'

class MeatBoxCheck extends Component {
  constructor(props){
    super(props)
    this.state = {
      pork: false,
      chicken:false,
      hamburguer: false,
      lamb: false,
      bacon: false,
      beef: false,
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
        <input className='input-searchBox' type='checkbox' name='pork' value={this.state.pork} onChange={this.handleChange} />
              <label> Pork</label><br />
              <input className='input-searchBox' type='checkbox' name='chicken' value={this.state.chicken} onChange={this.handleChange} />
              <label> Chicken</label><br />
              <input className='input-searchBox' type='checkbox' name='hamburguer' value={this.state.hamburguer} onChange={this.handleChange} />
              <label> Hamburguer</label><br />
              <input className='input-searchBox' type='checkbox' name='lamb' value={this.state.lamb} onChange={this.handleChange} />
              <label> Lamb</label><br />
              <input className='input-searchBox' type='checkbox' name='bacon' value={this.state.bacon} onChange={this.handleChange} />
              <label> Bacon</label><br />
              <input className='input-searchBox' type='checkbox' name='beef' value={this.state.beef} onChange={this.handleChange} />
              <label> Beef</label><br />
      </>
    )
  }
}

export default MeatBoxCheck;
