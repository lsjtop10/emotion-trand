import { Box, TextField, Slider, Button, Card, CardActions, CardContent, Typography, Stack, Divider, Container } from "@mui/material";
import React from "react";
import Chart from "./Chart";
import DetailCard from "../components/DetailCard";



export default function DetailPage() {


  return (
    
    <Box sx={{
    width: { xs: '100%', xl: '65vw' }, 
    display: 'flex', 
    alignItems: 'stretch', 
    flexDirection:'column',
    gap:'12px'}}
    >

    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
    <DetailCard timestamp={1703641261} emotionLevel={700} />
  </Box>

    

  )
}

{/*<div style={{display:'flex', flexDirection:'column', alignItems:'stretch', width:'100%', padding:'15px 0 0 0 '}}>
      
  </div>*/}