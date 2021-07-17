import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import apiClient from "../lib/apiClient";


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
      <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default withAuth(Login);
