import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepButton from '@mui/material/StepButton';

export default function CustomStepper({ steps }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
        {steps.map((step, index) => (
          <Step key={step.id}
                sx={{
                  '& .MuiStepLabel-root .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root': {
                    color: step.color, // circle color (ACTIVE)
                    width: '1.5em',
                    height: '1.5em'
                  },
                  '& .MuiStepLabel-root .css-4ff9q7': {
                    color: step.color, // circle color (ACTIVE)
                    width: '1.5em',
                    height: '1.5em'
                  },
                  '& .css-14yr603-MuiStepContent-root': {
                    marginLeft: '1em'
                  },
                  '& .MuiStepContent-root.css-d0mviz': {
                    marginLeft: '1em'
                  },
                }}
          >
            {/* <StepLabel
              optional={
                <Typography variant="caption">{step.field}</Typography>
              }
            >
              {step.label}
            </StepLabel> */}
            <StepButton 
              color="inherit" 
              onClick={handleStep(index)}
              optional={
                <Typography variant="caption">{step.field}</Typography>
              }
            >
              {step.label}
            </StepButton>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Закончить уровень' : 'Шаг верёд'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Шаг назад
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <div>
          <Typography>Уровень окончен</Typography>
          {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Начать сначала
          </Button> */}
        </div>
      )}
    </Box>
  )
}
