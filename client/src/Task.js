
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';
import { 
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControlLabel,
  IconButton,
  Tooltip,
  TextField,
  Button
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Timer from './Timer'
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

class Task extends React.Component
{
  static propTypes = {
    // numberOfSeconds
    timer: PropTypes.number,
    // does the task must be repeated ?
    repeat: PropTypes.bool,
  }

  state = {
    completed: false,
    text: this.props.text,
    beforeEditing: this.props.text,
  }

  f = { color:'black'};

  render()
  {
    let timer;
    if ( this.props.timer )
    {
      timer = (
        <Timer timeLeft={this.props.timer} />
      );
    }

    if ( this.props.stopWatch )
    {
      // stopWatch = <StopWatch />;
    }

    if ( this.props.notes )
    {
      //let 
    }

    return (
      <ExpansionPanel
      >

        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
           <FormControlLabel
            control={
              <Checkbox
                onClick={this.completed}
                value="checkedB"
                color="secondary"
              />
            }
            label={this.state.text}
            className={this.state.completed ? 'task_completed' : null}
            onClick={this.stopFormControlLabel}
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          <Grid container spacing={3} >

            <Grid item xs={12} md={8} lg={10}>
              <TextField
                variant="outlined"
                label="Task"
                value={this.state.text} 
                onChange={this.editText}
                fullWidth={true}
              />
            </Grid>

            <Grid item xs={6} md={2} lg={1}>
              <Button variant="contained" color="primary" onClick={this.confirmTextEdit}>Confirm</Button>
            </Grid>

            <Grid item xs={6} md={2} lg={1}>
              <Button variant="contained" color="secondary" onClick={this.cancelTextEdit}>Cancel</Button>
            </Grid>

            <Grid item xs={6} md={2} lg={1}>
              <FormControlLabel control={
                <Checkbox name="repeat" value="repeat" />
                  }
                  label="Repeat"
                  color="primary"
              />
            </Grid>

            <Grid item xs={6} md={1} lg={1}>
              <Tooltip title="Delete" placement="right">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip> 
            </Grid>

          </Grid>

          {timer}


        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  completed = (e) => {
    console.log(this.props.id);
    e.stopPropagation();
    this.setState((state) => {
      if (state.completed)
        return {completed: false};
      else
        return {completed: true};
    })
  }

  stopFormControlLabel = (e) => {
    e.preventDefault()
  }

  editText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  confirmTextEdit = () => {

    this.setState((state, props) => ({
      beforeEditing: state.text
    }));

  }

  cancelTextEdit = () => {
    this.setState((state, props) => ({
      text: state.beforeEditing
    }));
    
  }

}

export default Task;