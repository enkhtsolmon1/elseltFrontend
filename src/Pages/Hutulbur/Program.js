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
import ElseltCTX from "../../Context/ElseltContext";
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
import { useNavigate } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useSnackbar } from "notistack";
const Program = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    LoadPrograms();
  }, []);
  const { programState, LoadPrograms, discState, getTags } =
    useContext(ProgramCTX);
  const { bacheUser, updateBachelors, masterUser, updateMaster } =
    useContext(ElseltCTX);
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
  const [edu, setEdu] = React.useState("");
  const [pform, setPform] = React.useState("");

  const handleChange1 = (event, newAlignment) => {
    if (newAlignment === null) {
      setEdu("");
    } else {
      setEdu(newAlignment);
    }
  };
  const handleChange2 = (event, newAlignment) => {
    if (newAlignment === null) {
      setPform("");
    } else {
      setPform(newAlignment);
    }
  };
  const alertCall = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  // console.log(programState);
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
          {bacheUser.success || masterUser.success ? (
            <Button
              onClick={() => {
                if (bacheUser.success) {
                  if (data.EduLevel === "Бакалавр") {
                    updateBachelors(bacheUser.user._id, {
                      program: data._id,
                      schoolID: data.school_id._id,
                      department: data.department_id_id,
                    });
                    navigate("/profile");
                  } else {
                    alertCall("Бакалаврын хөтөлбөр сонгоно уу!", "warning");
                  }
                } else if (masterUser.success) {
                  if (data.EduLevel !== "Бакалавр") {
                    updateMaster(masterUser.user._id, {
                      program: data._id,
                      schoolID: data.school_id._id,
                      department: data.department_id_id,
                    });
                    navigate("/masterprofile");
                  } else {
                    alertCall(
                      "Магистр, Докторын хөтөлбөр сонгоно уу!",
                      "error"
                    );
                  }
                }
              }}
              variant="contained"
              color="primary"
            >
              Энэ хөтөлбөрийг сонгох
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate("/burtgel");
              }}
              variant="contained"
              color="primary"
            >
              Бүртгүүлэх
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Stack alignItems="center" mt={5}>
        <Typography sx={{ fontSize: 18 }}>ХӨТӨЛБӨРҮҮД</Typography>
        <Box width={40} borderBottom={2} borderColor="#623CEA"></Box>
        <Box
          sx={{
            width: "100%",
            my: 2,
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
            <Tab sx={{ fontSize: 12 }} value="all" label={`Бүгдийг харах`} />;
            {[
              "Багш мэргэжил",
              "Инженер, технологи",
              "Хууль, эрх зүй",
              "Бизнес, эдийн засаг",
              "Гадаад хэл",
              "Боловсрол судлал",
            ].map((el, index) => {
              return (
                <Tab sx={{ fontSize: 12 }} key={index} value={el} label={el} />
              );
            })}
          </Tabs>
        </Box>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ToggleButtonGroup
            color="primary"
            sx={{}}
            size="small"
            value={edu}
            exclusive
            onChange={handleChange1}
          >
            <ToggleButton sx={{ p: 0 }} value="Бакалавр">
              <Box
                sx={{
                  py: 0,
                  m: 0,
                  px: 1,
                  backgroundColor: edu === "Бакалавр" ? "#195EC8" : "",
                  width: "100%",
                  color: edu === "Бакалавр" ? "#fff" : "",
                }}
              >
                Бакалавр -{" "}
                {
                  programState.programs.filter((el) =>
                    el.EduLevel.includes("Бакалавр")
                  ).length
                }{" "}
              </Box>
            </ToggleButton>
            <ToggleButton sx={{ p: 0 }} value="Магистр">
              <Box
                sx={{
                  py: 0,
                  m: 0,
                  px: 1,
                  backgroundColor: edu === "Магистр" ? "#195EC8" : "",
                  width: "100%",
                  color: edu === "Магистр" ? "#fff" : "",
                }}
              >
                Магистр -{" "}
                {
                  // .filter((el) => el.form.includes(pform))
                  programState.programs.filter((el) =>
                    el.EduLevel.includes("Магистр")
                  ).length
                }
              </Box>
            </ToggleButton>
            <ToggleButton sx={{ p: 0 }} value="Доктор">
              <Box
                sx={{
                  py: 0,
                  m: 0,
                  px: 1,
                  backgroundColor: edu === "Доктор" ? "#195EC8" : "",
                  width: "100%",
                  color: edu === "Доктор" ? "#fff" : "",
                }}
              >
                Доктор -{" "}
                {
                  programState.programs.filter((el) =>
                    el.EduLevel.includes("Доктор")
                  ).length
                }
              </Box>
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            sx={{ ml: { xs: 0, sm: 2 }, mt: { xs: 2, sm: 2 } }}
            size="small"
            color="primary"
            value={pform}
            exclusive
            onChange={handleChange2}
          >
            <ToggleButton sx={{ p: 0 }} value="Өдөр">
              <Box
                sx={{
                  py: 0,
                  m: 0,
                  px: 1,
                  backgroundColor: pform === "Өдөр" ? "#195EC8" : "",
                  width: "100%",
                  color: pform === "Өдөр" ? "#fff" : "",
                }}
              >
                Өдөр -{" "}
                {
                  programState.programs
                    .filter((el) => el.EduLevel.includes(edu))
                    .filter((el) => el.form.includes("Өдөр")).length
                }
              </Box>
            </ToggleButton>
            <ToggleButton sx={{ p: 0 }} value="Орой">
              <Box
                sx={{
                  py: 0,
                  m: 0,
                  px: 1,
                  backgroundColor: pform === "Орой" ? "#195EC8" : "",
                  width: "100%",
                  color: pform === "Орой" ? "#fff" : "",
                }}
              >
                Орой -{" "}
                {
                  programState.programs
                    .filter((el) => el.EduLevel.includes(edu))
                    .filter((el) => el.form.includes("Орой")).length
                }
              </Box>
            </ToggleButton>
            <ToggleButton sx={{ p: 0 }} value="Эчнээ">
              <Box
                sx={{
                  py: 0,
                  m: 0,
                  px: 1,
                  backgroundColor: pform === "Эчнээ" ? "#195EC8" : "",
                  width: "100%",
                  color: pform === "Эчнээ" ? "#fff" : "",
                }}
              >
                Эчнээ -{" "}
                {
                  programState.programs
                    .filter((el) => el.EduLevel.includes(edu))
                    .filter((el) => el.form.includes("Эчнээ")).length
                }
              </Box>
            </ToggleButton>
            <ToggleButton sx={{ p: 0 }} value="Хөрвөх">
              <Box
                sx={{
                  py: 0,
                  m: 0,
                  px: 1,
                  backgroundColor: pform === "Хөрвөх" ? "#195EC8" : "",
                  width: "100%",
                  color: pform === "Хөрвөх" ? "#fff" : "",
                }}
              >
                Хөрвөх -{" "}
                {
                  programState.programs
                    .filter((el) => el.EduLevel.includes(edu))
                    .filter((el) => el.form.includes("Хөрвөх")).length
                }
              </Box>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {programState.programs
          .filter((el) => el.EduLevel.includes(edu))
          .filter((el) => el.form.includes(pform))
          .map((el, index) => {
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
                        {el.EduLevel === "Бакалавр" && (
                          <Stack direction="row" spacing={1}>
                            <LibraryBooksIcon
                              color="primary"
                              fontSize="small"
                            />
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
                        )}
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
