import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import { Button, Link } from '@material-ui/core';
import { styles } from './SignupForm.styles';

const useStyles = makeStyles(styles);
const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#C0491C',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#C0491C',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#C0491C',
        },
        '&:hover fieldset': {
          borderColor: '#C0491C',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#C0491C',
        },
      },
    },
  })(TextField);

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const classes = useStyles();

    return (
        <Container component='main' maxWidth='xs' className={classes.container}>
            <div className={classes.paper}>
               
                <Typography component='h1' variant='h5' className={classes.signUpHeader}>
                    Sign up
                </Typography>
                <form className={classes.form}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CssTextField
                                variant='outlined'
                                fullWidth
                                label='UserName:'
                                name='username'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className={classes.textField}
                                id="custom-css-outlined-input"

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CssTextField
                                variant='outlined' 
                                value={email}
                                fullWidth
                                label='Email Address:'
                                name='email'
                                autoComplete='email'
                                onChange={e => setEmail(e.target.value)}
                                className={classes.textField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CssTextField
                                variant='outlined'
                                fullWidth
                                name='password'
                                label='Password:'
                                type='password'
                                value={password}
                                autoComplete='current-password'
                                onChange={e => setPassword(e.target.value)}
                                className={classes.textField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CssTextField
                                variant='outlined'
                                required
                                fullWidth
                                name='password'
                                label='Repeat password:'
                                type='repeat password'
                                onChange={e => setRepeatPassword(e.target.value)}
                                value={repeatPassword}
                                className={classes.textField}
                            />
                        </Grid>
                    </Grid>
                    <Grid className={classes.buttonContainer}>
                    <Button type='submit' variant='contained' color="primary" className={classes.submit} value='Submit'>
                        Register
                    </Button>
                    </Grid>
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Link href="/login" variant="body2" className={classes.login}>
                                Already have an account? Log in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>{/* <Copyright /> */}</Box>
        </Container>

    )
}