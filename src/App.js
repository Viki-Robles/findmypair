import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignupForm from './SignupForm/SignupForm';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'
import  { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 logo:{
   color:'#C0491C',
   fontSize:'20px',
   fontWeight:'bold'
 },
 logoContainer:{
   margin:'10px'
 }
}))

function App() {
  const classes = useStyles();


  return (
    <div className="App">
      <Grid className={classes.logoContainer}>
        <Typography className={classes.logo}>findmyPair</Typography>
      </Grid>
      <Router>
        <Switch>
          <Route path='/' component={SignupForm}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
