import React, { Component } from 'react';

class Movies extends Component {
	constructor () {
		super();
		this.state = {
			movies: null
		}
	}

	componentDidMount () {
		fetch('/api/v1/movies')
			.then(response => response.json())
			.then(info => {
				let newMovies = info.data
				this.setState(prevState => {
					return { movies: newMovies }
				})
			})
			.catch(error => console.log(error))
	}

	render () {
		let { movies } = this.state;
		return (
			<React.Fragment>
				<h2>Movies</h2>
				<ul>
					{ movies && movies.map((movie, i) => <li key={i}> {movie.title} </li>) }
				</ul>
			</React.Fragment>
		)
	}
}

export default Movies;