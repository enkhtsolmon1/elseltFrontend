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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://masterstudy.stylemixthemes.com/ms/wp-content/uploads/sites/4/revslider/home_slider/slide_2.jpg",
  },
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

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Card key={index}>
            <CardMedia image={step.imgPath}>
              <Grid
                sx={{
                  backgroundColor: "rgba(0,0,0,0.2)",
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
                    </Typography>
                    <Button
                      onClick={() => {
                        navigate("/burtgel");
                      }}
                      sx={{ borderRadius: 5 }}
                      variant="contained"
                      color="info"
                    >
                      бүртгүүлэх
                    </Button> */}
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
