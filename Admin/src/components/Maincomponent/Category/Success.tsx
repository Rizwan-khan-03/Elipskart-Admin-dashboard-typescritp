import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
export default function Success({ newProduct, handleBack }: any) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Typography variant="h5" gutterBottom>
          Product Add Successfully.
        </Typography>
        <Typography variant="subtitle1">
          Your Product Number is #{newProduct?.productCode}. We have emailed your order
          confirmation,
        </Typography>
        {
          newProduct?._id ? (null) : (
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Back
            </Button>
          )
        }
      </Grid>
    </React.Fragment>
  );
}