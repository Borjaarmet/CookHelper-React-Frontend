import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import apiClient from "../lib/apiClient";
import Navbar from "../components/Navbar";


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount = () => {
    apiClient.login(this.state.username).then((user) => {
     console.log(user)
      // this.setState({
      //   username: user,
      //   password: user
      // })
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    try {
      this.props.login({
        username, 
        password
      })
    } catch (error){
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
    const { username, password } = this.state;
    return (
      <>
      <Navbar/>
        <form onSubmit={this.handleFormSubmit}>
          <div className="container-form">
            <h1>Login</h1>
            <p>Please fill in this form to login.</p>
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
          <div className="form-btn">
            <button type="submit" className="signupbtn" value="Login">Login</button>
          </div>
          </div>
        </form>
      </>
    );
  }
}

export default withAuth(Login);
