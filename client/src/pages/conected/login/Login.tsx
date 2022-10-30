import { Box, Button, Container, CssBaseline, Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginDetails } from "../../../types/types";
import useStyles from './Login.styles';
export const Login = () => {

    const navigate = useNavigate();
    const classes = useStyles();
    const [login, setLogin] = useState<ILoginDetails>({ userName: "", password: "" });
    const handleSubmit = () => {
        navigate('/showDresses');
    }


    return (
        <>
            <p>HELLOW OUR DRESSES RENTAL!!!!!!!!!!!!!!!!!!!!</p>
            <div className={classes.body}>

                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box
                        sx={{
                            width: 400,
                            height: 550,
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: 5
                        }}
                        className={classes.box}
                    >
                        <Typography sx={{ marginTop: 8 }} className={classes.title} component="h1" variant="h5">
                            LOGIN
                        </Typography>
                        <Typography sx={{ marginTop: 1 }} variant="body2" className={classes.Typography}>
                            Please enter your login and password
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate >
                            <TextField
                                className={classes.textField}
                                margin="normal"
                                required
                                sx={{ input: { color: 'white' }, marginTop: 6, width: 300, }}
                                id="userName"
                                label="UserName"
                                name="userName"
                                autoComplete="userName"
                                onChange={(e) => setLogin({ ...login, userName: e.target.value })}
                            />
                            <TextField
                                className={classes.textField}
                                sx={{ input: { color: 'white' }, marginTop: 4, width: 300 }}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                            />
                            <Grid container>
                                <Grid item xs>
                                    <Link style={{ color: '#FFFFFF', textDecoration: 'none' }} href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                            <Button
                                className={classes.btn}
                                type="submit"
                                style={{}}
                                sx={{ marginTop: 6, width: 200 }}
                                fullWidth
                            >
                                Login
                            </Button>
                        </Box>
                    </Box>
                </Container>

            </div>
        </>
    )
}