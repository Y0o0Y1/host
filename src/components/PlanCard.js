import React from 'react'
import {
    Typography, Grid,
    Button, Paper,
    Checkbox,
    Box
} from "@mui/material"

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const PlanCard = ({ planName, numOfBranches, numOfUsers, numOfAddonRequests, selected, planPrice }) => {
    return (
        <Paper elevation={1} sx={{
            "width": "223px",
            "height": "284px",
            "border": selected ? "1px solid #0064fe" : "1px solid black",
            "borderRadius": "9px",
            "backgroundColor": selected ? "#e7f0ff" : ""
        }}>
            <Grid container align="center" justifyContent="center" direction="column">
                <Grid item alignSelf="flex-start" xs={12}>
                    <Checkbox checked={selected ? true : false} icon={<CheckCircleIcon />} checkedIcon={<CheckCircleIcon />} />
                </Grid>
                <Grid item>
                    <Typography
                        sx={{
                            "fontFamily": "clanProBold",
                            "fontWeight": "normal",
                            "fontSize": "16px",
                            "color": "#0064fe"
                        }}>{planName}</Typography>
                </Grid>
                <Grid item mt={3.6}>
                    <Typography sx={{
                        "fontFamily": "clanProBold",
                        "fontWeight": "bold",
                        "fontSize": "12px",
                        "color": "#000"
                    }}>
                        Plan Details
                    </Typography>
                </Grid>
                <Grid item mt={2.1} mb={2.1}>
                    <Typography sx={{
                        "fontFamily": "clanProBold",
                        "fontWeight": "normal",
                        "fontSize": "12px",
                        "color": "#000"
                    }}>
                        No of Branchs: {numOfBranches}
                    </Typography>
                </Grid>
                <Grid item mb={2.1}>
                    <Typography sx={{
                        "fontFamily": "clanProBold",
                        "fontWeight": "normal",
                        "fontSize": "12px",
                        "color": "#000"
                    }}>
                        No of Users: {numOfUsers}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{
                        "fontFamily": "clanProBold",
                        "fontWeight": "normal",
                        "fontSize": "12px",
                        "color": "#000"
                    }}>
                        No of add-on request: {numOfAddonRequests}
                    </Typography>
                </Grid>
                <Grid item mt={4} >
                    <Box sx={{
                        "width": "81px",
                        "height": "27px",
                        "backgroundColor": "#0064fe",
                        "borderRadius": "4px",
                        "alignContent": "center"
                    }}>
                        <Typography variant="span" color="white"
                            sx={{
                                "fontFamily": "clanProBold",
                                "fontWeight": "normal",
                                "fontSize": "14px",

                            }}> {planPrice} QAR</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper >
    )
}

export default PlanCard
