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
          <Grid item xs={4} sx={{backgroundColor:"rgb(18, 16, 16)", borderBottom:"1px solid rgb(74, 74, 74)"}}>
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
      <Grid item xs={4} sx={{height:"62rem"}}>
        <Box sx={{height:"100%", width:"100%"}}>
          <Typography sx={{color:"white", fontSize:"5rem", width:900, margin:"auto", textAlign:"center", fontFamily:"Roboto", pt:6}}>
            About
          </Typography>
          <Grid container direction="row">
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Roboto", fontSize:26, textAlign:"center", color:"white"}}>
                Text here
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box
                component="img"
                sx={{
                  width:"80%",
                  height:"80%"
                }}
                src={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Paper sx={{height:70, pt:4.5, backgroundColor:"rgb(18, 16, 16)", margin:0, borderTop:"1px solid rgb(74, 74, 74)"}} elevation={0}>
          <BarButtons buttons = {[{name:"Contact", color:"white", variant:"text", href:"/"}]} fontSize="large"/>
        </Paper>
      </Grid>
    </Grid>
  )
}