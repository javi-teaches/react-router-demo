import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

// Data
import UsersList from '../data/users.json';

// Components
import Profile from './Profile';

function Users () {
	let query = new URLSearchParams(window.location.search);

	let error = query.get('error');

	console.log(error);

	return (
		<React.Fragment>
			<h2>Listado de Usuarios</h2>
			<ol>
				{
					UsersList.map( (user, i) => <li key={i}>{user.name} <NavLink to={`/users/${user.id}`}>ver perfil</NavLink> </li>)
				}
				<li> Desconocido <NavLink to='/users/4'>ver perfil</NavLink> </li>
			</ol>
			<hr/>
			<Switch>
				<Route path="/users/:id/:name?" component={Profile} />
			</Switch>

			{/* {error && <div className="alert alert-danger">No hay usuario con ese ID.</div>} */}
			{error !== null ? <div className="alert alert-danger">No hay usuario con ese ID.</div> : '' }
		</React.Fragment>
	)
}

export default Users;