import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const nav = [
  {
    name: "Нүүр",
    to: "home",
  },
  {
    name: "Бүртгэл",
    to: "burtgel",
  },
  {
    name: "Хөтөлбөр",
    to: "program",
  },
  {
    name: "Журам",
    to: "juram",
  },
  {
    name: "Холбоо барих",
    to: "contact",
  },
];

const TopNav = () => {
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {}, []);

  const [active, setActive] = useState("home");

  return (
    <AppBar
      sx={{
        backgroundColor: "#ffffff",
      }}
      position="static"
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Stack direction="row" spacing={0.5}>
            <img
              width="80px"
              // height="70px"
              src="http://khu.edu.mn:3000/upload/programfiles/khu.png"
            />
            <Stack
              direction="column"
              sx={{
                color: "#07158F",
              }}
            >
              <Typography variant="h5" color="inherit" noWrap>
                <b>ХОВД</b>
              </Typography>
              <Typography variant="body1">ИХ СУРГУУЛЬ</Typography>
              <Typography variant="caption">SINCE 1979</Typography>
            </Stack>
          </Stack>
          <Box sx={{ flexGrow: 1 }}></Box>
          {nav.map((el, index) => {
            return (
              <Button
                size="small"
                onClick={() => {
                  setActive(el.to);
                  navigate(el.to);
                }}
                sx={{
                  color: active === el.to ? "#623CEA" : "#000",
                  "&:hover": {
                    color: "#623CEA",
                  },
                }}
                variant="text"
              >
                {el.name}
              </Button>
            );
          })}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNav;
