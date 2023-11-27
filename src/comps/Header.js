import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './try.css';
import BasicAccordion from "./EventCard";
// import MultiActionAreaCard from "./card";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./DrawerComps";
const destinations = [
  {
    id: 1,
    name: 'Cricket',
    label:'Register Now',
    image:'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    name: 'FootBall',
    label:'Register Now',

    image: 'https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3IlMjA3JTIwZm9vdGJhbGx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    name: 'Kabbadi',
    label:'Register Now',

    image: 'https://media.gettyimages.com/id/1171576848/photo/players-of-u-mumba-and-bengaluru-bulls-in-action-during-the-pro-kabaddi-league-match-at-sms.jpg?s=612x612&w=0&k=20&c=fBC5RbTxbfurJj2TG93L_sJ5dGleVg21GwNtvpwyrGI=', // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'BaseBall',
    label:'Register Now',

    image: 'https://media.gettyimages.com/id/1174867113/photo/young-baseball-player-swinging-his-bat-at-thrown-pitch.jpg?s=612x612&w=0&k=20&c=yFYTr1eZrfZ16EAWZ7B9VcKeIDAYrlJHyVDxfBlA3xg=',
  },
  {
    id: 5,
    name: 'BasketBall',
    label:'Register Now',

    image: 'https://media.gettyimages.com/id/103554148/photo/man-dunking-basketball.jpg?s=612x612&w=0&k=20&c=niCN29dxLIWoQ1vB0wEqkgtLyiklOnaWfszdFNa-Lhs=',
  },
  {
    id: 6,
    name: 'VolleyBall',
    label:'Register Now',

    image: 'https://media.gettyimages.com/id/157189594/photo/volleyball.jpg?s=612x612&w=0&k=20&c=6m5VjapoRi9D0gZBQ4O3zllPt29wh-Yh6xYQpyNZxwA=',
  },
];
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
const [event,setEvent]=useState(null);
  return (
    <div className="hi">
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)", mr:'5px' }} />
          <Typography sx={{ marginLeft: "19px" }}>EA SPORTS</Typography>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Event
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              {/* <Link to="/sig">
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Book Now
              </Button>
              </Link> */}
              <Link to="/reg">
              <Button sx={{ marginLeft: "10px" }} variant="contained" >
                Login

              </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container>
        <br></br>
        <br></br>
        
       
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destinations.map((destination) => (
          <Grid item key={destination.id}>
            <Card style={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination.name}<br></br>
                </Typography>
                  <Link to="/sig">
                  <Button variant="contained">{destination.label}</Button>
              </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
        {/* <Box sx={{marginTop:"80px"}}>
          <BasicAccordion name="Events" />
          </Box> */}
    </React.Fragment><br/><br/>
    {/* <MultiActionAreaCard/> */}
    <div>

    </div>
    </div>
  );
};
export default Header;