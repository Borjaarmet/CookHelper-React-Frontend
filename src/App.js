// import dependencies
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

// import pages
import Home from './pages/Home';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RecipeDetail from './pages/RecipeDetails';
import CreateRecipe from './pages/CreateRecipe';
import FavList from './pages/FavList';
import CreateList from './pages/CreateList';

// import provider
import { withAuth } from './providers/AuthProvider';

// import assets
import './App.css'

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
					<PrivateRoute path="/user/:userId/profile" component={Profile}/>
					<PrivateRoute path="/user/favourites" component={FavList}/>
					<PrivateRoute path="/user/create" component={CreateList}/>
					<PrivateRoute path="/user/createRecipe" component={CreateRecipe}/>

					<Route path="/recipes/:recipeId/details" component= {RecipeDetail}/>
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
