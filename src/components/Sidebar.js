import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from '../providers/AuthProvider';

class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
    }
  }

 	render() {
		const { user, isLoggedIn, logout } = this.props;
    // const { visible } = this.state
		return (
			<>
				{isLoggedIn ? (
					
					<div  className="sidebarContainer hidden">
						
						<div className="sidebarMenu">
							<div className="sidebarItem">
						   <Link to={`/user/${user._id}/profile`}>
						    <p className="sidebarLink">Profile</p>
						   </Link>
						  </div>
							<div className="sidebarItem">
						   <Link to={`/user/favourites`}>
						    <p className="sidebarLink">FavList</p>
						   </Link>
						  </div>
							<div className="sidebarItem">
						   <Link to={`/user/create`}>
						    <p className="sidebarLink">CreatedList</p>
						   </Link>
						  </div>
							<div className="sidebarItem">
						   <Link to={`/user/createRecipe`}>
						    <p className="sidebarLink">Create recipe</p>
						   </Link>
						  </div>
						</div>
						<div className="navBtn">
						<button className="navBtnLink"  onClick={logout}>Logout</button>
						</div>
						
					</div>
					
				) : (
					
					<div id="sidebarContainer" className="sidebarContainer hidden">
						
						<div className="sidebarMenu">
							<div className="sidebarItem">
								<Link to="/login">
									<i className="sidebarLink">About us</i>
								</Link>
							</div>
							<div className="sidebarItem">
								<Link  to="/login">
									<i className="sidebarLink">Some recipes</i>
								</Link>
							</div>
						</div>
						<div className="sidebarBtn">
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
							
						</div>	
					</div>
					
				)}
			</>
		);
	}
  
};

export default withAuth(Sidebar);
