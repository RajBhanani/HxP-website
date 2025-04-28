import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: "#022A72",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "10px",
  color: "white",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
}));

const NavigationBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  "& > div": {
    display: "flex",
    gap: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    "& > div": {
      textAlign: "center",
      flexDirection: "column",
      gap: "20px"
    },
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <img
          src="./src/assets/Transparant BG_HealthX_Logo_Option1-04@2x.png"
          height={"50px"}
        />
        <Typography fontWeight={600} fontSize={"29px"} lineHeight={"25px"}>
          HealthX <br />
          Partner
        </Typography>
      </Box>
      <NavigationBox>
        <Box>
          <Link to="navbar" smooth style={{ cursor: "pointer" }}>
            <Typography>Top</Typography>
          </Link>
          <Link to="whoWeAre" smooth style={{ cursor: "pointer" }}>
            <Typography>Who We Are</Typography>
          </Link>
          <Link to="whatWeOffer" smooth style={{ cursor: "pointer" }}>
            <Typography>What We Offer</Typography>
          </Link>
        </Box>
      </NavigationBox>
      <Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
