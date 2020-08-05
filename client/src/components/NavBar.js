import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar () {
	return (
		<>
			<NavLink exact to='/' className="btn btn-info mx-2"> Home </NavLink>
			<NavLink to='/about' className="btn btn-info mx-2"> About </NavLink>
			<NavLink to='/users' className="btn btn-info mx-2"> Users </NavLink>
			<NavLink to='/movies' className="btn btn-info mx-2"> Movies </NavLink>
			<hr />
		</>
	)
}

export default NavBar;