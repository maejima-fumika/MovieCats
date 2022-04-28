import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
import 'animate.css';

export default function Home(){
    const navigate = useNavigate()
    const buttonClicked = ()=>{
        navigate("/categories")
    }
    return (
        <div style={{
            height:"100vh",
            width:"100vw", 
            background:"white", 
            position:"fixed",
            textAlign:'center',
            paddingTop:"30vh"
        }}>
          <Typography variant='h5' component="div" style={{marginBottom:20}} className="animate__animated animate__bounceInDown">
            Welcome To Movie Cat!
          </Typography>
            <Button 
                variant="contained" 
                size='large' 
                className='animate__animated animate__pulse'
                onClick={buttonClicked}
            >
            Start</Button>
            <img 
                src="https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/walking_cat.png" 
                height={100}
                className="animate__animated animate__slideInRight"
                style={{
                    position:"fixed",
                    bottom:0,
                    right:20
                    }} 
            />
        </div>
    )
}