import React from 'react'
import { Typography, Container, Divider, Grid, FormControlLabel, FormGroup, Button, Checkbox, TextField, Paper } from "@mui/material"
import { useHistory } from "react-router-dom";


const Login = () => {
    const history = useHistory();
    const handleForgetPassword = () => {
        history.push("/forget-password")
    }

    return (
        <Container >
            <Paper elevation={0} sx={{
                "marginX": "10%",
                "marginY": "auto",
                "max-width": "max-content",
                "alignContent": "center",
                "justifyContent": "center",
                "justifyItems": "center",
            }}>
                <Container>
                    <Grid container
                        justifyContent="center"
                        alignItems="center"
                        justifyItems="center"
                        alignContent="center"
                        direction="row"
                        sx={{
                            "padding": "5%"
                        }}
                    >
                        <Grid item md={12} xs={12} justifySelf="center" align="center" alignSelf="center">
                            <Typography mb={3} variant='h5'
                                align="center"
                                sx={{
                                    "fontFamily": "ClanProBold",
                                    "fontSize": "22px",
                                    "fontWeight": "bold",
                                    "fontStretch": "normal",
                                    "fontStyle": "normal",
                                    "lineHeight": "normal",
                                    "letterSpacing": "normal",
                                    "color": "#000"
                                }}>
                                Welcome Back! </Typography>
                            <Typography nowrap variant='h4' sx={{
                                "height": "18px",
                                "fontFamily": "ClanPro",
                                "fontSize": "18px",
                                "fontWeight": "500",
                                "fontStretch": "normal",
                                "fontStyle": "normal",
                                "lineHeight": "normal",
                                "letterSpacing": "normal",
                                "color": "#000"
                            }} >Sign in to your account To continue</Typography>
                        </Grid>
                        <Grid mt={7.6} item xs={9}>
                            <TextField label='Email address' variant="standard" fullWidth />
                        </Grid>
                        <Grid mt={5} item xs={9}>
                            <TextField label="Password" type="password" variant="standard" fullWidth />
                        </Grid>
                        <Grid item container direction="column" xs={9}>
                            <Grid mt={2} mb={2} item alignSelf="flex-start">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Remember Me" />
                                </FormGroup>
                            </Grid>
                            <Grid mb={3} item xs={9}>
                                <Button sx={{
                                    "textTransform": "none"
                                }} variant='contained' fullWidth mt={3.3}>Sign In</Button>
                                <Button sx={{
                                    "textTransform": "none"
                                }} variant='text' onClick={handleForgetPassword} fullWidth>Forget Password?</Button>
                            </Grid>
                            <Grid item align="center">
                                <Divider sx={{
                                    "width": "75%",
                                    "textAlign": "center",
                                    "justifySelf": "center"
                                }} />
                            </Grid>
                            <Grid mt={2} item justifyContent='center' xs={10}>
                                <Typography sx={{
                                    "fontFamily": "ClanPro",
                                    "fontSize": "15px",
                                    "fontWeight": "500",
                                    "fontStretch": "normal",
                                    "fontStyle": "normal",
                                    "lineHeight": "normal",
                                    "letterSpacing": "normal",
                                    "color": "#707070"
                                }} mb={1} mt={1} textAlign="center">If You Don`t have account please </Typography>
                                <Button
                                    sx={{
                                        "textTransform": "none"
                                    }}
                                    variant='outlined' onClick={() => history.push("/sign-up")} fullWidth>Sign up</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Container >
    )
}
export default Login
