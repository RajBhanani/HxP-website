import {
  AppBar,
  Box,
  Button,
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
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
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

const Buttons = ({ pathname }) => {
  return (
    <ButtonsList>
      <ListItem>
        <NavButton pathname={pathname} text={"Home"} link={"/"} />
      </ListItem>
      <ListItem>
        <NavButton pathname={pathname} text={"About Us"} link={"/about"} />
      </ListItem>
      <ListItem>
        <NavButton pathname={pathname} text={"Contact Us"} link={"/contact"} />
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
  const location = useLocation();
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "#1A254F",
        height: "66px",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {location.pathname === "/" ? (
            <Button style={{ padding: "0px", textTransform: "none" }}>
              <Link
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                to="banner"
                smooth
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
                  <img src="./src/assets/hxp_logo.png" height={"25px"} />
                  <Typography
                    fontWeight={"600"}
                    fontSize={"18px"}
                    color="rgb(26, 37, 79)"
                  >
                    Healthx Partner LLC
                  </Typography>
                </Box>
              </Link>
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/")}
              style={{ padding: "0px", textTransform: "none" }}
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
                <img src="./src/assets/hxp_logo.png" height={"25px"} />
                <Typography
                  fontWeight={"600"}
                  fontSize={"18px"}
                  color="rgb(26, 37, 79)"
                >
                  Healthx Partner LLC
                </Typography>
              </Box>
            </Button>
          )}
        </Box>
        <DesktopButtonsBox>
          <Buttons pathname={location.pathname} />
        </DesktopButtonsBox>
        <MobileButtonsBox>
          <IconButton onClick={() => setOpenDrawer(true)}>
            <MenuIcon style={{ color: "#9B9B9B" }} />
          </IconButton>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <Buttons pathname={location.pathname} />
          </Drawer>
        </MobileButtonsBox>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
