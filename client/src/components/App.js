import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Navigation from './NavBar';
import Home from './Home';
import About from './About';
import Users from './Users';
import Movies from './Movies';
import NotFound from './404';

function App() {
	return (
		<div className="container">
			<Navigation/>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/users' component={Users} />
				<Route path='/movies' component={Movies} />
				<Route component={NotFound} />
			</Switch>
		</div>
  );
}

export default App;
