import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "350px",
  height: "125px",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderLeft: "10px solid #F99929",
  borderRadius: "10px",
  "& p": {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    height: "75px",
    width: "325px",
    "& p": {
      fontSize: "18px",
    },
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "90px",
  height: "70px",
  [theme.breakpoints.down("md")]: {
    transform: "scale(0.7)",
  },
}));

const BannerCard = ({ text, img }) => {
  return (
    <StyledCard>
      <Box
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <StyledCardMedia
          component={"img"}
          image={`./assets/${img}`}
          alt="image"
        />
        <CardContent>
          <Typography color="#465489" fontWeight={600} fontFamily={"Calibri"}>
            {text}
          </Typography>
        </CardContent>
      </Box>
    </StyledCard>
  );
};

BannerCard.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default BannerCard;
