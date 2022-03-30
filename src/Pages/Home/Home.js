import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import HomeCarusel from "./HomeCarusel";
import SchoolIcon from "@mui/icons-material/School";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DiamondIcon from "@mui/icons-material/Diamond";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WhySchool from "./WhySchool";
const Home = () => {
  return (
    <>
      <HomeCarusel />
      <Container maxWidth="lg">
        <Grid container>
          {[
            {
              title: "СУРГАЛТЫН ЧИГЛЭЛТ",
              body: "Your chance to be a trending expert in IT industries and make a successful career after completion of our courses.",
              color: "#10C45C",
              icon: <SchoolIcon fontSize="large" />,
            },
            {
              title: "НОМ, НОМЫН САН",
              body: "Ховд их сургууль бол 10 сая гаруй ном, кино болон бусад зүйлсийг зээлж авах боломжтой, дэлхийн хамгийн завгүй нийтийн номын сангийн нэг юм.",
              color: "#FDC735",
              icon: <BookmarksIcon fontSize="large" />,
            },
            {
              title: "МЭРГЭШСЭН БАГШ НАР",
              body: "Get professional education and reliable consultation by our team of certified teachers and instructors.",
              color: "#307AD5",
              icon: <DiamondIcon fontSize="large" />,
            },
            {
              title: "CERTIFICATION",
              body: "Upon successful completion receive a certificate showing your achievement for completing one of our rigorous classes.",
              color: "#E948AE",
              icon: <WorkspacePremiumIcon fontSize="large" />,
            },
          ].map((el, index) => {
            return (
              <Grid item xs={12} md={3}>
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: el.color,
                    color: "#ffffff",
                    height: 200,

                    mt: { xs: 0, md: -15 },
                    position: "sticky",
                    "&:hover": {
                      mt: -20,
                    },
                    transition: "0.3s",
                  }}
                >
                  <Stack spacing={1} justifyContent="center">
                    {el.icon}
                    <Typography sx={{ fontSize: 18 }}>
                      <b>{el.title}</b>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}>{el.body}</Typography>
                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      {/* <Box height={400} bgcolor="#ffffff" my={2}>
        <Stack alignItems="center">
          <Typography variant="h5" sx={{}}>
            ХӨНГӨЛӨЛТ УРАМШУУЛАЛ
          </Typography>
          <Box width={40} borderBottom={3} borderColor="#FDC735"></Box>
        </Stack>
      </Box> */}
      <WhySchool />
    </>
  );
};

export default Home;
