import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
// import Private from './pages/Private';
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';

import RecipeDetail from './pages/RecipeDetails';

class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				
				<Switch>
					<AnonRoute exact path= "/" component= {Home}/>
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/app" component={Home} />
					<Route path="/recipes/details" component= {RecipeDetail}/>
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
