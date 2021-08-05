import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";
import Navbar from '../components/Navbar'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
    username: "",
    password: "",
    email:"",
  };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, email } = this.state;
    try {
      this.props.signup({ username, password, email });
    } catch (error) {
      console.log(error);
    } finally {
      this.props.history.push('/app');
    }
  };
  

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, email } = this.state;
    return ( 
      <>
      <Navbar/>
      <div className="container-login">
        <form onSubmit={this.handleFormSubmit}>
          <div className="container-form">
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <label>Username</label>
            <input
            className="input-signup"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
             className="input-signup"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <label>Email</label>
            <input
             className="input-signup"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          <p>
            Already have account?
            <Link to={"/login"}> Login</Link>
          </p>
          <div className="clearfix">
            <button type="submit" className="signupbtn" value="Signup" >Sign up</button>
          </div>
          </div>
        </form>
        </div>
      </>
    );
  }
}

export default withAuth(Signup);
