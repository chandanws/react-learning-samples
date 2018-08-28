import React from 'react';
import {ThemeContext} from '../App';

class Timer extends React.Component {

  state = {
    number: 1,
    timerRunning: true
  }

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.doFoo(), 50);
  }

  doFoo() {
    this.setState({number: this.state.number + 1});
    this.forceUpdate();
  }

  stopTimer = () =>  {
    clearInterval(this.forceUpdateInterval);
    this.setState({timerRunning: false});
  }

  startTimer = () => {
    this.forceUpdateInterval = setInterval(() => this.doFoo(), 50);
    this.setState({timerRunning: true});
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  render() {
    return (
            <div>
                <header>
                <ThemeContext.Consumer>
                    {(globalValue) => <h1>Simple Timer {globalValue}</h1>}
                </ThemeContext.Consumer>
                <h3>{this.state.number}</h3>
                </header>
                {this.state.timerRunning ?<button onClick={this.stopTimer}>Stop timer</button> : <button onClick={this.startTimer}>Start timer</button> }
            </div>
    );
  }
}

export default Timer;
