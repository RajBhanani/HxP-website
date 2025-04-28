import { Box, Grid2, styled, Typography } from "@mui/material";
import BannerCard from "../../../components/BannerCard";

const BannerBackgroundBox = styled(Box)(({ theme }) => ({
  minHeight: "calc(100vh - 108px)",
  backgroundColor: "red",
  background:
    "url(./src/assets/touching-human-robot-hands-artificial-intelligence-technology.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  [theme.breakpoints.down("lg")]: {
    backgroundPosition: "42% 72%",
    backgroundSize: "cover",
  },
  [theme.breakpoints.down("md")]: {
    backgroundPosition: "center 120%",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "center 130%",
  },
}));

const BannerBox = styled(Box)(({ theme }) => ({
  minHeight: "calc(100vh - 108px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px",
  [theme.breakpoints.down("md")]: {
    padding: "30px 10px",
  },
}));

const Banner = () => {
  return (
    <BannerBackgroundBox id="banner">
      <BannerBox>
        <Typography
          color="white"
          variant="h3"
          fontSize={"45px"}
          fontWeight={600}
          textAlign={"center"}
          lineHeight={"70px"}
        >
          ⁠Partnering for Healthier, Smarter Future
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
              text={"Expanding access, extending care's reach"}
              img={"path-15.svg"}
            />
          </Grid2>
          <Grid2>
            <BannerCard
              text={"Partnering for patient-centered care, everywhere"}
              img={"path-14.svg"}
            />
          </Grid2>
        </Grid2>
      </BannerBox>
    </BannerBackgroundBox>
  );
};

export default Banner;
