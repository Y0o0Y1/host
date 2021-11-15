import React from 'react'
import {
    Typography, Container, Grid, 
    Button,
} from "@mui/material"

const Feedback = (props) => {
    return (
        <Container >
            <Grid mt={15} mb={15} Container align="center">
                <Grid item>
                    <Typography
                        sx={{
                            "fontFamily": "clanPro",
                            "fontWeight": "bold",
                            "fontSize": "22px",
                            "color": "#0064fe"
                        }}>
                        Registration is successful
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography
                        sx={{
                            "fontFamily": "clanPro",
                            "fontWeight": "normal",
                            "fontSize": "16px",
                            "color": "#0064fe"
                        }}
                    >
                        Please verify your details to access the account further</Typography>
                </Grid>
                <Grid item mt={3.8}>
                    <Button variant="contained" sx={{
                        "fontFamily": "clanPro",
                        "fontWeight": "normal",
                        "fontSize": "16px",
                        "padding": "8px 23px 8px 23px",
                        "borderRadius": "7px",
                        "backgroundColor": "#0064fe",
                        "textTransform": "none"
                    }} onClick={() => props.setActiveStep((prev) => prev + 1)}>Continue</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Feedback
