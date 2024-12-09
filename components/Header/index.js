"use client";

import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Btn } from '../smallComponent';
import Link from 'next/link';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dietOpen, setDietOpen] = useState(false);
  const [workoutOpen, setWorkoutOpen] = useState(false);
  const [anchorDiet, setAnchorDiet] = useState(null);
  const [anchorWorkout, setAnchorWorkout] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (setter) => (event) => {
    setter(event.currentTarget);
  };

  const handleMenuClose = (setter) => () => {
    setter(null);
  };

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="static"
        sx={{
          background: "black",
        }}
      >
        <Toolbar>
          {/* Logo or Brand Name */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "playfair display", fontWeight: 600, color: "#ffffff", fontSize: "40px" }}
          >
            <Link href="/">GymFluencer</Link>
          </Typography>

          {/* Menu Icon for Mobile */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              color="#D7FB00 !important"
              backgroundColor="#D7FB00"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{color:"#D7FB00 !important"}}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Menu Items for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center" }}>
            <Typography
              variant="button"
              sx={{ ml: 5, cursor: 'pointer', color: "#ffffff", "&:hover": { color: "#D7FB00" } }}
              
            >
              <a href="/#Features">Features</a>
            </Typography>

            <Box>
              <Typography
                variant="button"
                sx={{
                  ml: 5,
                  cursor: 'pointer',
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: "#D7FB00" },
                }}
                onClick={handleMenuOpen(setAnchorDiet)}
              >
                Diet Plan
                <MdArrowDropDown />
              </Typography>
              <Menu
                anchorEl={anchorDiet}
                open={Boolean(anchorDiet)}
                onClose={handleMenuClose(setAnchorDiet)}
              >
                <Link href="/diet-form"><MenuItem onClick={handleMenuClose(setAnchorDiet)}>Personalized Diet Plan</MenuItem></Link>
                <Link href="/weight-loss-diet"><MenuItem onClick={handleMenuClose(setAnchorDiet)}>Weight Loss Diet Plan</MenuItem></Link>
                <Link href="/muscle-building"><MenuItem onClick={handleMenuClose(setAnchorDiet)}>Muscle Building Diet Plan</MenuItem></Link>
              </Menu>
            </Box>

            <Box>
              <Typography
                variant="button"
                sx={{
                  ml: 5,
                  cursor: 'pointer',
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: "#D7FB00" },
                }}
                onClick={handleMenuOpen(setAnchorWorkout)}
              >
                Workout Plans
                <MdArrowDropDown />
              </Typography>
              <Menu
                anchorEl={anchorWorkout}
                open={Boolean(anchorWorkout)}
                onClose={handleMenuClose(setAnchorWorkout)}
                
              >
               <Link href="/beginner"><MenuItem onClick={handleMenuClose(setAnchorWorkout)}>Beginner</MenuItem></Link> 
               <Link href="/intermediate"><MenuItem onClick={handleMenuClose(setAnchorWorkout)}>Intermediate</MenuItem></Link>
               <Link href="/advanced"><MenuItem onClick={handleMenuClose(setAnchorWorkout)}>Advanced</MenuItem></Link>
              </Menu>
            </Box>

            <Typography
              variant="button"
              sx={{ ml: 5, cursor: 'pointer', color: "#ffffff", "&:hover": { color: "#D7FB00" } }}
            >
              Blog
            </Typography>
            <Typography
              variant="button"
              sx={{ ml: 5, cursor: 'pointer', color: "#ffffff", "&:hover": { color: "#D7FB00" } }}
            >
               <a href="/#FAQs">FAQs</a>
            </Typography>
            <Typography
              variant="button"
              sx={{ ml: 5, cursor: 'pointer', color: "#ffffff", "&:hover": { color: "#D7FB00" } }}
            >
              Contact Us
            </Typography>
            <Btn>Get Started</Btn>
            <Btn>Login</Btn>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{ width: 250, backgroundColor: "#1e1e1e", height: "100vh" , color : "#fff" , }}
          role="presentation"
        >
          <List>
            <ListItem button>
              <ListItemText primary="Features" sx={{"&:hover": { color: "#D7FB00" }}}/>
            </ListItem>
            <Box>
              <ListItem button onClick={() => setDietOpen(!dietOpen)}>
                <ListItemText primary="Diet Plan" sx={{"&:hover": { color: "#D7FB00" }}}/>
                {dietOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
              </ListItem>
              <Collapse in={dietOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button sx={{ pl: 4 }}>
                    <Link href="/diet-form"><ListItemText primary="Personalized Diet Plan" sx={{"&:hover": { color: "#D7FB00" }}}/></Link>
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <Link href="/weight-loss-diet"><ListItemText primary="Weight Loss Diet Plan" sx={{"&:hover": { color: "#D7FB00" }}}/></Link>
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <Link href="/muscle-building"><ListItemText primary="Muscle Building Diet Plan" sx={{"&:hover": { color: "#D7FB00" }}}/></Link>
                  </ListItem>
                </List>
              </Collapse>
            </Box>
            <Box>
              <ListItem button onClick={() => setWorkoutOpen(!workoutOpen)}>
                <ListItemText primary="Workout Plans" sx={{"&:hover": { color: "#D7FB00" }}}/>
                {workoutOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
              </ListItem>
              <Collapse in={workoutOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button sx={{ pl: 4 }}>
                    <Link href="/beginner"><ListItemText primary="Beginner" sx={{"&:hover": { color: "#D7FB00" }}}/></Link>
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                   <Link href="/intermediate"><ListItemText primary="Intermediate" sx={{"&:hover": { color: "#D7FB00" }}}/></Link> 
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <Link href="/advanced"><ListItemText primary="Advanced" sx={{"&:hover": { color: "#D7FB00" }}}/></Link>
                  </ListItem>
                  
                </List>
              </Collapse>
            </Box>
            <ListItem button>
              <ListItemText primary="Blog" sx={{"&:hover": { color: "#D7FB00" }}}/>
            </ListItem>
            <ListItem button>
              <ListItemText primary="FAQs" sx={{"&:hover": { color: "#D7FB00" }}}/>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact Us" sx={{"&:hover": { color: "#D7FB00" }}}/>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
