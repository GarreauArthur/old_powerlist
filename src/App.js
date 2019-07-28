import React from 'react';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';


function App() {
  return (
    <div className="App">
      <Timer timeLeft="20" />
      <Timer timeLeft="20" />
      <Timer timeLeft="20" />
      <Task id="1" text="Use your brain forehead" />
    </div>
  );
}

export default App;

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
      <div onClick={this.toggle}>{new Date(this.state.timeLeft * 1000).toISOString().substr(11, 8)}</div>
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


class Task extends React.Component
{

  state = {
    completed: false
  }

  render()
  {
    return (
      <div>
        <Checkbox value="this.props.id"></Checkbox>
        <input type="checkbox" name="oij" id="this.props.id" onClick={this.completed} /> 
        <div className="inline task_text ">
          <p className={this.state.completed ? 'task_completed' : null} >{this.props.text}</p>
        </div>
        <div className="inline task_options">

        </div>
      </div>

    );
  }

  completed = () => {
    console.log(this.props.id);
    this.setState((state) => {
      if (state.completed)
        return {completed: false};
      else
        return {completed: true};
    })
  }
}
