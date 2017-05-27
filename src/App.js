import React, { Component } from 'react';
import './App.css';
import BeerForm from './components/form';
import BeerResults from './components/beer-results';
import fetch from 'node-fetch';

const heading = 'Awesome beers';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2></h2>
        </div>
        <BeerForm />
        <BeerResults heading={heading} content={'content'}/>
      </div>
    );
  }
}

export default App;