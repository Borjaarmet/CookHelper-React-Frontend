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

	closeSidebar = () => {
		console.log("click sidebar")
	  const sidebar = document.getElementById('sidebarContainer')
		sidebar.classList.add('hidden')
	}

 	render() {
		const { user, isLoggedIn, logout } = this.props;
    // const { visible } = this.state
		return (
			< >
				{isLoggedIn ? (
					
					<div className="sidebarContainer">
						<div>
						<i onClick={this.closeSidebar} className="far fa-window-close"></i>
						</div>
						<div className="sidebarMenu">
							<div className="sidebarItem">
						   <Link to={`/user/${user._id}/profile`}>
						    <p className="sidebarLink">Profile</p>
						   </Link>
						  </div>
							<hr className="hrSidebar"/>
							<div className="sidebarItem">
						   <Link to={`/user/favourites`}>
						    <p className="sidebarLink">Favourite list</p>
						   </Link>
						  </div>
							<hr className="hrSidebar"/>
							<div className="sidebarItem">
						   <Link to={`/user/create`}>
						    <p className="sidebarLink">My own recipes</p>
						   </Link>
						  </div>
							<hr className="hrSidebar"/>
							<div className="sidebarItem">
						   <Link to={`/user/createRecipe`}>
						    <p className="sidebarLink">Create  a recipe</p>
						   </Link>
						  </div>
						</div>
						<div className="sidebarBtn">
						<button className="navBtnLink" onClick={logout}>Logout</button>
						</div>
						
					</div>
					
				) : (
					
					<div className="sidebarContainer">
						<div>
							<i onClick={this.closeSidebar} className="far fa-window-close"></i>
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
