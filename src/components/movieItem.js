import React from 'react';
import Card from 'react-bootstrap/Card';

// This class uses the Card from bootstrap to display each movie poster, title and year.
export class MovieItem extends React.Component {

    render() {
        return(
            <div>
                <Card>
                    <Card.Header>{this.props.mymovie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.mymovie.poster}></img>
                            <footer className="blockquote-footer">
                                {this.props.mymovie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}