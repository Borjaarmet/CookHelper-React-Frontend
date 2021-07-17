import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { withAuth } from '../providers/AuthProvider';
import SearchInput from '../components/SearchInput';

class Private extends Component {
	state = {
		searchValue: "",
	}

	render() {
		 const { user } = this.props
		return (
			<div>
				<Navbar/>
				<h1>Welcome {user.username}</h1>
				 <SearchInput/>
				<button>Submit</button>
				<div>
					<h1>Profile</h1>
				</div>
			</div>
		);
	}
}

export default withAuth(Private) ;
