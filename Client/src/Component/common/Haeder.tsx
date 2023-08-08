import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import mobileImg from '../../../src/asset/imeges/download.jpeg';
import { routeLink } from '../../Router/RouteList';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

type CustomButtonProps = {
  component?: React.ElementType;
  to: string;
};
const CustomButton = styled(Button)<CustomButtonProps>(
  {
    color: '#000000',
    gap: '4px',
    display: 'flex',
    flexDirection: 'column', // set flex direction to column
    justifyContent: 'start',
    alignItems: 'center',
    padding: '0px 10px',
    minHeight: '20px'
  },
  ({ component }) =>
    component === Link && {
      textDecoration: 'none',
    }
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius:0

}));

export default function Moblie() {
  return (
    // <Box sx={{ flexGrow: 1 }} >
    //   <Grid container >
    //     <Grid item xs={12} md={12}>
    //       <Item>
    //         <Box sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent:'center' }}>
    //           {routeLink.map((link: any, ind: any) => (
    //             <CustomButton color="inherit" component={Link} to={link?.link}
    //               sx={{ width: '10%', display: { xs: 'flex', md: 'flex' }, justifyContent: 'center', }}>
    //               {link.name}
    //             </CustomButton>
    //           ))}
    //         </Box>
    //       </Item>
    //     </Grid>
    //   </Grid>
    // </Box>

    <Box sx={{ flexGrow: 1 }}>
    <Grid container>
      <Grid item xs={12} md={12}>
        <Item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              overflowX: 'auto',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
              scrollbarWidth: 'none',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mx: 1,
                py: 0,
                overflow: 'auto',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {routeLink.map((link: any, ind: any) => (
                <CustomButton
                  key={ind}
                  color="inherit"
                  component={Link}
                  to={link?.link}
                  sx={{
                    whiteSpace: 'nowrap',
                    mx: 0.5,
                    fontSize: { xs: '12px', md: 'inherit' },
                    marginLeft:"5px",
                    padding:'5px',
                    
                    
                  }}
                >
                  {link.name}
                </CustomButton>
              ))}
            </Box>
          </Box>
        </Item>
      </Grid>
    </Grid>
  </Box>
  

  );
}

