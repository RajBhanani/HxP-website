import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(26, 37, 79)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Box
        style={{
          display: "flex",
          gap: "10px",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "30px",
          alignItems: "center",
        }}
      >
        <img src="./src/assets/hxp_logo.png" height={"30px"} />
        <Typography
          fontWeight={"600"}
          fontSize={"18px"}
          color="rgb(26, 37, 79)"
        >
          Healthx Partner LLC
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
