import React from 'react';
import { handleAddToFavorites } from '../util/ajax';

class MovieListItem extends React.Component {

  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    const movie = this.props.movie;
    const noImg = "https://screenshotlayer.com/images/assets/placeholder.png";
    const poster = movie.Poster === "N/A" ? noImg : movie.Poster;
    return (
      <li>
        <h3 onClick={this.toggleExpanded}>{movie.Title}</h3>
        { this.state.expanded && <h4>{movie.Year}</h4> }
        { this.state.expanded && <img src={poster}/> }
        { window.location.hash !== "#/favorites" &&
          <button
            onClick={() => handleAddToFavorites(movie)}>Add To Favorites
          </button>
        }
      </li>
    );
  }
}

export default MovieListItem;
