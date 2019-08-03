import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import ResponsiveDrawer from './ResponsiveDrawer'
import Task from './Task'
import NewTask from './NewTask'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
}))

function App() {

  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.toolbar} >
        <Task text="joij foiajepfi ajeopifj oiajepofi jaoiejf oiajpeifj apeoifj paiejf paioejf paoiejf poaijefoija eifj ijoij" timer={69}></Task>
        <Task text="joij foiajepfi ajeopifj oiajepofi jaoiejf oiajpeifj apeoifj paiejf paioejf paoiejf poaijefoija eifj ijoij"></Task>
        <Task text="joij foiajepfi ajeopifj oiajepofi jaoiejf oiajpeifj apeoifj paiejf paioejf paoiejf poaijefoija eifj ijoij"></Task>
        <NewTask></NewTask>  
      </div>
    </ThemeProvider>
  );

}

export default App;
