import React from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';
import { useHistory } from "react-router-dom";

import { Typography, Container, Grid, Button, TextField, Paper } from "@mui/material"

const SignUp = () => {
    const history = useHistory();
    return (
        <Container>
            <Paper elevation={0} sx={{
                "marginX": "10%",
                "marginY": "auto",
                "padding": "30px",
                "textAlign": "center",
                "justifyContent": "center",
                "justifyItems": "center"
            }}>
                <Grid container align="center" justifyContent="center" spacing={2}>
                    <Grid item xs={12}>
                        <Typography mb={3} sx={{
                            "fontFamily": "ClanProBold",
                            "fontSize": "22px",
                            "fontWeight": "bold",
                            "fontStretch": "normal",
                            "fontStyle": "normal",
                            "lineHeight": "normal",
                            "letterSpacing": "normal",
                            "color": "#000"

                        }}>Get Started</Typography>
                        <Typography sx={{
                            "height": "18px",
                            "fontFamily": "ClanPro",
                            "fontSize": "18px",
                            "fontWeight": "500",
                            "fontStretch": "normal",
                            "fontStyle": "normal",
                            "lineHeight": "normal",
                            "letterSpacing": "normal",
                            "color": "#000"
                        }}>Register you restaurant for seamless reservation !</Typography>
                    </Grid>
                    <Grid item xs={9} container direction="row" spacing={1.5} >
                        <Grid item xs={12}>
                            <TextField variant="standard" label="Name" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="standard" label="Company" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="standard" label="Email address" fullWidth />
                        </Grid>
                        <Grid item container xs={12} direction="row" spacing={1} >
                            <Grid item xs={2}>
                                <MuiPhoneNumber
                                    defaultCountry={'eg'}
                                    label=" "
                                    regions={'africa'}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField type="text" variant="standard" label="Mobile number" fullWidth />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="password" variant="standard" label="Password" fullWidth />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField type="password" variant="standard" label="Confirm password" fullWidth />
                        </Grid>
                    </Grid>
                    <Grid mt={5} item xs={9} >
                        <Button sx={{
                            "textTransform": "none"
                        }}
                            variant='contained'
                            fullWidth
                            onClick={() => history.push("/business-profile-verification")}
                        >
                            Sign up</Button>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Grid item>
                            <Typography sx={{
                                "color": "#707070"
                            }}>If you already have an account, </Typography>
                        </Grid>
                        <Grid ml={0.5} item justifyContent="center">
                            <Typography color="primary" sx={{
                                "cursor": "pointer"
                            }}
                                onClick={() => history.push("/")}
                            > Sign in</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default SignUp
