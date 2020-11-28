import React from 'react';
import { MovieItem } from './movieItem';

// The Movies class uses the map function to split up 'mymovies' array into
// 'movie'. This is then returned to the movieitem component one by one.
export class Movies extends React.Component {

    render() { 
        return this.props.mymovies.map((movie) => {
            return <MovieItem mymovie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        });
    }
}