import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const ValuesCard = ({ isMd, img, heading, text, details }) => {
  return (
    <Box
      style={{
        width: isMd ? "90vw" : "40vw",
        // height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "20px",
        gap: "10px",
        backgroundColor: "white",
        borderRadius: "30px",
      }}
    >
      <img src={`./src/assets/${img}`} alt="Image" style={{borderRadius: "20px", maxWidth: "100%"}}/>
      <Typography fontSize={"24px"} color="rgb(70, 84, 137)">
        {heading}
      </Typography>
      <Typography fontSize={"20px"} color="rgb(70, 84, 137)" fontWeight={"600"}>
        {text}
      </Typography>
      <Typography fontSize={"16px"}>{details}</Typography>
    </Box>
  );
};

ValuesCard.propTypes = {
  isMd: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default ValuesCard;
