import React, { useEffect, useState } from 'react';
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
import Success from './Success';
import Review from './Review';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from '../../../App/Redux/hooks';
import { getUpdate } from '../../../App/Service/Service';
import { Dispatch } from "redux";
import { useAppDispatch } from "../../../App/Redux/hooks";
import { addCategoryProduct, updateCategoryProductById } from '../../../App/Service/service.category';

const steps = ['Product details', 'Review your Product'];
const defaultTheme = createTheme();
export default function Mobile({ setTableData, tableData, setOpen, category }: any) {
  const initialData: any = {
    userId: '',
    isAdmin: true,
    title: '',
    desc: '',
    brand: '',
    available: false,
    img: '',
    categories: category,
    price: 0,
    discountPercentage: 0,
    productCode: 0,
    weight: 0,

  }
  const [formData, setFormData] = useState<any>({ ...initialData });
  const [activeStep, setActiveStep] = React.useState(0);
  const [endPoint, setEndPoint] = useState<any>("addproduct")
  const [newProduct, setNewProduct] = useState<any>({})
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>('')
  const user: any = useAppSelector(state => state?.commonDataSlice?.user)
  const product: any = getUpdate();
  const item: any = JSON.parse(product)
  const dispatch: Dispatch<any> = useAppDispatch();

  const handleNext = (value: any, activeStep: number) => {
    console.log('handleNext value', value, 'activeStep', activeStep);

    setActiveStep(activeStep + 1);
    if (value === "Place order") {
      handleSubmit()
    }
  };
  const handleGetProductFromLocalStorage = () => {
    if (item && typeof item === "object") {
      setEndPoint("update")
      setFormData(item)
    }

  }
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  React.useEffect(() => {
    handleGetProductFromLocalStorage();
    return () => {
      handleGetProductFromLocalStorage()
      setFormData(initialData)
      setEndPoint("product")
    }
  }, [user])


  const handleSubmit = async () => {

    if (formData?.img == null) return;
    try {
      const id: any = (item && typeof item === "object") ? item._id : '';
      if (endPoint === "update") {
        setIsloading(true)
        const res: any = await dispatch(updateCategoryProductById({ id: id, formData }))
        if (res?.payload?.data?.responseCode === 200) {
          let responsed: any = res?.payload?.data?.payload;
          let oldObjectIndex = tableData?.findIndex((obj: any) => obj._id === responsed?._id);
          let newArray = [...tableData];
          newArray[oldObjectIndex] = responsed;
          setTableData(newArray)
          setOpen(false)
          localStorage.removeItem("product")
          setEndPoint("product")
          setIsloading(false)
        } else {
          setIsloading(false)
          setError(res.payload.response.data.message)
         
        }
      } else {
        setIsloading(true)
        const res: any = await dispatch(addCategoryProduct(formData));
        if (res?.payload?.data?.success && res?.payload?.data?.newProduct) {
          await setNewProduct(res?.payload?.data?.newProduct)
          let newArray = [...tableData];
          newArray.push(res?.payload?.data?.newProduct);
          setTableData(newArray)
          setIsloading(false)
          setError('')
        } else {
          setIsloading(false)
          setError(res.payload.response.data.error)
        }
      }
    } catch (error) {
      console.error(error);
      setIsloading(false)
      setError('error')
    }
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("product")
  };
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddProduct
          formData={formData}
          setFormData={setFormData}
          category={category}
        />;
      case 1:
        return <Review formData={formData} />;
      case 2:
        return isLoading ? "...loading" : !error ? <Success newProduct={newProduct} handleBack={handleBack} />:<PaymentForm error={error}/>  ;
      default:
        throw new Error('Unknown step');
    }
  }

  
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '15px' }}>
            <Typography component="h1" variant="h4" align="center">
              Add {category}
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
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={(activeStep > 1 && !error)?handleClose :handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back 
                </Button>
              )}
              <Button
                variant="contained"
                onClick={() => handleNext(activeStep === steps.length - 1 ? 'Place order' : 'Next', activeStep)}
                sx={{ mt: 3, ml: 1 }}
                disabled={activeStep > 1}
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>

        </Paper>
      </Container>
    </ThemeProvider>
  );
}
