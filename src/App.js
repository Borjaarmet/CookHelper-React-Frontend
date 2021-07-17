import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
// import Private from './pages/Private';
import Home from './pages/Home';
import Main from './pages/Main';
import Signup from './pages/Signup';
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
					<PrivateRoute path="/app" component={Main} />
					<Route path="/recipes/:recipeId/details" component= {RecipeDetail}/>
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
