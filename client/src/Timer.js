import React from 'react';
import {Button} from '@material-ui/core'

class Timer extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { 
      timeLeft: props.timeLeft, // in seconds
      isOn: false
    };
    // binding is necessary to make `this` work in the callback
    this.toggle = this.toggle.bind(this);
  }


  render()
  {
    return (
      <div>
        <Button onClick={this.toggle} variant="contained" color={ (this.state.isOn) ? "secondary" : "primary" }>
          {new Date(this.state.timeLeft * 1000).toISOString().substr(11, 8) } { (this.state.isOn) ? "Stop" : "Start" }
        </Button>
      </div>
    );
  }

  /**
   * Start the timer
   */
  start()
  {
    this.timerInterval = setInterval(
      () => this.tick(),
      1000
    );
    this.setState({isOn: true});
  }

  /**
   * To stop the timer
   */
  stop()
  {
    clearInterval(this.timerInterval);
    this.setState({isOn: false});
    // update database ? with new value
  }

  /**
   * Update the timeLeft
   */
  tick()
  {
    this.setState( (state, props) =>  
      {
        var time_left = state.timeLeft - 1;
        if ( time_left === 0 )
        {
          clearInterval(this.timerInterval);
          return {timeLeft: 0, isOn: false};
        }
        return {timeLeft: time_left};
      }
    );
  }

  /**
   * handle event onclick and toggle the timer
   */
  toggle()
  {
    if ( this.state.isOn )
    {
      this.stop();
    }
    else if ( this.state.timeLeft > 0 )
    {
      this.start();
    }
  }

}

export default Timer;