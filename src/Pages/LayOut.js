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
      <Outlet />
    </Box>
  );
};

export default LayOut;
