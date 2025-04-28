import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const ExpertBox = styled(Accordion)({
  width: "300px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  boxShadow: "0px 0px 3px black",
  "&::before": {
    display: "none",
  },
});

const ExpertCard = ({ img, name, title, subtitle, details }) => {
  return (
    <ExpertBox>
      <AccordionSummary
        style={{ flexDirection: "column", height: "350px" }}
        expandIcon={<ExpandMore />}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            height: "320px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={`./src/assets/${img}`}
            alt="Expert Photo"
            style={{
              borderRadius: "50%",
              minHeight: "200px",
              minWidth: "200px",
              maxHeight: "200px",
              maxWidth: "200px",
              objectFit: "cover",
              border: "1px solid black",
            }}
          />
          <Box>
            <Typography fontSize={"24px"} fontWeight={"600"}>
              {name}
            </Typography>
            <Typography fontWeight={"600"}>{title}</Typography>
            <Typography fontStyle={"italic"}>{subtitle}</Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingTop: "20px" }}>
        {details.split("\n").map((sec, idx) => {
          return (
            <React.Fragment key={idx}>
              <Typography>{sec}</Typography>
              <br />
            </React.Fragment>
          );
        })}
      </AccordionDetails>
    </ExpertBox>
  );
};

ExpertCard.propTypes = {
  key: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ExpertCard;
