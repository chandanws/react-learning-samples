import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {decrement, increment} from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and Redux</h1>
        </header>
        <div>
          <h3>Simple Counter with Redux</h3>
          <p>{this.props.counter}</p>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, {decrement,increment})(App);
