import React, { Component } from 'react';
import userClient from '../lib/userClient'
import { withAuth } from '../providers/AuthProvider';

 class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "loading",
      user:undefined,
    }
  }

  async componentDidMount(){
    console.log("compdidmount");
    console.log(this.props.match.params.userId)

   try{
    const profile = await userClient.getUserProfile(this.props.match.params.recipeId);
      console.log("user: ",profile)
      this.setState({
        status: 'loaded',
        user: profile.user,
      })  
   }
   catch{
    console.log("eerror")
   } 
  };

  render() {
    console.log("render user", this.state.user)
    const {user, status} = this.state;
    return (
      <>
        <h1>profile</h1>
        <div>
         {status === 'loading' && <div>loading</div>}
         {status === 'loaded' && 
    <div className='profile-form'>
     <form >
      <label className='label-profile' htmlFor='name'>Username</label>
      <br />
      <input className='input-profile' type='text' name='username' id='name' value={user.username} />
      <br />
      <label className='label-profile' htmlFor='email'>Email</label>
      <br />
      <input className='input-profile' type='text' name='email' id='email' value={user.email} />
      <br />
      <label className='label-profile' htmlFor='country'>Nationality</label>
      <br />
      <input
        className='input-profile'
        type='text'
        name='nationality'
        id='nationality'
        value={user.nationality}
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
      />

      <label className='label-profile' htmlFor='cookLevel'>Cook level <br />{user.cookLevel}</label>
      <br />

      <select name='cookLevel' id='cookLevel'>
        <option value='none' selected></option>
        <option value='I have no idea'>I have no idea</option>
        <option value='I defend myself'>I defend myself</option>
        <option value='Advanced'>Advanced</option>
        <option value='I´m a chef'>I´m a chef</option>
      </select>

      <label className='label-profile' htmlFor='favourites'>Favourite recipes</label>
      <br />
      <button className='submit' type='submit'>Save Changes</button>

    </form>

  </div>
         }
        </div>
      </>
    )
  }
};

export default withAuth(Profile)
