import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function IsLoading(props:{marginTop:number}){
    return (
        <div style={{
            marginTop:props.marginTop,
            textAlign:"center"
        }}>
            <CircularProgress/>
        </div>
    )
}