import { Box, Grid2, styled, Typography } from "@mui/material";
import BannerCard from "../../../components/BannerCard";

const BannerBackgroundBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background:
    "url(./assets/touching-human-robot-hands-artificial-intelligence-technology.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  [theme.breakpoints.down("lg")]: {
    backgroundPosition: "42% 72%",
    backgroundSize: "cover",
  },
  [theme.breakpoints.down("md")]: {
    backgroundPosition: "center 120%",
    minHeight: "100vh",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "center 130%",
  },
}));

const BannerBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px",
  [theme.breakpoints.down("md")]: {
    padding: "30px 10px",
    minHeight: "100vh",
  },
}));

const Banner = () => {
  return (
    <BannerBackgroundBox id="banner">
      <BannerBox>
        <Typography
          color="white"
          variant="h3"
          fontSize={"47px"}
          fontWeight={600}
          textAlign={"center"}
          lineHeight={"70px"}
          fontFamily={"Calibri"}
        >
          ⁠Partnering for a Healthier, Smarter Future
        </Typography>
        <Grid2 container gap={3} justifyContent={"center"}>
          <Grid2>
            <BannerCard
              text={"Scaling for Efficient Care Delivery"}
              img={"path-16.svg"}
            />
          </Grid2>
          <Grid2>
            <BannerCard
              text={"Expanding access, extending care"}
              img={"path-15.svg"}
            />
          </Grid2>
          <Grid2>
            <BannerCard
              text={"Partnering for patient-centered care"}
              img={"path-14.svg"}
            />
          </Grid2>
        </Grid2>
      </BannerBox>
    </BannerBackgroundBox>
  );
};

export default Banner;
