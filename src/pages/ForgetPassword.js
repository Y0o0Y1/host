import React from 'react'
import { Typography, Container, Grid, Button, TextField, Paper } from "@mui/material"

const ForgetPassword = () => {
    return (
        <Container>
            <Paper spacing={2} sx={{
                "marginX": "15%",
                "marginY": "auto",
                "padding": "30px",
                "alignContent": "center",
                "justifyContent": "center"
            }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Typography>Please Enter Your Email to get verification Code</Typography>
                    </Grid>
                    <Grid item >
                        <TextField variant="standard" fullWidth label="Enter Your Email Here" />
                        <Button variant='contained' fullWidth sx={{
                            "margin": "20px 0"
                        }}>Get Verification Code</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default ForgetPassword
