import { Avatar, Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import HomeCarusel from "./HomeCarusel";
import SchoolIcon from "@mui/icons-material/School";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DiamondIcon from "@mui/icons-material/Diamond";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WhySchool from "./WhySchool";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

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
          <Grid xs={12}>
            <Stack alignItems="center" my={5} spacing={0.5}>
              <Typography variant="h5">ХӨНГӨЛӨЛТ УРАМШУУЛАЛ</Typography>
              <Box width={80} borderBottom={2} borderColor="#2C75E4"></Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={2}>
              <Stack spacing={4}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  color="initial"
                >
                  Ховд их сургуулийн тэтгэлэг, хөнгөлөлт
                </Typography>
                {[
                  "“ХИС-ийн захирлын нэрэмжит тэтгэлэг” - ЭЕШ-ийн 750-аас дээш оноотой элсэгчид 4 жил сургалтын төлбөрийг 100% чөлөөлнө",
                  "ХИС-ийн удирдах зөвлөлийн даргын тэтгэлэг",
                  "ЭЕШ-ийн 650-аас дээш оноотой багш мэргэжлээр элсэгчид, 4 жил сургалтын төлбөр 100% чөлөөлнө",
                  "ЭЕШ-ийн 600-749 оноотой элсэгчид эхний жил сургалтын төлбөрийг 50% чөлөөлнө",
                  "500-599 оноотой элсэгчийн эхний жил сургалтын төлбөрийг 50% чөлөөлнө",
                  "Хөгжлийн бэрхшээлтэй болон бүтэн өнчин элсэгчийг нэн тэргүүнд Боловсролын зээлийн санд хамруулна",
                  "Ховд аймгийн Засаг даргын нэрэмжит тэтгэлэг, хөнгөлөлт",
                ].map((el, index) => {
                  return (
                    <Stack key={index} direction="row" spacing={3}>
                      <CheckCircleOutlineIcon
                        color="primary"
                        fontSize="small"
                      />
                      <Typography sx={{ fontSize: 14, textAlign: "justify" }}>
                        {el}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={2}>
              <Stack spacing={4}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  color="initial"
                >
                  Боловсролын зээлийн сангийн буцалтгүй тусламж
                </Typography>
                {[
                  "Хөдөлмөрийн чадвараа бүрэн алдсан гишүүнтэй  өрхийн нэг суралцагч",
                  "ХИС-ийн удирдах зөвлөлийн даргын тэтгэлэг",
                  "Өөрөө хөгжлийн бэрхшээлтэй суралцагч",
                  "Бүтэн өнчин суралцагч",
                  "Эцэг, эх нь хоёулаа хөгжлийн бэрхшээлтэй суралцагч",
                  "Цаатан өрхийн суралцагч",
                  "Багшлах дадлагын тэтгэлэг",
                  "Замын зардал",
                ].map((el, index) => {
                  return (
                    <Stack key={index} direction="row" spacing={3}>
                      <CheckCircleOutlineIcon
                        color="primary"
                        fontSize="small"
                      />
                      <Typography sx={{ fontSize: 14, textAlign: "justify" }}>
                        {el}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Box>
          </Grid>
          {/* ----------------------- */}
          <WhySchool />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
