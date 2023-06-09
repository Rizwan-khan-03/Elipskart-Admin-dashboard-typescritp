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
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { addMobileDetails } from '../../../App/Service/MobileService';
import { useAppSelector } from '../../../App/Redux/hooks';
import { getUpdate, setUpdate } from '../../../App/Service/Service';
import { addProduct, updateProductById } from '../../../App/Service/service.commondata';
import { Dispatch } from "redux";
import { useAppDispatch } from "../../../App/Redux/hooks";
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
  userId: '',
  isAdmin: true,
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
export default function Mobile({setTableData, tableData,setOpen }: any) {
  const [formData, setFormData] = useState<any>({ ...initialData });
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedFile, setSelectedFile] = useState<any>("")
  const [file, setFile] = useState<any>("")
  const [endPoint, setEndPoint] = useState<any>("addproduct")
  const dispatch: Dispatch<any> = useAppDispatch();
  const user: any = useAppSelector(state => state?.commonDataSlice?.user)
  const product:any =getUpdate();
  const item:any=JSON.parse(product)
  const handleNext = (value: any) => {
    setActiveStep(activeStep + 1);
    if (value === "Place order") {
      handleSubmit()
    }
  };
  const handleGetProductFromLocalStorage = () => {
   if(item && typeof item==="object"){
    setEndPoint("update")
     console.log('product',JSON.parse(product));
     setFormData(item)
   }
   
  }
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
        return <Review formData={formData} />;
      case 2:
        return <PaymentForm />;
      default:
        throw new Error('Unknown step');
    }
  }
  React.useEffect(() => {
    handleGetProductFromLocalStorage()
    return () => {
      handleGetProductFromLocalStorage()
      setFormData(initialData)
      setEndPoint("update")
      // localStorage.removeItem("product")
    } 
  }, [user])
  const handleSubmit = async () => {
    // Check if all fields are not null
    for (const key in formData) {
      if (typeof formData[key] === 'object' && formData[key] !== null) {
        for (const subKey in formData[key]) {
          if (formData[key][subKey] === null) {
            console.error("Missing fields");
            return;
          }
        }
      } else {
        if (formData[key] === null) {
          console.error("Missing fields");
          return;
        }
      }
    }
    // Create FormData object
    const formDataFormat = new FormData();
    for (const key in formData) {
      if (key === "img") {
        formDataFormat.append(key, formData[key]);
      } else if (key === "userId") {
        formDataFormat.append(key, user?._id);
      }
      else {
        if (typeof formData[key] === 'object' && formData[key] !== null && formData[key] !== 'img') {
          for (const subKey in formData[key]) {
            formDataFormat.append(`${subKey}`, formData[key][subKey]);
          }
        } else {
          formDataFormat.append(key, formData[key]);
        }
      }
    }

    try {
      const id:any=(item && typeof item==="object")?item._id:'';
      if(endPoint==="update"){
        const res: any = await dispatch(updateProductById({id:id,formData}))
        console.log("update", res);
        if(res?.payload?.data?.responseCode===200){
          let responsed :any=res?.payload?.data?.payload;
          let oldObjectIndex = tableData?.findIndex((obj:any) => obj._id === responsed?._id);
          let newArray = [...tableData];
          newArray[oldObjectIndex] = responsed;
          setTableData(newArray)
          console.log("oldObjectIndex", oldObjectIndex,"newArray",newArray);
          setOpen(false)
          localStorage.removeItem("product")
        }
      }else{
        const res:any=await dispatch(addProduct(formDataFormat))
        console.log("update", res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("product")
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '15px' }}>
            <Typography component="h1" variant="h4" align="center">
              Add Mobile
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size='large'
            >
              <CloseIcon />
            </IconButton>
          </div>
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