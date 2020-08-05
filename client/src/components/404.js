import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
	return (
		<React.Fragment>
			<h2 className="alert alert-danger">404 not found</h2>
			<p>No se encontró lo que buscás</p>
			<Link to='/' className="btn btn-warning">Regresar</Link>
		</React.Fragment>
	)
}
