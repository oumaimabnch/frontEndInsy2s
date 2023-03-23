import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';






export default function Appbar() {
    const styles = {
        appBar: {
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '10px',
          height: '72px',
          margin: '0 -10px !important',   
          marginTop: '30px', // Add some margin to separate from
        },
        title: {
          flexGrow: 1,
        },

        
      };
  return (

    
    <Box sx={{ flexGrow: 1 }}   >    
      <AppBar position="static" style={styles.appBar} >
        <Toolbar >
          
        <Link  sx={{flexGrow: 1 ,textDecoration:"none", "&:hover":{fontsize :"16.5px"}}} color="inherit" href="/">
             Mes missions </Link>





          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"   
          sx={{ width: 50, height: 50 }}
        />
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
