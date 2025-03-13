import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "350px",
  height: "175px",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderLeft: "13px solid #1A254F",
  // borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    height: "150px",
    width: "300px"
  }
}));

const BannerCard = ({ text, img, link }) => {
  const navigate = useNavigate();
  return (
    <StyledCard>
      <Box
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {/* <CardMedia
          component="img"
          image="src/assets/synthetic-8597464_1920.jpg"
          alt="icon"
        /> */}
        <CardMedia
          component={"img"}
          sx={{ width: "70px", height: "70px" }}
          image={`src/assets/${img}`}
          alt="image"
        />
        <CardContent >
          <Typography color="#465489" fontWeight={600} fontFamily={"Verdana"}>
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          {link && (
            <Button
              variant="outlined"
              onClick={() => {
                navigate(link);
              }}
            >
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
