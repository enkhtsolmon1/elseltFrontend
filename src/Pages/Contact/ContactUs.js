import React from "react";
import Container from "@mui/material/Container";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
const ContactUs = () => {
  return (
    <Container maxWidth="lg">
      <Box px={2} pt={10}>
        <Grid container>
          <Grid xs={12} md={6}>
            <Stack spacing={4} px={2}>
              <Typography sx={{ fontSize: 18 }}>
                Холбоо барих мэдээлэл
              </Typography>
              <Divider />
              <Stack direction="row" spacing={2}>
                <LocationOnOutlinedIcon
                  sx={{ width: 36, height: 36 }}
                  color="info"
                />
                <Stack>
                  <Typography sx={{ fontSize: 14 }}>
                    <b>Шуудангийн хаяг:</b>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "gray",
                      cursor: "pointer",
                      "&:hover": { color: "blue" },
                    }}
                  >
                    Ховд аймаг, Жаргалант сум 84000
                  </Typography>
                </Stack>
              </Stack>
              <Divider />
              <Grid container>
                <Grid item md={6}>
                  <Stack direction="row" spacing={2}>
                    <LocalPhoneOutlinedIcon
                      sx={{ width: 36, height: 36 }}
                      color="info"
                    />
                    <Stack>
                      <Typography sx={{ fontSize: 14 }}>
                        <b>Утас:</b>
                      </Typography>
                      <Typography
                        onClick={() => {
                          window.location = `tel:7700-6903`;
                        }}
                        sx={{
                          fontSize: 14,
                          color: "gray",
                          cursor: "pointer",
                          "&:hover": { color: "blue" },
                        }}
                      >
                        7700-6903
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item md={6}>
                  <Stack direction="row" spacing={2}>
                    <FacebookOutlinedIcon
                      sx={{ width: 36, height: 36 }}
                      color="info"
                    />
                    <Stack>
                      <Typography sx={{ fontSize: 14 }}>
                        <b>Facebook:</b>
                      </Typography>
                      <Typography
                        onClick={() => {
                          window.open(
                            "https://www.facebook.com/khuedu",
                            "_blank"
                          );
                        }}
                        sx={{
                          fontSize: 14,
                          color: "gray",
                          cursor: "pointer",
                          "&:hover": { color: "blue" },
                        }}
                      >
                        Ховд их сургууль
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <Divider />
              <Grid container>
                <Grid item md={6}>
                  <Stack direction="row" spacing={2}>
                    <EmailOutlinedIcon
                      sx={{ width: 36, height: 36 }}
                      color="info"
                    />
                    <Stack>
                      <Typography sx={{ fontSize: 14 }}>
                        <b>Email:</b>
                      </Typography>
                      <Typography
                        onClick={() => {
                          window.location = `mailto:info@khu.edu.mn`;
                        }}
                        sx={{
                          fontSize: 14,
                          color: "gray",
                          cursor: "pointer",
                          "&:hover": { color: "blue" },
                        }}
                      >
                        info@khu.edu.mn
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item md={6}>
                  <Stack direction="row" spacing={2}>
                    <PublicOutlinedIcon
                      sx={{ width: 36, height: 36 }}
                      color="info"
                    />
                    <Stack>
                      <Typography sx={{ fontSize: 14 }}>
                        <b>Вэб:</b>
                      </Typography>
                      <Typography
                        onClick={() => {
                          window.open("http://khu.edu.mn/", "_blank");
                        }}
                        sx={{
                          fontSize: 14,
                          color: "gray",
                          cursor: "pointer",
                          "&:hover": { color: "blue" },
                        }}
                      >
                        khu.edu.mn
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={4}>
              <Typography sx={{ fontSize: 18 }}>Байршлын мэдээлэл</Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.5466329806177!2d91.64470949724308!3d48.003148161280784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d4e61246b2c3d1b%3A0xbadd28b267440782!2z0KXQvtCy0LQg0JjRhSDQodGD0YDQs9GD0YPQu9GM!5e0!3m2!1smn!2smn!4v1624508725875!5m2!1smn!2smn"
                width="100%"
                height={300}
                allowFullScreen
                frameBorder="0"
              />
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 4 }} />
      </Box>
    </Container>
  );
};

export default ContactUs;
