import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

// The Read class reads in the stored movies and sends them to the movies component
export class Read extends React.Component {
  // state contains an array 'movies' which contains all the stored movies to be displayed
  state = {
    movies: []
  };

  componentDidMount() {
    axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
      .then((response) => {
        this.setState({ movies: response.data.Search })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // This function creates a new array 'mymovies' and sends it to the movies component
  render() {
    return (
      <div>
        <Movies mymovies={this.state.movies}></Movies>
      </div>
    );
  }
}
