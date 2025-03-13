import { Box, List, ListItemButton, Typography } from '@mui/material';
import { useState } from 'react'

const WhatWeCanDo = () => {
  const content = [
    {
      heading: "Market Analysis & Competitive Positioning",
      details:
        "Conduct addressable market evaluations and analyze displacement opportunities. Identify key competitors, influencers, and optimal price points for differentiation",
    },
    {
      heading: "Sales & Marketing Strategy",
      details:
        "Develop region-specific sales and marketing strategies, including forecasts and projections. Design targeted initiatives to raise awareness and drive market penetration. Establish sales and marketing teams to meet and exceed sales targets.",
    },
    {
      heading: "Customer Engagement & Business Development",
      details:
        "Engage directly with end customers to generate new business opportunities. Collect actionable feedback to enable GECs to refine their offerings and strengthen their market position.",
    },
    {
      heading: "Ecosystem Mapping & Customer Dynamics",
      details:
        "Differentiate between primary and secondary customers within the healthcare ecosystem. Develop strategies for both B2B and B2C engagements, tailoring approaches to the target audience.",
    },
    {
      heading: "Operational & Post-Sales Support",
      details:
        "Address last-mile delivery challenges, including customer training and IT system integration. Ensure seamless product adoption and usage through tailored support solutions.",
    },
  ];

  const [area, setArea] = useState(0);

  return (
    <Box
      id={"what"}
      style={{
        height: "100vh",
        background: "rgba(2, 42, 114)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h2"
            style={{
              fontSize: "30px",
              fontWeight: "600",
              padding: "3px 13px",
              backgroundColor: "white",
              color: "rgba(2, 42, 114)",
              borderRadius: "30px",
            }}
          >
            What
          </Typography>
          <Typography variant="h2" fontSize={"30px"} color="white">
            &nbsp;we can do for you...
          </Typography>
        </Box>
        <Typography
          fontSize={"21px"}
          color="white"
          lineHeight={"1.8"}
          fontWeight={600}
        >
          HxP Empowering Competitive Positioning
        </Typography>
        <Typography fontSize={"16px"} color="white" lineHeight={"1.8"}>
          The healthcare marketplace is intricate and crowded, featuring a
          multitude of products, solutions, and services. HealthX Partner (HxP)
          offers unparalleled market insights, expertise, and strategic
          relationships to help Globally Expanding Companies (GECs) effectively
          position their B2B or B2C offerings against the competition.
        </Typography>
      </Box>
      <Box style={{ display: "flex", width: "70%", justifyContent: "center" }}>
        <List style={{ width: "100%", padding: 0 }}>
          {content.map((el, idx) => {
            return (
              <ListItemButton
                key={idx}
                onClick={() => setArea(idx)}
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  color: area === idx ? "rgba(2, 42, 114)" : "white",
                  backgroundColor: area === idx ? "white" : "transparent",
                }}
              >
                <Typography fontWeight={600}>{el.heading}</Typography>
              </ListItemButton>
            );
          })}
        </List>
        <Box style={{ background: "white", width: "100%", padding: "30px" }}>
          <Typography>{content[area].details}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeCanDo