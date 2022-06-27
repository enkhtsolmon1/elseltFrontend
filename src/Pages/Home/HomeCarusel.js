import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Card, CardMedia, Grid, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Login from "../Auth/Login";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "2",
    imgPath: "http://www.khu.edu.mn:3000/upload/programfiles/elseltHome.jpg",
  },
  // {
  //   label: "2",
  //   imgPath: "http://www.khu.edu.mn:3000/upload/programfiles/elseltHome2.jpg",
  // },
];

function HomeCarusel() {
  const navigate = useNavigate();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
          Нэвтрэх хэсэг
        </DialogTitle>
        <DialogContent>
          <Login handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={6000}
      >
        {images.map((step, index) => (
          <Card key={index}>
            <CardMedia image={step.imgPath}>
              <Grid
                sx={{
                  pt: 20,
                  backgroundColor: "rgba(0,0,0,0.09)",
                  color: "#fff",
                }}
                item
                xs={12}
              >
                <Container maxWidth="md">
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: 550, textAlign: "center" }}
                  >
                    {/* <Typography
                      sx={{ fontSize: { xs: 20, md: 48 }, color: "#FDC735" }}
                    >
                      Welcome to Khovd university
                    </Typography> */}
                    <Button
                      size="large"
                      onClick={() => {
                        handleClickOpen();
                      }}
                      sx={{
                        borderRadius: 5,
                        marginTop: { xs: 50, md: 30 },
                        width: 350,
                      }}
                      variant="contained"
                      color="info"
                    >
                      Нэвтрэх
                    </Button>
                  </Stack>
                </Container>
              </Grid>
            </CardMedia>
          </Card>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default HomeCarusel;
