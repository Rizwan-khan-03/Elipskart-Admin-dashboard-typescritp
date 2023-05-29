// import React from 'react'
// import AddProduct from './AddProduct'

// function Mobile() {
//   return (
//     <div><AddProduct /></div>
//   )
// }

// export default Mobile
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddProduct from './AddProduct';
import PaymentForm from './PaymentForm';
import Review from './Review';
import axios from 'axios';
import { addMobileDetails } from '../../../App/Service/MobileService';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Product details', 'Review your Product'];



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const initialData: any = {
  isAdmin:true,
  title: '',
  desc: '',
  brand: '',
  available: false,
  img: '',
  categories: '',
  features: {
    ram: '',
    rom: '',
    screenSize: '',
    secondaryCamera: '',
    primaryCamera: '',
    batteryCapacity: '',
    warranty: '',
  },
  price: 0,
  discountPercentage: 0,
  productCode: 0,
  ratings: {
    overallRating: 0,
    totalRatings: 0,
    totalReviews: 0,
  },
}
export default function Mobile() {
  const [formData, setFormData] = useState<any>({ ...initialData });
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const handleNext = (value: any) => {
    setActiveStep(activeStep + 1);
    if (value === "Place order") {
      handleSubmit()
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddProduct 
        formData={formData} 
        setFormData={setFormData}
         setSelectedFile={setSelectedFile}
         selectedFile={selectedFile}
         />;
      case 1:
        return <Review />;
      case 2:
        return <PaymentForm />;
      default:
        throw new Error('Unknown step');
    }
  }
  React.useEffect(() => {
    console.log('selectedFile',selectedFile);
 
   return () => {
    console.log('selectedFile',selectedFile);
   }
 }, [selectedFile])
  const handleSubmit = async () => {
    // e.preventDefault();
    const formDataFormat = new FormData();
    if (selectedFile) {
      formDataFormat.append("img", selectedFile, "image.png");
    }
    // Iterate over the properties of initialData
    for (const key in formData) {
      // Check if the property is an object
      if (typeof formData[key] === 'object' && formData[key] !== null) {
        // If it is an object, iterate over its properties
        for (const subKey in formData[key]) {
          // Append each nested property to the FormData
          formDataFormat.append(`${key}.${subKey}`, formData[key][subKey]);
        }
      } 
      else {
        formDataFormat.append(key, formData[key]);
      }
    }
    console.log(JSON.stringify(Object.fromEntries(formDataFormat)));
    try {
     
      const response = await addMobileDetails("addproduct", formDataFormat)
      // const response = await axios.post('http://localhost:5000/api/product/addproduct', formData);
      console.log("response.data", response.data);
      // await setFormData({ ...formData, initialData });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add Mobile
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Product Add Successfully.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation,
              </Typography>
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={() => handleNext(activeStep === steps.length - 1 ? 'Place order' : 'Next')}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}