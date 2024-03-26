import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import * as action from './Reduxx/cartActions';
import { useDispatch } from 'react-redux';

const CounterComponent = ({ id }: any) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    dispatch(action.sameProductAddCartRequest({id:id,type:'inc'}));

  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount > 1 ? prevCount - 1 : 0);
    dispatch(action.sameProductAddCartRequest({id:id,type:'dec'}));
  };

  return (
    <div style={{ margin: '10px 10px 10px 40px' }}>
      <Button style={{ padding: '2px', minWidth: 'unset' }} variant="outlined" size="small" color="primary" onClick={handleDecrement}>
        <RemoveCircleOutlineIcon style={{ color: "#808080" }} />
      </Button>
      <Typography variant="h6" component="span" style={{ margin: '0 16px' }}>
        {count}
      </Typography>
      <Button style={{ padding: '2px', minWidth: 'unset' }} variant="outlined" size="small" color="primary" onClick={handleIncrement}>
        <AddCircleOutlineIcon style={{ color: "#808080" }} />
      </Button>
    </div>
  );
};

export default CounterComponent;
