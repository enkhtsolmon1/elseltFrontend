import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const WhySchool = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box height={400} bgcolor="#fff" my={2} p={4}>
      <Dialog maxWidth="lg" fullWidth open={open} onClose={handleClose}>
        <iframe
          width="100%"
          height="800"
          src="https://www.youtube.com/embed/9a61EGARwFQ"
          title="Ховд их сургууль"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Dialog>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              borderRadius={2}
              width="100%"
              height={400}
              sx={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                  "url(http://khu.edu.mn:3000/upload/images/school_5f79236c2e13c437e888fe21.jpg)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(0.98)",
                },
              }}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                height="100%"
                sx={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 2 }}
                onClick={() => {
                  handleClickOpen();
                }}
              >
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    cursor: "pointer",
                    backgroundColor: "#BD122D",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.5)",
                    },
                  }}
                >
                  <PlayCircleIcon fontSize="large" />
                </Avatar>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1} alignItems="flex-start">
              <Typography sx={{ fontSize: 18, color: "#2C75E4" }}>
                ЯАГААД БИДНИЙГ СОНГОХ ВЭ?
              </Typography>
              <Typography sx={{ fontSize: 36 }}>
                Яагаад Ховд их сургууль
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim ad minim veniam magna aliqua eiusmod tempor.
              </Typography>
              <Grid container>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={1}>
                    <CheckIcon color="primary" fontSize="small" />
                    <Typography sx={{ fontSize: 14 }}>
                      Бакалаврын хөтөлбөрүүд
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <CheckIcon color="primary" fontSize="small" />
                    <Typography sx={{ fontSize: 14 }}>
                      Төгсөлтийн хөтөлбөрүүд
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <CheckIcon color="primary" fontSize="small" />
                    <Typography sx={{ fontSize: 14 }}>
                      Докторын зэрэг
                    </Typography>
                  </Stack>
                  <Typography variant="h2">40+</Typography>
                  <Typography>Олон жилийн туршлага</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={1}>
                    <CheckIcon color="primary" fontSize="small" />
                    <Typography sx={{ fontSize: 14 }}>
                      Олон улсын төвүүд
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <CheckIcon color="primary" fontSize="small" />
                    <Typography sx={{ fontSize: 14 }}>
                      Дэлхийн оюутнууд
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <CheckIcon color="primary" fontSize="small" />
                    <Typography sx={{ fontSize: 14 }}>Төгсөгчид</Typography>
                  </Stack>
                  <Typography variant="h2">5K+</Typography>{" "}
                  <Typography>Төгсөгчид</Typography>
                </Grid>
              </Grid>
              <Button
                sx={{
                  backgroundColor: "#2C75E4",
                  borderRadius: 0,
                  transition: "0.3s",
                  "&:hover": {
                    ml: 1,
                    backgroundColor: "#FDC735",
                    color: "#000",
                  },
                }}
                variant="contained"
                color="primary"
              >
                Дэлгэрэнгүй мэдээлэл
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhySchool;