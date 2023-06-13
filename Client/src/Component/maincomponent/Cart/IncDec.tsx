import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{  margin:'10px 10px 10px 40px'}}>
      <Button style={{ padding: '2px', minWidth: 'unset' }} variant="outlined" size="small" color="primary" onClick={handleDecrement}>
        <RemoveCircleOutlineIcon style={{color:"#808080"}}/>
      </Button>
      <Typography variant="h6" component="span" style={{ margin: '0 16px' }}>
        {count}
      </Typography>
      <Button style={{ padding: '2px', minWidth: 'unset' }}  variant="outlined" size="small"  color="primary" onClick={handleIncrement}>
        <AddCircleOutlineIcon style={{color:"#808080"}}/>
      </Button>
    </div>
  );
};

export default CounterComponent;
