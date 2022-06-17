import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";

const Juram = () => {
  return (
    <Container maxWidth="md">
      <Stack alignItems="center" mt={5} spacing={2}>
        <Typography sx={{ fontSize: 18, textTransform: "uppercase" }}>
          Оюутан элсүүлэх журам
        </Typography>
        <Box width={40} borderBottom={2} borderColor="#623CEA"></Box>{" "}
        <iframe
          src="https://drive.google.com/file/d/1BUqelF_EzoAKTocTQ2A7LfSE0tEiMVhz/preview"
          width="100%"
          height="600px"
        ></iframe>
      </Stack>
    </Container>
  );
};

export default Juram;
