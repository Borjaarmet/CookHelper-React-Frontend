import React, { Component } from 'react';

import userClient from '../lib/userClient';

import { withAuth } from '../providers/AuthProvider';

import Navbar from '../components/Navbar';

 class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "loading",
      user:{},
    }
  }

  async componentDidMount(){
    console.log("compdidmount");
    console.log("userId: ",this.props.match.params.userId)

   try{
    const profile = await userClient.getUserProfile(this.props.match.params.recipeId);
      this.setState({
        status: 'loaded',
        user: profile.userProfile,
        
      })  
   }
   catch(error) {
    console.log(error)
   } 
  };

  handleChange = (event) => {
     this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {user, status} = this.state;
    return (
      <>
        <Navbar/>
         {status === 'loading' && <div>loading</div>}
         {status === 'loaded' && 
            <div className="container-profile">
              <form onSubmit={this.handleSubmit}>
                <div className="container-form">
                  <h3 >{user.username}´s profile</h3>
                  <hr/>
                  <label className='label-profile' htmlFor='name'>Username</label>
                  <input className='input-signup' type='text' name='username' id='name' value={user.username} onChange={this.handleChange} />                   
                  <label className='label-profile' htmlFor='email'>Email</label>               
                  <input className='input-signup' type='text' name='email' id='email' value={user.email} onChange={this.handleChange} />                  
                  <label className='label-profile' htmlFor='country' >Nationality</label>                    
                  <input
                    className='input-signup'
                    type='text'
                    name='nationality'
                    id='nationality'
                    value={user.nationality}
                    onChange={this.handleChange}
                  />            
                  <label className='label-profile' htmlFor='age'>Age</label>            
                  <input
                  className='input-signup'
                  type='number'
                  name='age'
                  id='age'
                  placeholder='Your age'
                  value={user.age}
                  onChange={this.handleChange}
                  />
                  <label className='label-profile' htmlFor='cookLevel'>Cook level <br /></label>
                  <select name='cookLevel' id='cookLevel' className="input-signup" value={user.cookLevel}>
                    <option value='none' onChange={this.handleChange}></option>
                    <option value='I have no idea'  onChange={this.handleChange}>I have no idea</option>
                    <option value='I defend myself'  onChange={this.handleChange}>I defend myself</option>
                    <option value='Advanced '  onChange={this.handleChange}>Advanced</option>
                    <option value='I´m a chef'  onChange={this.handleChange}>I´m a chef</option>
                  </select>
                </div>
              </form>
            </div>
         } 
      </>
    )
  };
};

export default withAuth(Profile)
