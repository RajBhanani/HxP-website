import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItemButton,
  styled,
  Typography,
} from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  background: "rgba(2, 42, 114)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "150px 50px 50px 50px",
  gap: "50px",
  "& .desktopView": { display: "flex", width: "90%", justifyContent: "center" },
  "& .mobileView": { display: "none" },
  "& img": {
    width: "99vw",
    height: "100vh",
    objectFit: "cover",
  },
  [theme.breakpoints.down("md")]: {
    gap: "25px",
    "& .desktopView": {
      width: "100%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .desktopView": {
      display: "none",
    },
    "& .mobileView": {
      display: "block",
    },
  },
}));

const FloatingTextBox = styled(Box)(({ theme }) => ({
  zIndex: 1,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 80px",
  color: "white",
  position: "absolute",
  top: 0,
  "& > div > p": {
    fontSize: "20px",
    borderBottom: "1px solid white",
    padding: "20px 10px",
    width: "450px",
  },
  [theme.breakpoints.down("lg")]: {
    "& > div > p": {
      width: "350px",
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "40px",
    "& > div > p": {
      fontSize: "16px",
      width: "250px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "& > div > p": {
      fontSize: "16px",
      width: "100%",
    },
  },
}));

const BrandText = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  position: "absolute",
  color: "white",
  fontSize: "24px",
  bottom: "23%",
  [theme.breakpoints.down("xl")]: {
    bottom: "26%",
  },
}));

const HowWeCanHelpYou = ({ offer, setOffer }) => {
  const content = [
    {
      heading: "Market Analysis & Competitive Positioning",
      details:
        "Gain clarity in a crowded market. We conduct in-depth addressable market evaluations and identify displacement opportunities to position your brand for success. By analyzing competitors, influencers, and optimal price points, we help you carve out a distinct and compelling market presence.",
    },
    {
      heading: "Ecosystem Mapping & Customer Dynamics",
      details:
        "Navigate the healthcare ecosystem with confidence. We differentiate between primary and secondary customers, crafting strategies for both B2B and B2C engagements. Our tailored approaches ensure you effectively address the unique needs of your target audience.",
    },
    {
      heading: "Sales & Marketing Strategy",
      details:
        "Turn vision into action. We design region-specific sales and marketing strategies, complete with forecasts and projections, to drive awareness and market penetration. From targeted campaigns to building high-performing sales and marketing teams, we ensure your business exceeds its growth targets.",
    },
    {
      heading: "Customer Engagement & Business Development",
      details:
        "Build meaningful connections. We engage directly with end customers to generate new business opportunities and collect actionable feedback. This enables you to refine your offerings, strengthen your market position, and create lasting customer relationships.",
    },

    {
      heading: "Operational & Post-Sales Support",
      details:
        "Deliver excellence beyond the sale. From addressing last-mile delivery challenges to providing customer training and IT system integration, we ensure seamless product adoption. Our tailored support solutions help you build trust and long-term loyalty with your customers.",
    },
  ];

  return (
    <StyledBox id="howWeCanHelpYou">
      <Box className="desktopView">
        <List style={{ width: "100%", padding: 0 }}>
          {content.map((el, idx) => {
            return (
              <ListItemButton
                key={idx}
                onClick={() => setOffer(idx)}
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  color: offer === idx ? "rgba(2, 42, 114)" : "white",
                  backgroundColor: offer === idx ? "white" : "transparent",
                }}
              >
                <Typography
                  fontWeight={600}
                  fontFamily="Calibri"
                  fontSize={"20px"}
                >
                  {el.heading}
                </Typography>
              </ListItemButton>
            );
          })}
        </List>
        <Box style={{ background: "white", width: "100%", padding: "30px" }}>
          <Typography fontSize={"20px"} fontFamily="Calibri">
            {content[offer].details}
          </Typography>
        </Box>
      </Box>
      <Box className="mobileView">
        {content.map((el, idx) => {
          return (
            <Accordion key={idx}>
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "rgba(2, 42, 114)" }} />}
              >
                <Typography
                  fontFamily="Calibri"
                  fontWeight={600}
                  color="rgba(2, 42, 114)"
                >
                  {el.heading}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontFamily="Calibri">{el.details}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
            color: "white",
            gap: "20px",
          }}
        >
          <Typography fontSize={"32px"} fontFamily="Calibri">
            What We Deliver
          </Typography>
          <Typography fontSize={"18px"} fontFamily="Calibri">
            At HxP, we understand that every business is unique. That&#39;s why
            we offer flexible, tailored solutions designed to address your
            specific needs. Whether you require a single service or a
            combination of our offerings, we collaborate with you to deliver
            exactly what your business requires to succeed.
          </Typography>
        </Box>
        <Box style={{ position: "relative" }}>
          <FloatingTextBox>
            <Box>
              <Typography fontFamily="Calibri" textAlign={"right"}>
                Winning Strategic Positioning
              </Typography>
              <Typography fontFamily="Calibri" textAlign={"right"}>
                Data-Driven Market Adoption
              </Typography>
            </Box>
            <Box>
              <Typography fontFamily="Calibri">
                Achieving Business Milestones
              </Typography>
              <Typography fontFamily="Calibri">
                High-Performance Team Development
              </Typography>
            </Box>
          </FloatingTextBox>
          <Box style={{ position: "relative" }}>
            <img src="./src/assets/Group 178@2x(1).png" />
            <BrandText>HxP</BrandText>
          </Box>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default HowWeCanHelpYou;
