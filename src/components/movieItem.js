import React from 'react';
import Card from 'react-bootstrap/Card';

// This class uses the Card from bootstrap to display each movie poster, title and year.
export class MovieItem extends React.Component {

    render() {
        return(
            <div>
                <Card>
                    <Card.Header>{this.props.mymovie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.mymovie.Poster}></img>
                            <footer className="blockquote-footer">
                                {this.props.mymovie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}