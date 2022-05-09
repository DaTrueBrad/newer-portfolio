import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink, Router } from "react-router-dom";
import {
  ClickAwayListener,
  Container,
  Drawer,
  Stack,
  SwipeableDrawer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const { createTheme } = require("@mui/material/styles");

export default function ButtonAppBar() {
  // const classes = useStyles()
  const [open, setOpen] = useState(false);
  const openIt = () => setOpen(true);
  const closeIt = () => setOpen(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      setOpen(false);
      return;
    }

    setOpen(true);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        marginBottom: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 5,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: {
                xs: "30px",
              },
            }}
          >
            Brady Bott
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
              },
            }}
            onClick={openIt}
            // className={classes.menuBtn}
          >
            <MenuIcon sx={{ fontSize: "44px" }} />
          </IconButton>

          <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={closeIt}
            onOpen={openIt}
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
              },
            }}
          >
            <Box
              sx={{
                width: 250,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "30px",
                gap: "20px",
              }}
              role="presentation"
            >
              <Typography
                variant="h4"
                color="primary"
                align="center"
                sx={{ marginBottom: "30px" }}
              >
                Where do you wanna go?
              </Typography>
              <RouterLink to="/" onClick={closeIt}>
                {/* <Button color="text" sx={{ marginRight: "20px" }}> */}
                <Typography variant="h5" color="text.main">
                  About
                </Typography>
                {/* </Button> */}
              </RouterLink>
              <RouterLink to="/projects" onClick={closeIt}>
                <Typography variant="h5" color="text.main">
                  Projects
                </Typography>
              </RouterLink>
              <RouterLink to="/tutorials" onClick={closeIt}>
                <Typography variant="h5" color="text.main">
                  Tutorials
                </Typography>
              </RouterLink>
              <RouterLink to="/contact" onClick={closeIt}>
                <Typography variant="h5" color="text.main">
                  Contact
                </Typography>
              </RouterLink>
              <RouterLink to="/resume" onClick={closeIt}>
                <Typography variant="h5" color="text.main">
                  Resume
                </Typography>
              </RouterLink>
            </Box>
          </SwipeableDrawer>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <RouterLink to="/">
              <Button color="inherit" sx={{ marginRight: "20px" }}>
                About
              </Button>
            </RouterLink>
            <RouterLink to="/projects">
              <Button color="inherit" sx={{ marginRight: "20px" }}>
                Projects
              </Button>
            </RouterLink>
            <RouterLink to="/tutorials">
              <Button color="inherit" sx={{ marginRight: "20px" }}>
                Tutorials
              </Button>
            </RouterLink>
            <RouterLink to="/contact">
              <Button color="inherit" sx={{ marginRight: "20px" }}>
                Contact
              </Button>
            </RouterLink>
            <RouterLink to="/resume">
              <Button color="inherit" sx={{ marginRight: "20px" }}>
                Resume
              </Button>
            </RouterLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
