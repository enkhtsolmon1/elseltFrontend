import { Box, Button, Grid, IconButton } from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
const Photos = () => {
  const [open, setOpen] = React.useState(false);
  const [img, setImg] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <IconButton
          onClick={() => {
            handleClose();
          }}
          sx={{ position: "absolute", top: 1, right: 1 }}
        >
          <CloseIcon color="warning" />
        </IconButton>
        <img
          width="100%"
          src={`http://www.khu.edu.mn:3000/upload/programfiles/${img}.JPG`}
          alt={img}
        />
      </Dialog>
      <Grid container>
        {[
          "els1",
          //   "els2",
          // "els3",
          // "els4",
          "els5",
          "els6",
          "els7",
          "els8",
          "els9",
          "els10",
          "els11",
          "els12",
          "els13",
          "els14",
          "els15",
          "els16",
          "els17",
          "els18",
          "els19",
        ].map((el, index) => {
          return (
            <Grid key={index} item xs={12} md={4}>
              <Box
                p={3}
                onClick={() => {
                  setImg(el);
                  handleClickOpen();
                }}
              >
                <img
                  width="100%"
                  src={`http://www.khu.edu.mn:3000/upload/programfiles/${el}.JPG`}
                  alt={el}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Photos;
