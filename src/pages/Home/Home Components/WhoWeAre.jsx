import { Box, Grid2, List, ListItem, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";

const StyledGrid = styled(Grid2)(({ theme }) => ({
  minHeight: "100vh",
  background: "#ffffff",
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  padding: "50px 0px",
  gap: "10vw",
  "&>img": {
    height: "450px",
    width: "450px",
    objectFit: "cover",
    objectPosition: "-150px",
  },
  "&>div": {
    width: "40%",
  },
  [theme.breakpoints.down("lg")]: {
    "&>div": {
      width: "60%",
    },
  },
  [theme.breakpoints.down("md")]: {
    "&>img": {
      height: "300px",
      objectFit: "none",
      width: "300px",
    },
    "&>div": {
      width: "70%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "&>img": {
      height: "225px",
    },
    "&>div": {
      padding: "30px",
      width: "100%",
    },
  },
}));

const WhoWeAre = () => {
  return (
    <StyledGrid container id="whoWeAre">
      <img src="./assets/who_we_are.jpg" style={{ borderRadius: "20px" }} />
      <Box
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "flex-start",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize={"32px"} color="#022A72" fontFamily="Calibri">
            Who We Are...
          </Typography>
        </Box>
        <Typography
          fontSize={"20px"}
          fontWeight={"600"}
          color="#022A72"
          fontFamily="Calibri"
        >
          We are your strategic partner for driving health-tech innovation and
          growth across the United States.
        </Typography>
        <Typography color="#636262" fontFamily="Calibri" fontSize={"18px"}>
          Leveraging decades of expertise in designing, developing, and
          launching digital health solutions, we empower companies to navigate
          the complexities of the U.S. healthcare ecosystem and achieve
          sustainable success.
        </Typography>
        <Typography
          color="#022A72"
          fontSize={"20px"}
          fontWeight={600}
          fontFamily="Calibri"
        >
          What Sets Us Apart?
        </Typography>
        <List sx={{ paddingTop: 0, color: "#636262" }}>
          <ListItem sx={{ paddingTop: "3px", paddingBottom: "3px" }}>
            <Typography fontFamily="Calibri" fontSize={"18px"}>
              <strong>Deep Market Expertise:&nbsp;</strong>
              We provide unparalleled insight into the U.S. healthcare
              landscape, enabling you to craft resonant strategies that drive
              meaningful impact with key decision-makers.
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingTop: "3px", paddingBottom: "3px" }}>
            <Typography fontFamily="Calibri" fontSize={"18px"}>
              <strong>Extensive Network:&nbsp;</strong>
              Our network connects you with providers, payers, investors, and
              other critical stakeholders, unlocking unparalleled growth
              opportunities.
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingTop: "3px", paddingBottom: "3px" }}>
            <Typography fontFamily="Calibri" fontSize={"18px"}>
              <strong>Customized Strategies:&nbsp;</strong>
              We move away from one-size-fits-all solutions by creating tailored
              strategies aligned with your specific business goals, ensuring
              measurable results and sustainable success.
            </Typography>
          </ListItem>
        </List>
        <Typography fontSize={"18px"} fontFamily="Calibri" color="#636262">
          At HxP, we don&#39;t just navigate the healthcare ecosystem—we propel you
          to thrive within it. Let&#39;s build the future of health-tech together..
        </Typography>
        <Link
          to="ourExperts"
          smooth
          style={{
            width: "max-content",
            cursor: "pointer",
          }}
        >
          <Typography color="#F99929" fontFamily="Calibri" fontSize={"18px"}>
            Our Experts &#8594;
          </Typography>
        </Link>
      </Box>
    </StyledGrid>
  );
};

export default WhoWeAre;
