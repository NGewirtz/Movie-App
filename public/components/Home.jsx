import React from 'react';
import SearchForm from './SearchForm';
import MovieListContainer from './MovieListContainer'
import { makeAjaxRequest } from '../util/ajax';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit() {
    const key = "2320b4c3";
    const searchTerm = this.state.searchTerm;
    const url = `https://www.omdbapi.com/?apikey=${key}&s=${searchTerm}`;
    const movies = await makeAjaxRequest(url);
    this.setState({movies})
  }

  handleChange() {
    const searchTerm = document.querySelector("#search-term").value;
    this.setState({searchTerm});
  }

  render() {
    return (
      <section>
        <h1>Search for your favorite movies below!</h1>
        <SearchForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      <MovieListContainer movies={this.state.movies}/>
      </section>
    );
  }
}

export default Home;
