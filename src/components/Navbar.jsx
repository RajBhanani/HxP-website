import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavButton from "./NavButton";
import PropTypes from "prop-types";

const ButtonsList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    height: "100vh",
    flexDirection: "column",
    marginTop: "30px",
    "& > li > button": {
      width: "100%",
    },
  },
}));

const Buttons = () => {
  return (
    <ButtonsList>
      <ListItem>
        <NavButton text={"Who We Are"} link={"whoWeAre"} />
      </ListItem>
      <ListItem>
        <NavButton text={"What We Offer "} link={"whatWeOffer"} />
      </ListItem>
      <ListItem>
        <NavButton text={"Contact Us"} link={"contactUs"} />
      </ListItem>
    </ButtonsList>
  );
};

Buttons.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const DesktopButtonsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MobileButtonsBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar
      id="navbar"
      position="static"
      style={{
        backgroundColor: "white",
        height: "108px",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{ height: "100%", alignItems: "flex-end", position: "relative" }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100%",
            position: "absolute",
            backgroundColor: "#00000010",
            top: 0,
            right: 0,
            borderRadius: "125px 0px 0px 0px",
          }}
        ></Box>
        <Box
          sx={{
            flexGrow: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            marginLeft: "40px",
          }}
        >
          <Box
            style={{
              display: "flex",
              gap: "10px",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "30px",
              alignItems: "center",
            }}
          >
            <img
              src="./src/assets/hxp_logo.png"
              height={"50px"}
            />
            <Typography
              fontWeight={"600"}
              fontSize={"27px"}
              color="rgb(26, 37, 79)"
              fontFamily={"Helvetica"}
              lineHeight={"27px"}
            >
              HealthX
              <br />
              Partner
            </Typography>
          </Box>
        </Box>
        <DesktopButtonsBox>
          <Buttons />
        </DesktopButtonsBox>
        <MobileButtonsBox>
          <IconButton onClick={() => setOpenDrawer(true)}>
            <MenuIcon style={{ color: "#9B9B9B" }} />
          </IconButton>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <Buttons />
          </Drawer>
        </MobileButtonsBox>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
