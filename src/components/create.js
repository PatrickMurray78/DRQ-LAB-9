import React from 'react';
import axios from 'axios';

// The Create class will be used to create new movie entries
export class Create extends React.Component {
  constructor() {
    super();

    // Bind new data to corresponding variables
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);

    this.state = {
      Title: '',
      Year: '',
      Poster: ''
    }
  }

  // When title is changed, set the states title to the new one
  onChangeTitle(e) {
    this.setState({
      Title: e.target.value
    });
  }

  // When Year is changed, set the states year to the new one
  onChangeYear(e) {
    this.setState({
      Year: e.target.value
    });
  }

  // When Poster is changed, set the states poster to the new one
  onChangePoster(e) {
    this.setState({
      Poster: e.target.value
    });
  }

  // When form is submitted, alert the user with the new movie details
  onSubmit(e) {
    e.preventDefault();
    alert("Movie: " + this.state.Title + " "
      + this.state.Year + " " +
      this.state.Poster);

      const newMovie = {
        title: this.state.Title,
        year: this.state.Year,
        poster: this.state.Poster
      }

      axios.post('http://localhost:4000/api/movies', newMovie)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Inside this render() function we create a form. This form has
  // three input boxes for the title, year and poster. There is also
  // a submit button at the bottom. Once clicked the information is output
  // to screen.
  render() {
    return (
      <div className='App'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Add Movie Title: </label>
            <input type='text'
              className='form-control'
              value={this.state.Title}
              onChange={this.onChangeTitle}></input>
          </div>
          <div className='form-group'>
            <label>Add Movie Year: </label>
            <input type='text'
              className='form-control'
              value={this.state.Year}
              onChange={this.onChangeYear}></input>
          </div>
          <div className='form-group'>
            <label>Movie Poster: </label>
            <textarea type='text'
              className='form-control'
              value={this.state.Poster}
              onChange={this.onChangePoster}></textarea>
          </div>
          <div className='form-group'>
            <input type='submit'
              value='Add Movie'
              className='btn btn-primary'></input>
          </div>
        </form>
      </div>
    );
  }
}
