import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WhenWeCanHelp = () => {
  return (
    <Box
      id={"when"}
      style={{
        height: "100vh",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box
        style={{
          width: "35%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          style={{
            fontSize: "30px",
            fontWeight: "600",
            padding: "3px 13px",
            backgroundColor: "rgb(70, 84, 137)",
            color: "white",
            borderRadius: "30px",
          }}
        >
          When
        </Typography>
        <Typography variant="h2" fontSize={"30px"} color="rgb(70, 84, 137)">
          &nbsp;can we help you...
        </Typography>
      </Box>
      <img
        src="./src/assets/7200954_30757-Photoroom.png"
        height={"40%"}
        style={{ borderRadius: "20px" }}
      />
      <Typography
        fontSize={"21px"}
        fontWeight={"600"}
        color="rgba(70, 84, 137)"
        lineHeight={1.8}
      >
        Whenever you are ready!
      </Typography>
      <Typography fontSize={"18px"} lineHeight={"1.8"}>
        We are eager to hear from you so we can win you trust!
      </Typography>
      <Button
        variant="contained"
        style={{ padding: "0px", backgroundColor: "rgb(70, 84, 137)" }}
      >
        <Link
          to={"/contact"}
          style={{
            textDecoration: "none",
            color: "white",
            padding: "6px 16px",
          }}
        >
          Contact Us
        </Link>
      </Button>
    </Box>
  );
};

export default WhenWeCanHelp;
