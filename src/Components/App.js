import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import Content from './Content/Content';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route path="/" exact component={Content} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/my-projects" exact component={Projects} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
