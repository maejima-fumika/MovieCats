import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';


export default function Header(){
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
          <Avatar variant="square" sx={{ width: 35, height: 35 }}  alt="Remy Sharp" src="https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/icon.PNG" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:5}}>
              Movie Cat
            </Typography>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
  
    )
}