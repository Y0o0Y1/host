import React, { useState } from 'react'
import {
    Typography, Container, Grid,
    Paper
} from "@mui/material"

import BusinessProfileContextProvider from "../contexts/BuisnessProfileContext"
import CustomizedStepper from "../components/Stepper"
import EmailVerification from "../components/EmailVerification"
import Feedback from '../components/Feedback'
import ContactVerification from "../components/ContactVerification"
import PaymentInformation from '../components/PaymentInformation'
import PlanSelection from '../components/PlanSelection'

const BusinessProfileVerification = () => {
    const [activeStep, setActiveStep] = useState(1)
    const renderCurrentStep = (activeStep) => {
        switch (activeStep) {
            case 0:
                return <Feedback />
            case 1:
                return <Feedback setActiveStep={setActiveStep} />
            case 2:
                return <EmailVerification setActiveStep={setActiveStep} />
            case 3:
                return <ContactVerification setActiveStep={setActiveStep} />
            case 4:
                return <PlanSelection setActiveStep={setActiveStep} />
            case 5:
                return <PaymentInformation setActiveStep={setActiveStep} />
            case 6:
                return <p>{activeStep}</p>
            default:
                break;
        }
    }
    return (
        <Container>
            <BusinessProfileContextProvider>
                <Paper elevation={0} color="white">
                    <Grid container justifyContent='center'>
                        <Grid mb={9.54} container direction="column" alignItems='center'>
                            <Grid item mb={2} mt={7}>
                                <Typography sx={{
                                    "fontWeight": "800",
                                    "fontSize": "25px",
                                    "color": "#0064fe"
                                }}
                                >
                                    Business profile verification
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{
                                    "fontFamily": "clanPro",
                                    "fontWeight": "500",
                                    "fontSize": "18px",
                                    "color": "#000"
                                }}
                                >
                                    To begin using HOST please complete the verification process below
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* 
                            Stepper Grid
                        */}
                        <Grid item xs={12}>
                            <CustomizedStepper activeStep={activeStep} />
                        </Grid>
                        <Grid item xs={12} justifyContent="center">
                            {renderCurrentStep(activeStep)}
                            {/* <Feedback setActiveStep={setActiveStep} /> */}
                        </Grid>
                    </Grid>
                </Paper>
            </BusinessProfileContextProvider>
        </Container >
    )
}

export default BusinessProfileVerification





