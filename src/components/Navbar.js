import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../App.css'

class Navbar extends Component {
	render() {
		const { user, isLoggedIn, logout } = this.props;
		return (
			<>
				{isLoggedIn ? (
					
					<div className="navContainer">
						<div className="navLogo">
						 <p> {user.username}</p>
						</div>
						<div className="navLinks">
							<div >
						   <Link to={`/user/${user._id}/profile`}>
						    <p className="navLink">Profile</p>
						   </Link>
						  </div>
							<div>
						   <Link to={`/user/favourites`}>
						    <p className="navLink">FavList</p>
						   </Link>
						  </div>
							<div>
						   <Link to={`/user/create`}>
						    <p className="navLink">Create recipe</p>
						   </Link>
						  </div>
						</div>
						<div className="navBtns">
						<button className="navBtn"  onClick={logout}>Logout</button>
						</div>
					</div>
					
				) : (
					
					<div className="navContainer">
						<div className="navLogo">
					  <Link to="/">
							<h3 >CookHelper</h3>
						</Link>
						</div>
						<div className="navLinks">
							<div >
								<Link to="/login">
									<i className="navLink">About us</i>
								</Link>
							</div>
							<div>
								<Link  to="/login">
									<i className="navLink">Some recipes</i>
								</Link>
							</div>
						</div>
						<div className="navBtns">
							<div >
								<Link to="/signup">
					   			<button className="navBtn">Login / Signup</button>
								</Link>
						  </div>
						</div>
						
					</div>
					
				)}
			</>
		);
	}
}

export default withAuth(Navbar);
