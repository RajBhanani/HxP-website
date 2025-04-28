import { Box, styled, Typography } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "rgba(177, 184, 190, 0.1)",
  width: "100%",
  padding: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "50px",
  "& > img": {
    height: "550px",
    borderRadius: "15px",
  },
  [theme.breakpoints.down("lg")]: {
    "& > img": {
      height: "400px",
    },
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    padding: "100px",
    "& > img": {
      height: "350px",
      borderRadius: "15px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px",
    "& > img": {
      height: "200px",
      borderRadius: "15px",
    },
  },
}));

const OurCommitment = () => {
  return (
    <StyledBox>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography color="#022A72" fontFamily="Calibri" fontSize={"32px"}>
          Our Commitment
        </Typography>
        <Typography
          color="#022A72"
          fontFamily="Calibri"
          fontSize={"24px"}
          fontWeight={"600"}
        >
          We are driven by a singular purpose to accelerate the success of
          healthcare technology companies and ensure their transformative
          innovations reach the patients and providers who need them most.
        </Typography>
        <Typography color="#636262" fontFamily="Calibri">
          <strong>
            We&#39;re here to be more than just consultants—we&#39;re your
            partners.
          </strong>
          Together, let&#39;s shape the future of healthcare, one milestone at a
          time.
        </Typography>
      </Box>
      <img src="./src/assets/doctors-wearing-vr-simulation-with-hologram-medical-technology.jpg" />
    </StyledBox>
  );
};

export default OurCommitment;
