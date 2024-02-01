import { React, useEffect, useState } from "react";
import { collection, doc, getDocs, addDoc, deleteDoc} from "@firebase/firestore";
import { getStorage, ref, getBytes, getDownloadURL, listAll } from "@firebase/storage";
import { db } from "./firebase-config";
import { v4 as uuidv4 } from "uuid";
import BarButtons from "./BarButtons"
import {Grid, Box, Stack, Typography, Paper, Button} from "@mui/material"
import {ImageList, ImageListItem} from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

export default function Showcase(){
  const [showcase, setShowcase] = useState([]);
  const [artArray, setArtArray] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    console.log("useEffect")
    getData()
  }, [])

  const getData = async () => {
    const storage = getStorage()
    const imagesRef = ref(storage, "images")
    const urlArray = []
    
    const listOfImages = listAll(imagesRef).then(function(result) {
      result.items.forEach(function(imageRef){
        const snapShot = getDownloadURL(imageRef)
        urlArray.push(snapShot)
      })
    })
    console.log(urlArray)
    setArtArray(urlArray)
    console.log(artArray)
  }

  /* Drop Down Menu */
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const impArt = [
    {
      img:'https://img1.wsimg.com/isteam/ip/76998771-7467-47ba-926b-f6a200d10bb6/falloncanal.JPG',
      name:"Fallon Canal",
      bodyText:"A nice piece of impressionist art made by a colorblind man.",
    },
    {
      img:'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Claude-Monet-Landscape-painting.-Image-via-wallpaper.com_.jpg',
      name:"Fields A'yonder",
      bodyText:"Oil painting of a poppy field in the village of Vethuil, northwest of Paris. Made by Claude Monet in 1880.",
    },
    {
      img:'https://th.bing.com/th/id/R.bc6f35901ddcd77526346086c378e731?rik=sQeSk1jYVJSe3w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fACx3TTD.jpg&ehk=Ksg9plEdcPjr76J3HnX3Q1l3K6OMkPApURTXWhXQfls%3d&risl=&pid=ImgRaw&r=0',
      name:"Southern Retreat",
      bodyText:"A painting from an unknown artist that seems to be presenting an image of a town in southern France.",
    },
    {
      img:'https://www.artnews.com/wp-content/uploads/2020/04/Landscape-from-Saint-Re%CC%81my-1889-Vincent-van-Gogh-SMK-1840.jpg?w=1024',
      name:"Lizard",
      bodyText:"The first in the series of several paintings made by the one and only Vincent Van Gogh. Shows the landscape art of a mountainous region in France.",
    },
    {
      img:'https://www.jacksonsart.com/blog/wp-content/uploads/2015/04/claude-monet-impression-sunrise.jpg',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://i.pinimg.com/originals/a3/9c/3e/a39c3e4b06ddbe4a195cfd97845a45b4.jpg',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://th.bing.com/th/id/R.3030f8b637b702f23c9b38f3f44038ac?rik=VOGPJ0Pw4CS54w&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f2%2f2a%2fClaude_Monet_040.jpg&ehk=jv5dY%2f7wh64jsWM%2fzsMRj8OUyeshtYHe67uarb9l2dA%3d&risl=&pid=ImgRaw&r=0',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://uploads5.wikiart.org/images/edgar-degas/landscape-at-valery-sur-somme-1.jpg!Large.jpg',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://th.bing.com/th/id/R.cd93b0244b336536c9519f190f0e5d6a?rik=A79beWnrTpWv%2fw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-QeoHSfWQ0bg%2fUO9PnLmySOI%2fAAAAAAAAQE8%2fC1HWqQrfdyE%2fs1600%2fVan-Gogh-Painting-1.jpg&ehk=zOZRB0oiqfkzkjsy2vfsWxvehpPPZXSf0GRDhi%2fG4cw%3d&risl=&pid=ImgRaw&r=0',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ]

  const limArt = [
    {
      
    }
  ]
  
  return(
    <main>
      <Grid container direction="column" spacing={0} sx={{}}>
        <Grid item>
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
        </Grid>
        <Grid item sx={{height:"30rem", backgroundColor:"rgb(18, 16, 16)"}}>
          <Box sx={{width:"95%", height:"100%", borderLeft:"1px rgb(74, 74, 74) solid", borderRight:"1px rgb(74, 74, 74) solid", pt:4, px:3.5, margin:"auto"}}>
            <Typography sx={{color:"white", fontSize:"7.5rem", width:900, margin:"auto", textAlign:"center", fontFamily:"Roboto", borderBottom:"2px white solid", borderTop:"2px white solid"}}>
              The Showcase
            </Typography>
            <Typography sx={{color:"white", fontSize:"4.5rem", width:900, margin:"auto", textAlign:"center", fontFamily:"Roboto", mt:4}}>
              Our Fine Works Of Art
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={{width:"100%", height:"110rem", backgroundColor:"rgb(18, 16, 16)"}}>
          <Box sx={{width:"95%", height:"100%", borderLeft:"1px rgb(74, 74, 74) solid", borderRight:"1px rgb(74, 74, 74) solid", pt:4, px:3.5, margin:"auto"}}>
            <ImageList sx={{
                width: "90%",
                height: "90%",
                pt: 2,
                margin:"0 auto",
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                }} cols={3} rowHeight={500} gap={8}>
              {impArt.map((item, index) => (
                <ImageListItem key={item} sx={{borderColor:"black"}}>
                  <Card square sx={{ maxWidth: "100%", maxHeight:"100%",border:"1px black solid"}}>
                    <CardMedia
                      square
                      sx={{height:350, backgroundColor:"white"}}
                      image={item.img}
                      title={item.name}
                    />
                    <CardContent sx={{backgroundColor:"rgb(18, 16, 16)", color:"white"}}>
                      <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Roboto", fontSize:26, textAlign:"center", borderBottom:"1px white solid"}}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{color:"white", fontFamily:"Roboto", fontSize:16, textAlign:"center"}}>
                        {item.bodyText}
                      </Typography>
                    </CardContent>
                  </Card>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
        <Grid item>
          <Paper sx={{height:70, pt:4.5, backgroundColor:"rgb(18, 16, 16)", margin:0, borderTop:"1px solid rgb(74, 74, 74)"}} elevation={0}>
            <BarButtons buttons = {[{name:"Contact", color:"white", variant:"text", href:"/"}]} fontSize="large"/>
          </Paper>
        </Grid>
      </Grid>
    </main>
  )
}