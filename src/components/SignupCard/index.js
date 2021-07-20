import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div class="container">
        <div class="message signup">
          <div class="btn-wrapper">
            <button class="button" id="signup">Sign Up</button>
            <button class="button" id="login"> Login</button>
          </div>
        </div>
        <div class="form form--signup">
          <div class="form--heading">Welcome! Sign Up</div>
            <form autocomplete="off">
              <input type="text" placeholder="Name">
              <input type="email" placeholder="Email">
              <input type="password" placeholder="Password">
              <button class="button">Sign Up</button>
            </form>
        </div>
        <div class="form form--login">
          <div class="form--heading">Welcome back! </div>
            <form autocomplete="off">
              <input type="text" placeholder="Name">
              <input type="password" placeholder="Password">
              <button class="button">Login</button>
            </form>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
