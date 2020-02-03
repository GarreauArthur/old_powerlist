import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import ResponsiveDrawer from './ResponsiveDrawer'
import Task from './Task'
import NewTask from './NewTask'
import { Restaurant } from '@material-ui/icons';

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
  const [rdnData, setRdnData] = useState('no data');


  async function fetchData() {
    const res = await fetch("/api/hello");
    res
      .json()
      .then(res => setRdnData(res.express))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  });
  
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.toolbar} >
        <Task text="joij foiajepfi ajeopifj oiajepofi jaoiejf oiajpeifj apeoifj paiejf paioejf paoiejf poaijefoija eifj ijoij" timer={69}></Task>
        <Task text="joij foiajepfi ajeopifj oiajepofi jaoiejf oiajpeifj apeoifj paiejf paioejf paoiejf poaijefoija eifj ijoij"></Task>
        <Task text={rdnData} />
        <NewTask></NewTask>  
      </div>
    </ThemeProvider>
  );

}

export default App;
