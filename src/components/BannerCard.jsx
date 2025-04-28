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
  height: "175px",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderLeft: "10px solid #F99929",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    height: "150px",
    width: "300px",
  },
}));

const BannerCard = ({ text, img, link }) => {
  return (
    <StyledCard>
      <Box
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <CardMedia
          component={"img"}
          sx={{ width: "90px", height: "70px" }}
          image={`src/assets/${img}`}
          alt="image"
        />
        <CardContent>
          <Typography color="#465489" fontWeight={600} fontFamily={"Verdana"}>
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          {link && (
            <Button variant="outlined" onClick={() => { }}>
              Know More
            </Button>
          )}
        </CardActions>
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
