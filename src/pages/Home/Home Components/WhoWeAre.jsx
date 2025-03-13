import { Box, Typography } from '@mui/material';

const WhoWeAre = () => {
  return (
    <Box
      id={"who"}
      style={{
        height: "100vh",
        background: "rgb(245, 245, 245)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img
        src="./src/assets/16367359_rm373batch7-banner-06-s88.jpg"
        height={"60%"}
        style={{ borderRadius: "20px" }}
      />
      <Box
        style={{
          width: "35%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
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
            Who
          </Typography>
          <Typography variant="h2" fontSize={"30px"} color="rgb(70, 84, 137)">
            &nbsp;we are...
          </Typography>
        </Box>
        <Typography
          fontSize={"21px"}
          fontWeight={"600"}
          color="rgba(70, 84, 137)"
          lineHeight={1.8}
        >
          HealthX Partner (HxP) LLC empowers Globally Expanding Companies (GECs)
          to successfully launch and scale their North American presence.
        </Typography>
        <Typography fontSize={"18px"} lineHeight={"1.8"}>
          Our consultants offer specialized expertise in Healthcare and Life
          Sciences, particularly in digital health platforms and digital
          therapeutics powered by sensors, smart devices, and advanced
          analytics. We provide strategic guidance to accelerate GECs'
          achievement of their business objectives across targeted markets.
        </Typography>
      </Box>
    </Box>
  );
};

export default WhoWeAre