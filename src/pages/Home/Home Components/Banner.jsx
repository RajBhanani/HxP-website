import { Box, Grid2, styled, Typography } from "@mui/material";
import BannerCard from "../../../components/BannerCard";

const BannerBackgroundBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: "red",
  background: "url(./src/assets/synthetic-8597464_1920.jpg)",
  backgroundPosition: "10% 62%",
  backgroundSize: "120%",
  [theme.breakpoints.down("lg")]: {
    backgroundPosition: "42% 72%",
    backgroundSize: "cover",
  },
  [theme.breakpoints.down("md")]: {
    backgroundPosition: "40% 50%",
    backgroundSize: "cover",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "42% 102%",
    backgroundSize: "540%",
  },
}));

const BannerBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",
  padding: "100px",
  [theme.breakpoints.down("md")]: {
    padding: "30px 10px",
  },
}));

const BannerTextBox = styled(Box)(({ theme }) => ({
  // width: "60%",
  padding: "20px",
  backgroundColor: "rgb(26, 37, 79, 0.6)",
  [theme.breakpoints.down("lg")]: {
    width: "90%",
    marginTop: "66px",
  },
}));

const Banner = () => {
  return (
    <BannerBackgroundBox id="banner">
      <BannerBox>
        <BannerTextBox>
          <Typography color="white" fontSize={"1.5rem"}>
            Our Motto
          </Typography>
          <Typography
            color="white"
            variant="h3"
            fontSize={"2.5rem"}
            fontWeight={600}
          >
            Preserve life, enable tools to guide and brighten one's life
          </Typography>
        </BannerTextBox>
        <Grid2 container gap={3} justifyContent={"center"}>
          <Grid2>
            <BannerCard
              text={"Efficient and accessible healthcare for everyone"}
              img={"hands-brain.svg"}
            />
          </Grid2>
          <Grid2>
            <BannerCard
              text={"Empowering lives by decentralizing care"}
              img={"heart-health-muscle.svg"}
            />
          </Grid2>
          <Grid2>
            <BannerCard
              text={"Technology for patient-centered health"}
              img={"head-side-virus.svg"}
            />
          </Grid2>
        </Grid2>
      </BannerBox>
    </BannerBackgroundBox>
  );
};

export default Banner;
