import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

// The Read class reads in the stored movies and sends them to the movies component
export class Read extends React.Component {

  constructor() {
    super();

    this.ReloadData = this.ReloadData.bind(this);
  }

  // state contains an ampty array 'movies' which will contain all the stored movies to be displayed
  state = {
    movies: []
  };

  // This function uses axios which is a promise based HTTP client
  // We then use it to create a lifecycle hook that returns the JSON data
  componentDidMount() {
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  ReloadData() {
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // This function creates a new array 'mymovies' and sends it to the movies component
  render() {
    return (
      <div>
        <Movies mymovies={this.state.movies} ReloadData={this.ReloadData}></Movies>
      </div>
    );
  }
}
