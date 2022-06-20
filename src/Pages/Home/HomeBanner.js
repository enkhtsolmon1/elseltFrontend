import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";

import { Box } from "@mui/system";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import { Card, CardMedia } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: "banner01.jpg",
  },
  {
    imgPath: "banner02.jpg",
  },
  {
    imgPath: "banner03.jpg",
  },
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});

export default function HomeBanner() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    <div>
      <Dialog
        maxWidth="lg"
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={6000}
        >
          {images.map((step, index) => (
            <Card>
              <CardMedia
                component="img"
                image={`http://www.khu.edu.mn:3000/upload/programfiles/${step.imgPath}`}
              />
              <Button
                onClick={() => {
                  handleClose();
                }}
                sx={{ position: "absolute", top: 0.1, right: 0.1 }}
                variant="text"
              >
                X
              </Button>
            </Card>
            // <img
            //   width="100%"
            //   src={`http://www.khu.edu.mn:3000/upload/programfiles/${step.imgPath}`}
            // />
          ))}
        </AutoPlaySwipeableViews>
      </Dialog>
    </div>
  );
}
{
  /* <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={`http://www.khu.edu.mn:3000/upload/programfiles/${step.imgPath}`}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card> */
}
{
  /* <img
                width="100%"
                src={`http://www.khu.edu.mn:3000/upload/programfiles/${step.imgPath}`}
              /> */
}
{
  /* {step.imgPath === "banner01.jpg" && (
                <Button
                  onClick={() => {
                    window.open("http://lms.khu.edu.mn/", "_blank");
                    handleClose();
                  }}
                  sx={{
                    width: 250,
                    color: "#fff",
                    borderRadius: 5,
                    background: "linear-gradient(to right, #a918fa, #6773fa)",
                  }}
                >
                  Бүртгүүлэх
                </Button>
              )} */
}
