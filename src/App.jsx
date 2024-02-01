import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack'
import React from 'react';
import BarButtons from './BarButtons';
import { borders } from '@mui/system';
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Carousel from "react-material-ui-carousel";

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [index, setIndex] = React.useState(0);

  function ItemShow(item) {
    return (
      <Box
        component="img"
        sx={{
          height: "100%",
          width: "100%",
        }}
        alt="The house from the offer."
        src={item.img}
      />
    )
  }

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (cur, prev) => {
    setIndex(cur);
    console.log(cur, prev);
  };

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: "https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=nature-forest-industry-34950.jpg&fm=jpg",
      title: "Something",
    }
  ]

  return (
    <main>
      <Grid container className="Home-page" direction="column" justifyContent="center" alignItems="center" spacing={0}>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={0} sx={{borderBottom:"2px solid rgb(74, 74, 74)", borderTop:"5px solid rgb(74, 74, 74)", backgroundColor:"rgb(18, 16, 16)"}}>
          <Grid item xs={4}>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h4" sx={{color:"white", display:"flex", fontSize:26, fontFamily:"Verdana", pt:1.5, pb:1.5}}>
                The Art Gallery
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sx={{backgroundColor:"rgb(18, 16, 16)", borderBottom:"1px solid rgb(74, 74, 74)"}}>
            <Paper sx={{height:60, pt:1.5, backgroundColor:"rgb(18, 16, 16)"}} elevation={2} square>
              <BarButtons buttons = {[
                {name: "Menu", color: "white", variant:"text", href:"/"},
                {name: "Showcase", color: "white", variant:"text", href:"/Showcase"},
                {name: "About", color: "white", variant:"text", href:"/About"},
              ]} fontSize="large"/>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{width:"100%", height:"100%", backgroundColor:"rgb(18, 16, 16)"}}>
            {/* Sign In Button */}
            <Box sx={{width:"100%", height:"100%", justifyContent:"center", display:"flex", pt:1.5, pb:1.5}}>
              <Button
                id="positioned-button"
                aria-controls={open ? 'positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color:"white", fontSize:"1.2rem"}}
              >
                Menu
              </Button>
              <Menu
                id="positioned-menu"
                aria-labelledby="positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
        {/* Header */}
        <Grid item sx={{width:"100%"}} justifyContent="center">
          <Box sx={{mb:25, pt:5}}>
            <Typography sx={{color:"white", fontSize:"7.5rem", textAlign:"center", fontFamily:"Roboto"}}>
              The Home of Mediocre Art
            </Typography>
            <Typography sx={{color:"white", fontSize:20, textAlign:"center", fontFamily:"Roboto", pb:4}}>(not really)</Typography>
            <Typography sx={{color:"white", fontSize:"3.5rem", textAlign:"center", fontFamily:"Roboto"}}>
              Have a gander at some FINE art
            </Typography>
          </Box>
        </Grid>
        {/* Mid-Page image showcase */}
        <Grid item sx={{width:"100%", height:"40rem", display:"flex", justifyContent:"center"}}>
          <Box className="Neon-glow" sx={{width:"50%"}}>
            <Paper square sx={{width:"100%", height:"100%", backgroundColor:"rgb(18, 16, 16)"}}>
              {/* Image Showcase */}
              <Carousel
                index={index}
                onChange={handleChange}
                interval={5000}
                animation="slide"
                duration={550}
                indicators={false}
                stopAutoPlayOnHover
                swipe
                className="my-carousel"
              >
                {itemData.map((item, i) => (
                  <Box
                    component="img"
                    sx={{
                      height:"100%",
                      width:"100%",
                    }}
                    src={item.img}
                  ></Box>
                ))}
              </Carousel>
            </Paper>
          </Box>
        </Grid>
        {/* Footer Probably */}
        <Grid item sx={{mt:35, width:"100%", bottom:0}}>
          <Paper sx={{height:70, pt:4.5, backgroundColor:"rgb(18, 16, 16)", borderTop:"1px solid rgb(74, 74, 74)"}} elevation={3}>
            <BarButtons buttons = {[{name:"Contact", color:"white", variant:"text", href:"/"},]} fontSize="large"/>
          </Paper>
        </Grid>
      </Grid>
    </main>
  )
}
