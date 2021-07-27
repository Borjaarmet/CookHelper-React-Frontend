import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import { FaBars } from "react-icons/fa";
import '../App.css'
import Sidebar from './Sidebar';

class Navbar extends Component {
	

handleClick = () => {}

	render() {
		const { user, isLoggedIn, logout } = this.props;
		return (
			<>
				{isLoggedIn ? (
					<div className="nav">
					<div className="navContainer">
						<div className="navLogo">
						 <Link to="/app">
							<h3 >CookHelper</h3>
						</Link>
						</div>
						<div className="navMenu">
							<div className="navItem">
						   <Link to={`/user/${user._id}/profile`}>
						    <p className="navLink">Profile</p>
						   </Link>
						  </div>
							<div className="navItem">
						   <Link to={`/user/favourites`}>
						    <p className="navLink">FavList</p>
						   </Link>
						  </div>
							<div className="navItem">
						   <Link to={`/user/create`}>
						    <p className="navLink">CreatedList</p>
						   </Link>
						  </div>
							<div className="navItem">
						   <Link to={`/user/createRecipe`}>
						    <p className="navLink">Create recipe</p>
						   </Link>
						  </div>
						</div>
						<div className="navBtn">
						<button className="navBtnLink"  onClick={logout}>Logout</button>
						</div>
						<div className="mobileIcon"  onClick = {this.handleClick}>
							<FaBars/>
						</div>
					</div>
					<div  className="hidden">
						<Sidebar/>
					</div>
					</div>
				) : (
					<div className="nav">
					<div className="navContainer">
						<div className="navLogo">
					  <Link to="/">
							<h3 >CookHelper</h3>
						</Link>
						</div>
						
						<div className="navBtn">
							<div >
								<Link to="/login">
									<button className="navBtnLink">Login</button>
								</Link>
							</div>
							<div >
								<Link to="/signup">
					   			<button className="navBtnLink">Signup</button>
								</Link>
						  </div>
							<div className="mobileIcon">
								<button onClick = {this.handleClick}><FaBars/></button>
							
						</div>
						</div>	
					</div>
					<div className="hidden">
						<Sidebar/>
					</div>
					</div>
				)}
			</>
		);
	}
}

export default withAuth(Navbar);
