import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import TopNav from "./Nav/TopNav";

const LayOut = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <TopNav />
      <Box mb={20}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default LayOut;
