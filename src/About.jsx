import React from 'react'
import './App.css';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import BarButtons from "./BarButtons"

export default function About(){
  return(
    <Grid className="Home-page" direction="column" spacing={0} sx={{height:"100%", width:"100%", display:"flex", flexFlow:"column"}}>
      <Grid item xs={4}>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={0} sx={{borderBottom:"1px solid rgb(74, 74, 74)", backgroundColor:"rgb(18, 16, 16)"}}>
          <Grid item xs={4} sx={{}}>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h4" sx={{color:"white", display:"flex", fontSize:26, fontFamily:"Verdana"}}>
                The Art Gallery
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sx={{backgroundColor:"rgb(18, 16, 16)"}}>
            <Paper sx={{height:60, pt:2, backgroundColor:"rgb(18, 16, 16)"}} elevation={2} square>
              <BarButtons buttons = {[
                {name: "Menu", color: "white", variant:"text", href:"/"},
                {name: "Showcase", color: "white", variant:"text", href:"/Showcase"},
                {name: "About", color: "white", variant:"text", href:"/About"},
              ]} fontSize="large"/>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{width:"100%", height:"100%", backgroundColor:"rgb(18, 16, 16)"}}>
            {/* Sign In Button */}
            <Box sx={{width:"100%", height:"100%"}}></Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{height:"40rem"}}>
        
      </Grid>
      <Grid item xs={4} sx={{height:"40rem"}}>
        
      </Grid>
    </Grid>
  )
}