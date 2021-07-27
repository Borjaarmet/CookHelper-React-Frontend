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
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <>
        <input className='input-searchBox' type='checkbox' name='pork' id="pork" value={this.state.pork} onChange={this.handleChange} />
              <label htmlFor="pork"> Pork</label><br />
              <input className='input-searchBox' type='checkbox' name='chicken' id="chicken" value={this.state.chicken} onChange={this.handleChange} />
              <label htmlFor="chicken"> Chicken</label><br />
              <input className='input-searchBox' type='checkbox' name='hamburguer' id="hamburguer" value={this.state.hamburguer} onChange={this.handleChange} />
              <label htmlFor="hamburguer"> Hamburguer</label><br />
              <input className='input-searchBox' type='checkbox' name='lamb' id="lamb" value={this.state.lamb} onChange={this.handleChange} />
              <label htmlFor="lamb"> Lamb</label><br />
              <input className='input-searchBox' type='checkbox' name='bacon' id="bacon" value={this.state.bacon} onChange={this.handleChange} />
              <label htmlFor="bacon"> Bacon</label><br />
              <input className='input-searchBox' type='checkbox' name='beef' id="beef" value={this.state.beef} onChange={this.handleChange} />
              <label htmlFor="beef"> Beef</label><br />
      </>
    )
  }
}

export default MeatBoxCheck;
