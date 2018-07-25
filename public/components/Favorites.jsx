import React from 'react';
import MovieListContainer from './MovieListContainer'
import { makeAjaxRequest } from '../util/ajax';

class Favorites extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
    };
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentDidMount() {
    this.getFavorites();
  }

  async getFavorites() {
    const url = "/favorites";
    let movies = await makeAjaxRequest(url);
    movies = movies.map(movie => {
      return JSON.parse(Object.keys(movie));
    });
    this.setState({movies});
  }

  render() {
    return (
      <section>
        <h1>Favorites</h1>
        <MovieListContainer movies={this.state.movies}/>
      </section>
    );
  }
}

export default Favorites;
