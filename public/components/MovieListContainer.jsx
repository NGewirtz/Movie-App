import React from 'react';
import MovieListItem from './MovieListItem';

class MovieListContainer extends React.Component {

  render() {
    if(!this.props.movies) {
      return (
        <ul>
          <li>No Results</li>
        </ul>
      );
    }else {
      const movieSearchResults = this.props.movies.map( movie => {
        return <MovieListItem movie={movie}
          key={movie.imdbID}
          />;
      });
      return (
        <ul>
          { movieSearchResults }
        </ul>
      );
    }    
  }
}

export default MovieListContainer;
