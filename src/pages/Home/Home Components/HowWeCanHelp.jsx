import { Box, Typography } from "@mui/material";

const HowWeCanHelp = () => {
  return (
    <Box
      id={"how"}
      style={{ height: "100vh", backgroundColor: "rgb(21, 20, 26)" }}
    >
      <Box
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "50px",
          background: "url(./src/assets/6849334_3461225.jpg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            position: "absolute",
            top: "70px",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              style={{
                fontSize: "30px",
                fontWeight: "600",
                padding: "3px 13px",
                backgroundColor: "rgba(26, 37, 79)",
                color: "rgba(108, 163, 177)",
                borderRadius: "30px",
              }}
            >
              How
            </Typography>
            <Typography
              variant="h2"
              fontSize={"30px"}
              color="white"
              style={{ backdropFilter: "blur(3px)" }}
            >
              &nbsp;we can help...
            </Typography>
          </Box>
        </Box>
        <Typography
          fontSize={"16px"}
          style={{
            backgroundColor: "rgba(108, 163, 177)",
            color: "rgba(26, 37, 79)",
            padding: "3px 10px",
            width: "20%",
            borderRadius: "30px",
            textAlign: "center",
            position: "absolute",
            top: "17%",
            left: "23%",
          }}
        >
          Accurate understanding and positioning of tech solutions (TS)
        </Typography>
        <Typography
          fontSize={"16px"}
          style={{
            backgroundColor: "rgba(108, 163, 177)",
            color: "rgba(26, 37, 79)",
            padding: "3px 10px",
            width: "20%",
            borderRadius: "30px",
            textAlign: "center",
            position: "absolute",
            top: "29%",
            left: "22.5%",
          }}
        >
          Market insights to identify primary / secondary customers for TS
        </Typography>
        <Typography
          fontSize={"16px"}
          style={{
            backgroundColor: "rgba(108, 163, 177)",
            color: "rgba(26, 37, 79)",
            padding: "3px 10px",
            width: "20%",
            borderRadius: "30px",
            textAlign: "center",
            position: "absolute",
            top: "38%",
            right: "21%",
          }}
        >
          Onboard team, train them and monitor to make them effective
        </Typography>
        <Typography
          fontSize={"16px"}
          style={{
            backgroundColor: "rgba(108, 163, 177)",
            color: "rgba(26, 37, 79)",
            padding: "3px 10px",
            width: "23%",
            borderRadius: "30px",
            textAlign: "center",
            position: "absolute",
            top: "24%",
            right: "19%",
          }}
        >
          Ability to listen to the customer, competition, and get market
          feedback to improve TS
        </Typography>
        <Typography
          fontSize={"16px"}
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "white",
            padding: "4px 13px",
            borderRadius: "30px",
            textAlign: "center",
            position: "absolute",
            top: "71%",
          }}
        >
          HxP
        </Typography>
      </Box>
    </Box>
  );
};

export default HowWeCanHelp;
