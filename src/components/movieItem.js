import React from 'react';

export class MovieItem extends React.Component {

    render() {
        return(
            <div>
                <h3>{this.props.mymovie.Title}</h3>
                <p>{this.props.mymovie.Year}</p>
                <img src={this.props.mymovie.Poster} width="200" height="200"></img>
            </div>
        );
    }
}