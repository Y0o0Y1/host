import React from 'react';

import {
    Typography, Container, Grid,
    Button,
    TextField,
    Divider,
    Box,
    Checkbox,
    Paper,
    FormGroup,
    IconButton
} from "@mui/material";

import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PersonIcon from '@mui/icons-material/Person';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import LockIcon from '@mui/icons-material/Lock';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const PaymentInformation = (props) => {

    return (
        <Container>
            <Grid container justifyContent="center" direction="row">
                <Grid mb={3.5} item container alignContent="center" justifyItems="center" direction="column" align="center">
                    <Grid item mb={1.9}>
                        <Typography
                            sx={{
                                "fontFamily": "clanProBold",
                                "fontWeight": "normal",
                                "fontSize": "18px",
                                "color": "#0064fe"
                            }}>Payment Information</Typography>
                    </Grid>
                    <Grid item
                        sx={{
                            "fontFamily": "clanPro",
                            "fontWeight": "normal",
                            "fontSize": "16px",
                            "color": "#707070"
                        }}>
                        <Typography>Fill in your information below</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} direction="row-reverse" justifyContent="center" >
                    <Grid item container direction="row" xs={5} rowSpacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Card Number"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CreditCardTwoToneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Card Number"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <TextField
                                sx={{
                                    "width": "100%"
                                }}
                                id="input-with-icon-textfield"
                                placeholder="Expiry date MM/YY"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarTodayIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Card Number"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon />}
                                        />}
                                    label="Remember this card" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} >
                        <Paper align="center" justify="center" elevation={1} sx={{
                            "width": "353px",
                            "height": "241px",
                            "backgroundColor": "#fff"
                        }}>
                            <Grid container justifyContent="center" direction="row">
                                <Grid item xs={12}>
                                    <Box mt={1.8} justify="center" sx={{
                                        "display": "grid",
                                        "alignContent": "center",
                                        "width": "324px",
                                        "height": "60px",
                                        "backgroundColor": "#e7f0ff",
                                        "border": "1px solid #e7f0ff",
                                        "borderRadius": "6px"
                                    }}>
                                        <Typography sx={{
                                            "fontSize": "12px",
                                        }}>
                                            <IconButton>
                                                <ErrorOutlineOutlinedIcon color="primary" />
                                            </IconButton>
                                            Verify your information before processing</Typography>
                                    </Box>
                                </Grid>
                                <Grid item container direction="row" align="left" ml={3}>
                                    <Grid item container direction="row">
                                        <Grid item xs={6} alignSelf="flex-start">
                                            <Typography>
                                                Free Subscribtion
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>

                                        </Grid>
                                        <Grid item xs={3} align="flex-end" >
                                            <Typography>
                                                $0.00
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item mt={3} mb={3} container direction="row">
                                        <Grid item xs={6} alignSelf="flex-start">
                                            <Typography>
                                                Tax
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                        </Grid>
                                        <Grid item xs={3} align="flex-end" >
                                            <Typography>
                                                $0.00
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider sx={{
                                        "width": "90%",
                                        "border": "1px solid black"
                                    }} />
                                    <Grid mt={3.2} item xs={5} alignSelf="flex-start">
                                        <Typography sx={{
                                            "fontFamily": "Poppins",
                                            "fontWeight": "bold",
                                            "fontSize": "17px"
                                        }}>
                                            Total
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>

                                    </Grid>
                                    <Grid item xs={3} mt={3.2} align="flex-end" >
                                        <Typography>
                                            $0.00
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={12} mt={7.7} direction="column" justifyContent="center" alignContent="center">
                    <Grid item>
                        <Button
                            sx={{
                                "textTransform": "none"
                            }}
                            variant='contained' onClick={() => props.setActiveStep((prev) => prev + 1)}>Purchase now</Button>
                    </Grid>
                    <Grid item alignSelf="center">
                        <Button
                            sx={{
                                "textTransform": "none"
                            }}
                            variant='text' onClick={() => props.setActiveStep((prev) => prev + 1)}>Skip</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}

export default PaymentInformation;


