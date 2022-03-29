import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./Nav/TopNav";

const LayOut = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <TopNav />
      <Container maxWidth="lg">
        <Box p={2}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default LayOut;
