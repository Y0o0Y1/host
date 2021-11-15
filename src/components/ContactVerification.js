import { useState } from 'react'
import {
    Typography, Container, Grid,
    Button,
} from "@mui/material"

import OtpInput from 'react-otp-input';


const EmailVerification = (props) => {
    const [otp, setOtp] = useState()
    return (
        <Container>
            <Grid mt={15} mb={4} container direction="row" justifyContent="center">
                <Grid item container xs={12} align="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography align="center"
                            sx={{
                                "fontFamily": "clanProBold",
                                "fontWeight": "500",
                                "fontSize": "22px",
                                "color": "#0064fe"
                            }}
                        >
                            Verify your mobile number</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    <Typography align="center"
                        sx={{
                            "fontFamily": "clanPro",
                            "fontWeight": "normal",
                            "fontSize": "16px",
                            "color": "#0064fe"
                        }}
                    >
                        Please enter the six digit code sent to your mobile all +976**********08
                    </Typography>
                </Grid>
                {/*Input Grid*/}
                <Grid mt={3} item>
                    <OtpInput
                        value={otp}
                        numInputs={6}
                        onChange={(e) => setOtp(e)}
                        inputStyle={{
                            "width": "35px",
                            "height": "35px",
                            "marginRight": "6px",
                            "border": "1px solid #0064fe",
                            "borderRadius": "4px",
                        }}
                    />
                </Grid>
                <Grid mt={3.75} item container align="center" justifyContent="center" direction="column">
                    <Grid item >
                        <Button variant="contained" sx={{
                            "fontFamily": "clanPro",
                            "fontWeight": "normal",
                            "fontSize": "18px",
                            "padding": "8px 40px 8px 40px",
                            "borderRadius": "4px",
                            "backgroundColor": "#0064fe",
                            "textTransform": "none"
                        }} onClick={() => props.setActiveStep((prev) => prev + 1)}>
                            Verify
                        </Button>
                    </Grid>
                    <Grid mt={5} item container align="center" justifyContent="center" direction="column">
                        <Grid item>
                            <Typography variant="p" sx={{
                                "fontFamily": "clanPro",
                                "fontSize": "16px",
                            }}>
                                Not recieved code?
                            </Typography>
                            <Typography variant="p" ml={1.5} sx={{
                                "fontFamily": "clanPro",
                                "fontSize": "16px",
                                "cursor": "pointer",
                                color: "#0064fe"
                            }}>
                                Resend code
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default EmailVerification
