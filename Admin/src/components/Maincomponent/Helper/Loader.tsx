// import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

// export default function Loader() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CircularProgress />
//     </Box>
//   );
// }
import React from 'react';
import './loading.css'; // Import your CSS file for styling

const LoadingModal = ({ show }:any) => {
  return (
    show && (
      <div className="loading-modal">
        <div className="loading-content">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  );
};

export default LoadingModal;
