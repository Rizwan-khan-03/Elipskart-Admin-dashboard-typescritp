import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function PaymentForm({error}:any) { 
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {error ?error :"errorPlease Fill All Required Field's"}
      </Typography>
    </React.Fragment>
  );
}