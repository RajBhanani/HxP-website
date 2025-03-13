import { Box, List, ListItem, Typography } from "@mui/material";

const WhereWeCanHelp = () => {
  return (
    <Box
      id={"who"}
      style={{
        height: "100vh",
        background: "rgba(2, 42, 114)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img
        src="./src/assets/hologram-feminine-silhouette-man-hand.jpg"
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
              backgroundColor: "black",
              color: "rgba(2, 42, 114)",
              borderRadius: "30px",
            }}
          >
            Where
          </Typography>
          <Typography variant="h2" fontSize={"30px"} color="black">
            &nbsp;we can help you...
          </Typography>
        </Box>
        <ul style={{ listStyle: "url(./src/assets/hxp_logo_small.png)" }}>
          <li style={{padding: "3px 5px"}}>
            <Typography
              fontSize={"20px"}
              fontWeight={"600"}
              color="rgb(129, 181, 193)"
              lineHeight={1.8}
            >
              Analyzing market space prior to product launch
            </Typography>
          </li>
          <li style={{padding: "3px 5px"}}>
            <Typography
              fontSize={"20px"}
              fontWeight={"600"}
              color="rgb(129, 181, 193)"
              lineHeight={1.8}
            >
              Identifying Key Opinion Leaders and healthcare organizations with
              whom tech companies can partner to succeed
            </Typography>
          </li>
          <li style={{padding: "3px 5px"}}>
            <Typography
              fontSize={"20px"}
              fontWeight={"600"}
              color="rgb(129, 181, 193)"
              lineHeight={1.8}
            >
              Identify primary / secondary stakeholder to run your marketing
              campaigns / events
            </Typography>
          </li>
          <li style={{padding: "3px 5px"}}>
            <Typography
              fontSize={"20px"}
              fontWeight={"600"}
              color="rgb(129, 181, 193)"
              lineHeight={1.8}
            >
              Achieve business milestones
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default WhereWeCanHelp;
