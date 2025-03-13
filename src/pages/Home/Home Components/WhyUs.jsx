import {
  Box,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

const WhyUs = () => {
  const partners = [
    {
      name: "sword",
      heading: "Sword Health",
      details: "lorem ipsum",
      img: "sword_health.png",
    },
    {
      name: "care",
      heading: "Care Predict",
      details: "",
      img: "care_predict.png",
    },
    { name: "dozee", heading: "Dozee", details: "", img: "dozee.png" },
    { name: "hintvr", heading: "HintVR", details: "", img: "hintvr.png" },
  ];

  const [partner, setPartner] = useState(0);

  return (
    <Box
      id={"why"}
      style={{
        // height: "100vh",
        background: "rgb(245, 245, 245)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // justifyContent: "space-evenly",
        alignItems: "flex-start",
        padding: "50px",
        gap: "50px",
      }}
    >
      <Box mt={"35px"}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontSize: "30px",
              fontWeight: "600",
              padding: "3px 13px",
              backgroundColor: "rgba(70, 84, 137)",
              color: "white",
              borderRadius: "30px",
            }}
          >
            Why
          </Typography>
          <Typography variant="h2" fontSize={"30px"} color="rgba(70, 84, 137)">
            &nbsp;us...
          </Typography>
        </Box>
        <List>
          <ListItem>
            <Typography>
              HxP has 100+ years of techno-clinical experience
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Decades of experience working with market leaders in MedTech,
              BioPharma and Healthcare organizations from ideation to finished
              digital health / therapeutic products
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Instrumental in working with physician specialists to set up their
              remote / home monitoring nurse assisted clinics
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Experience in taking care of market dynamics while managing
              product failures / recalls.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              We have expertise in setting expectations for care models while
              exceeding business outcomes
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box style={{ display: "flex" }}>
        <Box
          style={{
            padding: "10px 15px",
            width: "50%",
            backgroundColor: "rgba(26, 37, 79)",
            color: "white",
          }}
        >
          <Typography fontSize={"20px"} fontWeight={600}>
            Industry view:
          </Typography>
          <Typography fontSize={"17px"}>
            Focus is reimbursements from clinic visits, diagnostics,
            medications, procedures while the Patient Centricity is a by-product
          </Typography>
        </Box>
        <Box
          style={{
            padding: "10px 15px",
            width: "50%",
            backgroundColor: "rgba(62, 139, 157)",
            color: "white",
          }}
        >
          <Typography fontSize={"20px"} fontWeight={600}>
            Our view:
          </Typography>
          <Typography fontSize={"17px"}>
            Patient Centricity at the core. A patient or their family member
            decides when to visit a doctor or other actions
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px"
        }}
      >
        <Typography variant="h3" fontSize={"28px"}>
          Our Partners
        </Typography>
        <Box
          style={{
            width: "80%",
            backgroundColor: "rgba(2, 42, 114)",
            padding: "20px",
          }}
        >
          <List sx={{ display: "flex", padding: "0px" }}>
            {partners.map((el, idx) => {
              return (
                <ListItemButton
                  key={idx}
                  onClick={() => setPartner(idx)}
                  style={{
                    justifyContent: "center",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    color: partner === idx ? "rgba(2, 42, 114)" : "white",
                    backgroundColor: partner === idx ? "white" : "transparent",
                  }}
                >
                  <Typography fontWeight={600}> {el.heading} </Typography>
                </ListItemButton>
              );
            })}
          </List>
          <Box style={{ display: "flex" }}>
            <Typography
              style={{
                width: "100%",
                backgroundColor: "white",
                padding: "20px",
              }}
            >
              {partners[partner].details}
            </Typography>
            <img
              src={`./src/assets/${partners[partner].img}`}
              alt="Partner image"
              height={"250px"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUs;
