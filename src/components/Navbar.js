import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import { FaBars } from "react-icons/fa";
import '../App.css'
import Sidebar from '../pages/Sidebar';

class Navbar extends Component {

	handleClick = () => {
		console.log("click sidebar")
	  const sidebar = document.getElementById('sidebarContainer')
		sidebar.classList.toggle('hidden')
	}

	render() {
		const { user, isLoggedIn, logout } = this.props;
		return (
			<>
				{isLoggedIn ? (
					<div className="nav">
					<div className="navContainer">
						<div className="navLogo">
						 <Link to="/app">
							<h1 className="logo" >CookHelper</h1>
						</Link>
						</div>
						<div className="navMenu">
							<div className="navItem">
						   <Link to={`/user/${user._id}/profile`}>
						    <h3 className="navLink">Profile</h3>
						   </Link>
						  </div>
								<hr/>
							<div className="navItem">
						   <Link to={`/user/favourites`}>
						    <h3 className="navLink">Favourite<br/> recipes</h3>
						   </Link>
						  </div>
								<hr/>
							<div className="navItem">
						   <Link to={`/user/create`}>
						    <h3 className="navLink">My own <br/> recipes</h3>
						   </Link>
						  </div>
							<hr/>
							<div className="navItem">
						   <Link to={`/user/createRecipe`}>
						    <h3 className="navLink">Create a <br/>recipe</h3>
						   </Link>
						  </div>
						</div>
						<div className="navBtn">
						<button className="navBtnLink"  onClick={logout}>Logout</button>
						</div>
			
						
						<span onClick={this.handleClick} className="mobileIcon"  >
							<FaBars/>
						</span>
						
						
					</div>
					<div id="sidebarContainer" className="hidden">
						<Sidebar/>
					</div>
					</div>
				) : (
					<div className="nav">
					<div className="navContainer">
						<div className="navLogo">
					  <Link to="/">
							<h3 className="logo" >CookHelper</h3>
						</Link>
						</div>
						
						<div className="navBtn">
							<div >
								<Link to="/login">
									<button className="navBtnLinkLogin">Login</button>
								</Link>
							</div>
							
						<span onClick={this.handleClick} className="mobileIcon"  >
							<FaBars/>
						</span>
						</div>	
					</div>
					<div id="sidebarContainer" className="hidden">
						<Sidebar/>
					</div>
					</div>
				)}
			</>
		);
	}
}

export default withAuth(Navbar);
