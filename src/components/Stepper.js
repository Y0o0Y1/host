import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const steps = [
    'Registration',
    'Email ownership',
    'Contact details verification',
    'Plan selections',
    'Payment info',
    'Business Verification',
    'listing submission'
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 13.5,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#e7f0ff"
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#e7f0ff"

        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: "13px",
        border: 0,
        backgroundColor: "#e7f0ff",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
    backgroundColor: "white",
    zIndex: 1,
    color: '#2699fb',
    width: "29px",
    height: "29px",
    display: 'flex',
    padding: "0",
    border: "4px solid #2699fb",
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        color: "#2699fb",
        backgroundColor: "white"

    }),
    ...(ownerState.completed && {
        color: "#2699fb",
        backgroundColor: "white"

    }),
}));

function ColorlibStepIcon(props) {
    console.log(props)
    const { active, completed, className, error } = props;
    const icons = {
        1: <CheckCircleIcon />,
        2: <AccessTimeIcon />,
    };
    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {error ? <ErrorIcon fontSize='medium' /> :
                completed ?
                    <CheckCircleIcon fontSize='medium' /> : active ?
                        <AccessTimeIcon fontSize='medium' /> : <FiberManualRecordIcon fontSize='medium' />
            }
        </ColorlibStepIconRoot>
    );
}

export default function CustomizedStepper(props) {
    return (
        <Stepper alternativeLabel activeStep={props.activeStep} connector={<ColorlibConnector />}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}