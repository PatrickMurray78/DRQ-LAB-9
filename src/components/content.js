import React from 'react';

// The Content class is the default page that is displayed, when the website is ran
export class Content extends React.Component {

    render(){
        return (
          <div> {/*This page simply says hello world! and also displays the current time*/}
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()} PM.</h2>
          </div>
        );
    }
}