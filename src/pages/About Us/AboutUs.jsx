import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ValuesCard from "./About Us Components/ValuesCard";
import ExpertCard from "./About Us Components/ExpertCard";

const AboutUs = () => {
  const isMd = useMediaQuery("(max-width: 900px)");
  return (
    <Box>
      <Box
        style={{
          // width: "100vw",
          height: "40vh",
          background:
            "url(./src/assets/doctors-wearing-vr-simulation-with-hologram-medical-technology.jpg)",
          backgroundPosition: "0% 20%",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Typography
          variant="h1"
          style={{
            borderLeft: "10px solid rgb(26, 37, 79)",
            padding: "0px 30px",
            color: "white",
            background: "rgb(108, 163, 177, 0.7)",
            fontSize: isMd ? "60px" : "96px",
          }}
        >
          About Us
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          gap: "30px",
        }}
      >
        <Typography
          variant="h2"
          fontSize={isMd ? "20px" : "26px"}
          fontWeight={"600"}
          color="rgb(70, 84, 137)"
          textAlign={"center"}
        >
          Specialized in empowering Globally Expanding Companies to establish
          and grow their footprint in North America.
        </Typography>
        <Typography
          fontSize={isMd ? "16px" : "18px"}
          lineHeight={"1.8"}
          color="rgb(112, 112, 112)"
          textAlign={"center"}
        >
          HealthX Partner (HxP) LLC is a consulting firm dedicated to supporting
          Globally Expanding Companies (GECs) in establishing and expanding
          their presence in North America. The healthcare marketplace is complex
          and saturated with countless products and services. HxP equips GECs
          with strategic insights, expertise, and connections to stand out and
          succeed. HxP ensures GECs differentiate themselves and achieve
          measurable success, driving both short- and long-term business growth
          in targeted regions.
        </Typography>
      </Box>
      <Box
        style={{
          backgroundColor: "rgb(225, 225, 225)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          gap: "30px",
        }}
      >
        <Typography fontSize={"24px"}>Our Values</Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: isMd ? "column" : "row",
            justifyContent: "center",
            alignItems: "space-evenly",
            gap: "50px",
          }}
        >
          <ValuesCard
            isMd={isMd}
            img={"2149611207.jpg"}
            heading={"Our Vision"}
            text={
              "Contribute in making healthcare efficient and accessible for everyone"
            }
            details={
              "Lorem ipsum is a dummy or placeholder text commonly used in graphic design. Lorem ipsum is a dummy or placeholder text commonly used in graphic design"
            }
          />
          <ValuesCard
            isMd={isMd}
            img={"102969.jpg"}
            heading={"Our Mission"}
            text={"Decentralize Care and Empower Lives"}
            details={
              "Lorem ipsum is a dummy or placeholder text commonly used in graphic design. Lorem ipsum is a dummy or placeholder text commonly used in graphic design"
            }
          />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "30px",
          padding: "50px",
        }}
      >
        <Typography fontSize={"18px"} color="rgb(125,125,125)">
          Our Experts
        </Typography>
        <Typography
          fontSize={"20px"}
          color="rgb(105,105,105)"
          fontWeight={"600"}
        >
          Investors & Industry Advisors
        </Typography>
        <Box
          style={{
            width: "100%",
            margin: "50px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "100px",
            color: "rgb(112, 112, 112)",
          }}
        >
          <ExpertCard
            isMd={isMd}
            img={"dhaval_jani.png"}
            name={"Dhaval Jani"}
            title={"Founder & CEO"}
            subtitle={"HealthX Partner"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita"
            }
          />
          <ExpertCard
            isMd={isMd}
            img={"stuart_gilchrist.png"}
            name={"Stuart Gilchrist"}
            title={"Health & Public Service Connector"}
            subtitle={"Innovator, Collaborator and Investor"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita"
            }
          />
          <ExpertCard
            isMd={isMd}
            img={"jim_sullivan.png"}
            name={"Jim Sullivan"}
            title={"Chief Technologist, Booz Allen Hamilton"}
            subtitle={"Health Account Group"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita"
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
