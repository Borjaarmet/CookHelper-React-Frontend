import React, { Component } from 'react';
import userClient from '../lib/userClient'
import { withAuth } from '../providers/AuthProvider';
import Navbar from '../components/Navbar';

 class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "loading",
      user:"",
    }
  }

  async componentDidMount(){
    console.log("compdidmount");
    console.log("userId: ",this.props.match.params.userId)

   try{
    const profile = await userClient.getUserProfile(this.props.match.params.recipeId);
      console.log("user: ",profile)
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

    })
  }

  render() {
    const {user, status} = this.state;
    return (
      <>
      <Navbar/>
         {status === 'loading' && <div>loading</div>}
         {status === 'loaded' && 
         
           <div className="container-profile">
            <div className="shape">
                <div className="image"></div>
            </div>
            <h3>{user.userName}</h3>
            <div className="profile-form">
              <form>
                <label className='label-profile' htmlFor='name'>Username</label>
              <br />
              <input className='input-profile' type='text' name='username' id='name' value={user.username} onChange={this.handleChange} />
              <br />
              <label className='label-profile' htmlFor='email'>Email</label>
              <br />
              <input className='input-profile' type='text' name='email' id='email' value={user.email} onChange={this.handleChange} />
              <br />
              <label className='label-profile' htmlFor='country' >Nationality</label>
              <br />
              <input
                className='input-profile'
                type='text'
                name='nationality'
                id='nationality'
                value={user.nationality}
                onChange={this.handleChange}
              />
              <br />
              <label className='label-profile' htmlFor='age'>Age</label>
              <br />
              <input
                className='input-profile'
                type='number'
                name='age'
                id='age'
                placeholder='Your age'
                value={user.age}
                onChange={this.handleChange}
              />
              <br/>
              <label className='label-profile' htmlFor='cookLevel'>Cook level <br />{user.cookLevel}</label>
              <br />
              <select name='cookLevel' id='cookLevel' className="input-profile">
                <option value='none' selected></option>
                <option value='I have no idea'>I have no idea</option>
                <option value='I defend myself'>I defend myself</option>
                <option value='Advanced'>Advanced</option>
                <option value='I´m a chef'>I´m a chef</option>
              </select>
              <br/>
              <button className='navBtn' type='submit'>Save Changes</button>
            </form>
            </div>
          </div>
        
         } 
      </>
    )
  }
};

export default withAuth(Profile)
