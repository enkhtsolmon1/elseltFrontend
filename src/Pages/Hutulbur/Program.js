import React, { useContext, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Stack,
} from "@mui/material";
import ProgramCTX from "../../Context/ProgramContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ReactHtmlParser from "html-react-parser";
import { decode } from "html-entities";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SchoolIcon from "@mui/icons-material/School";
const Program = () => {
  useEffect(() => {
    LoadPrograms();
  }, []);
  const { programState, LoadPrograms, discState, getTags } =
    useContext(ProgramCTX);
  var stud = {};
  var result = programState.programs.reduce(function (r, o) {
    var key = o.form;
    if (!stud[key]) {
      stud[key] = Object.assign({
        name: o.form,
        suragch: [{ ...o }],
      });
      r.push(stud[key]);
    } else {
      stud[key].suragch.push(o);
    }
    return r;
  }, []);
  const [value, setValue] = useState("all");
  const [data, setData] = useState(null);
  console.log(data);
  const handleChange = (event, newValue) => {
    if (newValue === "all") {
      LoadPrograms();
    } else {
      getTags(newValue);
    }
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setData(null);
  };
  return (
    <Container maxWidth="xl">
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <DialogContent>
          {data && (
            <>
              <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "blue" }}
              >
                {/* {data.name}  */}
                Индекс: {data.ndx}
              </Typography>
              {ReactHtmlParser(decode(data.taniltsuulga))}
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" color="primary">
            Бүртгүүлэх
          </Button>
        </DialogActions>
      </Dialog>
      <Stack alignItems="center" mt={5}>
        <Typography sx={{ fontSize: 18 }}>ХӨТӨЛБӨРҮҮД</Typography>
        <Box width={40} borderBottom={2} borderColor="#623CEA"></Box>
        <Box
          sx={{
            width: "100%",
            my: 5,
            maxWidth: "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            centered
          >
            <Tab sx={{ fontSize: 12 }} value="all" label="Бүгдийг харах" />;
            {[
              "Багш мэргэжил",
              "Инженер, технологи",
              "Хууль, эрх зүй",
              "Бизнес, эдийн засаг",
              "Гадаад хэл",
            ].map((el, index) => {
              return (
                <Tab sx={{ fontSize: 12 }} key={index} value={el} label={el} />
              );
            })}
          </Tabs>
        </Box>
      </Stack>

      <Grid container spacing={2}>
        {programState.programs.map((el, index) => {
          return (
            <Grid item xs={12} md={3}>
              <Card sx={{ boxShadow: 0, borderRadius: 0, height: "100%" }}>
                <CardActionArea sx={{ height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`http://khu.edu.mn:3000/upload/images/${el.pathImage}`}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 16,
                        color: "#623CEA",
                        textAlign: "center",
                      }}
                      component="div"
                    >
                      {el.name}
                    </Typography>
                    <Stack mt={1}>
                      <Stack direction="row" spacing={1}>
                        <SchoolIcon color="primary" fontSize="small" />
                        <Typography sx={{ fontSize: 14 }}>
                          {el.EduLevel} ( {el.form} )
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <AccessTimeFilledIcon
                          color="primary"
                          fontSize="small"
                        />
                        <Typography sx={{ fontSize: 14 }}>
                          {el.learningTime} жил
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1}>
                        <LibraryBooksIcon color="primary" fontSize="small" />
                        <Typography sx={{ fontSize: 14 }}>
                          {el.esh.map((el, index) => {
                            return (
                              <Typography key={index} variant="caption">
                                {el.eshHicheel}{" "}
                              </Typography>
                            );
                          })}
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack justifyContent="flex-end" width="100%">
                    <Button
                      onClick={() => {
                        setData({ ...el });
                        handleClickOpen();
                      }}
                      size="small"
                      sx={{
                        fontSize: 10,
                        mx: 10,
                        backgroundColor: "#2C75E4",
                        borderRadius: 5,
                        transition: "0.3s",
                        "&:hover": {
                          mx: 5,
                          backgroundColor: "#FBBC05",
                          color: "#000",
                        },
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Дэлгэрэнгүй үзэх
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Program;
