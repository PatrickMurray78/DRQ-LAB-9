import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { Create } from './components/create';
import { Edit } from './components/edit';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br/>
          <Switch>
            <Route exact path='/' component={Content}/>
            <Route path='/create' component={Create}/>
            <Route path='/read' component={Read}/>
            <Route path='/edit/:id' component={Edit}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
