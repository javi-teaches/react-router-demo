import React from 'react';
import { Redirect } from 'react-router-dom';


import UsersList from '../data/users.json';

function Users(props) {
	let id = Number(props.match.params.id);
	let user = UsersList.find(user => user.id === id);

	if (user) {
		return (
			<React.Fragment>
				<h4 className="alert alert-success">Estás viendo el perfil de: {user.name}</h4>
				<p><b>Email:</b> {user.email}</p>
				<p><b>Edad:</b> {user.age}</p>
			</React.Fragment>
		)
	}

	// return <Redirect to='/error' />
	return <Redirect to='/users?error=true' />
}

export default Users;