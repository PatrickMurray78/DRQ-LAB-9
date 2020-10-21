import React from 'react';

export class Movies extends React.Component {

    render() {
        return(
            <div>
                <h3>Hello from Movies</h3>
                {console.log(this.props.movies)}
            </div>
        );
    }
}