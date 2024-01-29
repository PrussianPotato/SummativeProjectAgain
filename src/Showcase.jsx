import { React, useEffect, useState } from "react";
import { collection, doc, getDocs, addDoc, deleteDoc} from "@firebase/firestore";
import { getStorage, ref, getBytes, getDownloadURL, listAll } from "@firebase/storage";
import { db } from "./firebase-config";
import { v4 as uuidv4 } from "uuid";
import BarButtons from "./BarButtons"
import {Grid, Box, Stack, Typography, Paper} from "@mui/material"
import {ImageList, ImageListItem} from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

export default function Showcase(){
  const [showcase, setShowcase] = useState([]);
  const [artArray, setArtArray] = useState([]);

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

  const itemData = [
    {
      img:'https://img1.wsimg.com/isteam/ip/76998771-7467-47ba-926b-f6a200d10bb6/falloncanal.JPG',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Claude-Monet-Landscape-painting.-Image-via-wallpaper.com_.jpg',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://th.bing.com/th/id/R.bc6f35901ddcd77526346086c378e731?rik=sQeSk1jYVJSe3w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fACx3TTD.jpg&ehk=Ksg9plEdcPjr76J3HnX3Q1l3K6OMkPApURTXWhXQfls%3d&risl=&pid=ImgRaw&r=0',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://www.artnews.com/wp-content/uploads/2020/04/Landscape-from-Saint-Re%CC%81my-1889-Vincent-van-Gogh-SMK-1840.jpg?w=1024',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      name:"Lizard",
      bodyText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ]
  
  return(
    <main>
      <Grid direction="column" spacing={0} sx={{}}>
        <Grid item>
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
        <Grid item sx={{height:"30rem", backgroundColor:"rgb(18, 16, 16)"}}>
          <Box sx={{width:"100%", height:"100%", pt:4}}>
            <Typography sx={{color:"white", fontSize:"7.5rem", width:850, margin:"auto", textAlign:"center", fontFamily:"Roboto", borderBottom:"2px white solid", borderTop:"2px white solid"}}>
              The Showcase
            </Typography>
            <Typography sx={{color:"white", fontSize:"4.5rem", width:850, margin:"auto", textAlign:"center", fontFamily:"Roboto", mt:4}}>
              Our Fine Works Of Art
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={{width:"100%", height:"110rem", backgroundColor:"rgb(18, 16, 16)"}}>
          <ImageList sx={{
              width: "85%",
              height: "90%",
              pt: 2,
              margin:"0 auto",
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              }} cols={3} rowHeight={500} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item} sx={{borderColor:"black", borderColor:"black"}}>
                <Card sx={{ maxWidth: "100%"}}>
                  <CardMedia
                    square
                    sx={{height:350, backgroundColor:"white"}}
                    image={item.img}
                    title={item.name}
                  />
                  <CardContent sx={{backgroundColor:"rgb(18, 16, 16)", color:"white"}}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
                      {item.bodyText}
                    </Typography>
                  </CardContent>
                </Card>
              </ImageListItem>
            ))}
          </ImageList>
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