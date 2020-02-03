import React from 'react';
import {
  TextField, Paper, Checkbox, Button,
  FormControlLabel, FormGroup
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import SplitButton from './SplitButton'

const useStyles = makeStyles(theme => ({
  form: {
    margin: 10,
  }
}));



export default function NewTask(props)
{

    const classes = useStyles();

    return (
      <Paper>
        <FormGroup className={classes.form}>
          <TextField
            id="outlined-name"
            label="New task"
            margin="normal"
            variant="outlined"
            autoComplete="off"
          />
          <FormControlLabel control={
            <Checkbox name="repeat" value="repeat" color="primary" />
            }
            label="Repeat every day"
          />
          <SplitButton />
          <Button variant="contained" color="primary" fullWidth={true}>
            Create new task
          </Button>
        </FormGroup>
        <FormGroup>
          <TextField
            id="timerPicker"
            label="Timer"
            type="time"
            defaultValue="01:00"
          />  
        </FormGroup>
      </Paper>
    );

}
//        <div className={classes.form}></div>