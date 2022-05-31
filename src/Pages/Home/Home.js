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
import HomeBanner from "./HomeBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCarusel />
      <Container maxWidth="lg">
        <Grid container>
          {[
            {
              title: "АЛСЫН ХАРАА",
              body: "Тогтвортой хөгжлийн үзэл баримтлалыг үйл ажиллагаандаа нэвтрүүлсэн бүс нутгийн хөгжлийн тулгуур салбаруудын эрэлт хэрэгцээг хангах чадвар бүхий судалгааны тэргүүлэгч их сургууль болно.",
              color: "#10C45C",
              icon: <SchoolIcon fontSize="large" />,
            },
            {
              title: "ЭРХЭМ ЗОРИЛГО",
              body: "Алтайн бүсийн тогтвортой хөгжлийн хэрэгцээг хангах, тасралтгүй хөгжих чадвартай, төлөвшсөн мэргэжилтэн, судлаачдыг бэлтгэж, орон нутгийн хөгжлийг загварчлагч сургалт, судалгааны их сургууль байна.",
              color: "#FDC735",
              icon: <BookmarksIcon fontSize="large" />,
            },
            {
              title: "ЧАНАРЫГ ЭРХЭМЛЭГЧ",
              body: "Бидний сургаж, хүмүүжүүлсэн оюутан суралцагчид нийгмийн баялгийг бүтээгчид болох тул энэхүү хариуцлагатай үүргээ гүнээ ухамсарлаж, аливаад чин сэтгэлээсээ хандан, чанартай үр дүнгийн төлөө зорилготойгоор хөдөлмөрлөхийг эрхэмлэнэ.",
              color: "#307AD5",
              icon: <DiamondIcon fontSize="large" />,
            },
            {
              title: "МАНЛАЙЛЛЫГ ЭРХЭМЛЭГЧ",
              body: "Шинэ санал, санаачилгыг өдөөн урамшуулж, оновчтой шийдэл, зөв хэвшлийг нэвтрүүлэхийг нийтээр дэмжиж, бүтээлч үйл ажиллагаагаар бусдыгаа үлгэрлэхийг эрхэмлэнэ.",
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
                    <Typography sx={{ fontSize: 16 }}>
                      <b>{el.title}</b>
                    </Typography>
                    <Typography sx={{ fontSize: 12, textAlign: "justify" }}>
                      {el.body}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            );
          })}{" "}
        </Grid>
        <Grid xs={12}>
          <Stack alignItems="center" my={3} spacing={0.5}>
            <Typography variant="h5">ХӨНГӨЛӨЛТ УРАМШУУЛАЛ</Typography>
            <Box width={80} borderBottom={2} borderColor="#2C75E4"></Box>
          </Stack>
        </Grid>

        {/* ----------------------- */}
      </Container>
      <Grid container>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <Box
            width="100%"
            height={300}
            sx={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url(http://www.khu.edu.mn:3000/upload/programfiles/banner02.jpg)",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          ></Box>
          {/* <img
            sx={{ "&:hover": { transform: "scale(1.5)" } }}
            width="100%"
            src="http://www.khu.edu.mn:3000/upload/programfiles/banner02.jpg"
            alt=""
          /> */}
        </Grid>{" "}
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <Box
            width="100%"
            height={300}
            sx={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url(http://www.khu.edu.mn:3000/upload/programfiles/banner03.jpg)",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          ></Box>
          {/* <img
            width="100%"
            src="http://www.khu.edu.mn:3000/upload/programfiles/banner03.jpg"
            alt=""
          /> */}
        </Grid>{" "}
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <Box
            width="100%"
            height={300}
            sx={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url(http://www.khu.edu.mn:3000/upload/programfiles/banner01.jpg)",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          ></Box>
          {/* <img
            width="100%"
            src="http://www.khu.edu.mn:3000/upload/programfiles/banner01.jpg"
            alt=""
          /> */}
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: "#F0F4FA", color: "#273044" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box p={2}>
                <Stack spacing={4}>
                  <Typography sx={{ textAlign: "center" }} variant="h6">
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
                  <Typography sx={{ textAlign: "center" }} variant="h6">
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
          </Grid>
        </Container>
      </Box>

      <WhySchool />
    </>
  );
};

export default Home;
