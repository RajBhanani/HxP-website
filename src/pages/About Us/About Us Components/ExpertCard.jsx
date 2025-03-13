import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const ExpertCard = ({ isMd, img, name, title, subtitle, text }) => {
  return (
      <Box
        style={{
          width: "75vw",
          display: "flex",
          flexDirection: isMd ? "column" : "row",
          gap: isMd ? "20px" : "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`./src/assets/${img}`}
          alt="Expert Photo"
          style={{ borderRadius: "50%", height: "150px", minWidth: "150px" }}
        />
        <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box>
            <Typography fontSize={"24px"} fontWeight={"600"}>
              {name}
            </Typography>
            <Typography fontWeight={"600"}>{title}</Typography>
            <Typography fontStyle={"italic"}>{subtitle}</Typography>
          </Box>
          <Typography>{text}</Typography>
        </Box>
      </Box>
  );
};

ExpertCard.propTypes = {
  isMd: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExpertCard;
