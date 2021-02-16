import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import { Button, Link } from '@material-ui/core';
import { styles } from './SignupForm.styles';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contents/Auth';
import { Alert, AlertTitle } from '@material-ui/lab';


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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const { signup } = useAuth();
    const classes = useStyles();

   
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value ) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/');

        } catch {
            setError('Failed to create an account')

        }
    }

   
    return (
        <Container component='main' maxWidth='xs' className={classes.container}>
            <div className={classes.paper}>
                <Typography 
                    component='h1' 
                    variant='h5' 
                    className={classes.signUpHeader}>
                    Sign up
                </Typography>
                {error && <Alert severity='error'><AlertTitle>{error}</AlertTitle></Alert>}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item xs={12}>
                            <CssTextField
                                variant='outlined'
                                ref={emailRef}
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
                                ref={passwordRef}
                                name='password'
                                label='Password:'
                                type='password'
                                value={password}
                                autoComplete='current-password'
                                onChange={e => setPassword(e.target.value)}
                                className={classes.textField}
                            />
                        </Grid>
                    </Grid>
                    <Grid className={classes.buttonContainer}>
                        <Button 
                            type='submit' 
                            variant='contained' 
                            color="primary" 
                            className={classes.submit}>
                            Register
                        </Button>
                    </Grid>
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Link 
                                href="/login" 
                                variant="body2" 
                                className={classes.login}>
                                Already have an account? Log in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>

    )
}


/* <Grid item xs={12} sm={6}>
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
                       </Grid> */

/* <Grid item xs={12}>
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
                        </Grid> */
 // const [repeatPassword, setRepeatPassword] = useState('');
 // const [username, setUsername] = useState('');