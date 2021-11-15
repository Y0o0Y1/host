import React, { useState } from 'react'
import {
    Typography, Container, Grid,
    Button,
    TextField,
    Divider
} from "@mui/material"

import PlanCard from './PlanCard';

const PlanSelection = (props) => {
    const [selectedPlan, setSelectedPlan] = useState();

    return (
        <Container>
            <Grid mt={2} mb={2} container justifyContent="center" direction="column">
                <Grid item mb={7} xs={12} container direction="row" justifyContent="center" align="center">
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                "fontFamily": "clanProBold",
                                "fontWeight": "bold",
                                "fontSize": "22px",
                                "color": "#0064fe"
                            }}
                        >
                            Coupon</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField variant="standard" label="Enter Coupon code" fullWidth />
                    </Grid>
                </Grid>
                <Grid mb={4} item container alignContent="center" align="center" justifyContent="center" direction="row">
                    <Divider sx={{
                        "width": "15%",
                        "textAlign": "center",
                        "justifySelf": "center",
                        "alignSelf": "center",
                        "border": "1px solid #707070"

                    }} />
                    <Grid item mr={1} ml={1} alignSelf="center">
                        <Typography sx={{
                            "fontFamily": "clanPro",
                            "fontWeight": "500",
                            "fontSize": "18px",
                        }}>
                            or
                        </Typography>
                    </Grid>
                    <Divider sx={{
                        "width": "15%",
                        "textAlign": "center",
                        "justifySelf": "center",
                        "alignSelf": "center",
                        "border": "1px solid #707070"
                    }} />
                </Grid>
                <Grid item container justifyContent="center" direction="row" align="center">
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                "fontFamily": "clanProBold",
                                "fontWeight": "normal",
                                "fontSize": "22px",
                                "color": "#0064fe"
                            }}
                        >
                            Select a plan</Typography>
                    </Grid>
                    <Grid item mt={1.8} xs={12} mb={3.2}>
                        <Typography
                            sx={{
                                "fontFamily": "clanPro",
                                "fontWeight": "normal",
                                "fontSize": "16px",
                                "color": "#000"
                            }}
                        >
                            Choose based on your needs</Typography>
                    </Grid>
                    <Grid item container justifyContent="center" columnSpacing={4}>

                        <Grid item>
                            <PlanCard
                                selected={true} planName="Plan Package 1"
                                numOfBranches="1"
                                numOfUsers="2"
                                numOfAddonRequests="5"
                                planPrice="750"

                            />
                        </Grid>
                        <Grid item>
                            <PlanCard
                                selected={false}
                                planName="Plan Package 1"
                                numOfBranches="1"
                                numOfUsers="2"
                                numOfAddonRequests="5"
                                planPrice="600"
                            />
                        </Grid>
                        <Grid item>
                            <PlanCard
                                selected={false}
                                planName="Plan Package 1"
                                numOfBranches="1"
                                numOfUsers="2"
                                numOfAddonRequests="5"
                                planPrice="500"
                            />
                        </Grid>
                    </Grid>
                    <Grid item mt={4.5}>
                        <Button variant="contained" sx={{
                            "fontFamily": "clanProBold",
                            "fontWeight": "normal",
                            "fontSize": "18px",
                            "padding": "13px 58px 10px 54px",
                            "borderRadius": "7px",
                            "backgroundColor": "#0064fe",
                            "textTransform": "none",
                        }} onClick={() => props.setActiveStep((prev) => prev + 1)}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PlanSelection
