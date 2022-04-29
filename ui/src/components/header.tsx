import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Header(){
    const location = useLocation()
    const navigate = useNavigate()

    const judgePath = ()=>{
      return location.pathname === "/categories" || location.pathname === "/"
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            {judgePath()
            ? <Avatar variant="square" sx={{ width: 35, height: 35 }}  alt="Remy Sharp" src="https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/icon.PNG" />
            :<IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>navigate(-1)}
              >
                <ArrowBackIosNewIcon/>
              </IconButton>
            }
            <Link to="/categories" style={{color:'white',textDecoration:"none"}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:5}}>
              Movie Cat
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
  
    )
}