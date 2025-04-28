import {
  Box,
  List,
  ListItemButton,
  styled,
  Typography,
} from "@mui/material";
import { Link } from "react-scroll";

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: "30px 0px",
  background: "rgba(177, 184, 190, 0.1)",
  display: "flex",
  justifyContent: "space-evenly",
  gap: "10px",
  alignItems: "center",
  "& img": {
    width: "50vw",
    height: "70vh",
    objectFit: "cover",
  },
  "&>div:first-of-type": {
    width: "30%",
    minHeight: "70vh",
  },
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column-reverse",
    gap: "50px",
    "& img": {
      width: "90vw",
      height: "auto",
    },
    "& > div:first-of-type": {
      padding: "30px",
      width: "100%",
      minHeight: "40vh",
    },
  },
}));

const FloatingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "15px 20px",
  boxShadow: "0px 5px 5px rgba(0,0,0,0.3)",
  borderRadius: "20px",
  gap: "10px",
  position: "absolute",
  bottom: 0,
  background: "#FFFFFF",
  "& div:last-of-type p": {
    borderRight: "1px solid #636262",
  },
  "& div:last-of-type p:last-of-type": {
    borderRight: "none",
  },
  [theme.breakpoints.down("lg")]: {
    bottom: -30,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    position: "relative",
    "& > div": {
    },
    "& div:last-of-type p": {
      borderRight: "none",
    },
  },
}));

const FloatingBoxTextBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  color: "#636262",
  textAlign: "left",
  gap: "20px",
  "& p": {
    borderRight: "1px solid #636262",
    fontFamily: "Calibri",
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "25px",
    paddingRight: "20px",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const WhatWeOffer = ({ setOffer }) => {
  return (
    <StyledBox id="whatWeOffer">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          fontSize={"32px"}
          color="rgba(99, 98, 98, 1)"
          fontFamily={"Calibri"}
        >
          What We Offer...
        </Typography>
        <Typography
          fontSize={"18px"}
          color="rgba(99, 98, 98, 1)"
          fontFamily={"Calibri"}
        >
          HxP empowers healthcare technology companies to rapidly scale and
          achieve sustainable growth. We deliver strategic expertise, tailored
          solutions, and hands-on execution to help you disrupt the market,
          accelerate adoption, and achieve lasting success.
        </Typography>
        <List>
          <ListItemButton sx={{ maxWidth: "450px" }}>
            <Link
              to="howWeCanHelpYou"
              smooth
              style={{ width: "100%" }}
              onClick={() => {
                setOffer(0);
              }}
            >
              <Typography fontSize={"16px"} color="#F99929">
                Market Analysis & Competitive Positioning
              </Typography>
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ maxWidth: "450px" }}>
            <Link
              to="howWeCanHelpYou"
              smooth
              style={{ width: "100%" }}
              onClick={() => {
                setOffer(1);
              }}
            >
              <Typography fontSize={"16px"} color="#F99929">
                Ecosystem Mapping & Customer Dynamics
              </Typography>
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ maxWidth: "450px" }}>
            <Link
              to="howWeCanHelpYou"
              smooth
              style={{ width: "100%" }}
              onClick={() => {
                setOffer(2);
              }}
            >
              <Typography fontSize={"16px"} color="#F99929">
                Sales & Marketing Strategy
              </Typography>
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ maxWidth: "450px" }}>
            <Link
              to="howWeCanHelpYou"
              smooth
              style={{ width: "100%" }}
              onClick={() => {
                setOffer(3);
              }}
            >
              <Typography fontSize={"16px"} color="#F99929">
                Customer Engagement & Business Development
              </Typography>
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ maxWidth: "450px" }}>
            <Link
              to="howWeCanHelpYou"
              smooth
              style={{ width: "100%" }}
              onClick={() => {
                setOffer(4);
              }}
            >
              <Typography fontSize={"16px"} color="#F99929">
                Operational & Post-Sales Support
              </Typography>
            </Link>
          </ListItemButton>
        </List>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="./src/assets/iStock-1719539154_500_300_s_c1.jpg"
          style={{ borderRadius: "20px" }}
        />
        <FloatingBox>
          <Box>
            <Typography fontSize={"20px"} color="#F99929">
              Our Focus Areas
            </Typography>
          </Box>
          <FloatingBoxTextBox>
            <Typography>Home/Remote Care</Typography>
            <Typography>Fitness/Physiotherapy</Typography>
            <Typography>In Clinic Connectivity</Typography>
            <Typography>Assisted Living</Typography>
            <Typography>Nursing Organizations</Typography>
          </FloatingBoxTextBox>
        </FloatingBox>
      </Box>
    </StyledBox>
  );
};

export default WhatWeOffer;
