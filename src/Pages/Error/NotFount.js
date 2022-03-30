import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";

const NotFount = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        sx={{ height: "50vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" color="error">
          ERROR! PAGE NOT FOUND
        </Typography>
      </Stack>
    </Container>
  );
};
export default NotFount;
