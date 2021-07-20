import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";

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
      <form onSubmit={this.handleFormSubmit}>
        <div className="container-form">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
         
        </div>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
        <div className="clearfix">
          <button type="submit" className="signupbtn" value="Signup" >Login</button>
        </div>
      </form>
    );
  }
}

export default withAuth(Signup);
