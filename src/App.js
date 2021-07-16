import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Home from './pages/Home';
// import Signup from './components/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';

class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				<Navbar />
				<Switch>
					<AnonRoute exact path= "/" component= {Home}/>
					{/* <AnonRoute path="/signup" component={Signup} /> */}
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/private" component={Private} />
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
