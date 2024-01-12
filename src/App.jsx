import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import BarButtons from './BarButtons';
import { borders } from '@mui/system';

export default function App() {
  return (
    <main>
      <Grid container className="Home-page" direction="column" justifyContent="center" alignItems="center" spacing={0}>
        {/* Top Bar */}
        <Grid item sx={{width:"100%"}}>
          <Paper sx={{
              height:60,
              pt:2,
              backgroundColor:"rgb(18, 16, 16)",
              borderBottom:"1px solid rgb(74, 74, 74)"
            }} elevation={2} square>
            <BarButtons buttons = {[
              {name: "Menu", color: "white", variant:"text", href:"/"},
              {name: "Showcase", color: "white", variant:"text", href:"/Showcase"},
              {name: "About", color: "white", variant:"text", href:"/About"},
            ]} fontSize="large"/>
            <Box sx={{position:"relative", bottom:38}}>
              <Typography variant="h5" sx={{color:"white", pl:40}}>Title</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Header */}
        <Grid item sx={{}}>
          <Box sx={{mb:40}}>
            <Typography>
              Sub Text
            </Typography>
          </Box>
        </Grid>
        {/* Mid-Page image showcase */}
        <Grid item sx={{width:"80%", height:"45rem", display:"flex", justifyContent:"center"}}>
          <Box className="Neon-glow">
            <Paper square>
              {/* Image Showcase */}
              
            </Paper>
          </Box>
        </Grid>
        {/* Footer Probably */}
        <Grid item sx={{mt:35, width:"100%", bottom:0}}>
          <Paper sx={{
              height:70,
              pt:4.5,
              backgroundColor:"rgb(18, 16, 16)",
              borderTop:"1px solid rgb(74, 74, 74)"
            }} elevation={3}>
            <BarButtons buttons = {[
              {name:"Contact", color:"white", variant:"text", href:"/"},
            ]} fontSize="large"/>
          </Paper>
        </Grid>
      </Grid>
    </main>
  )
}
