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
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const TopNav = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {}, []);

  const [active, setActive] = useState("home");

  return (
    <HideOnScroll {...props}>
      <AppBar
        sx={{
          backgroundColor: "#ffffff",
        }}
        position="sticky"
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
                    display: { xs: "none", md: "block" },
                  }}
                  variant="text"
                >
                  <Box
                    ml={2}
                    mt={1}
                    borderBottom={active === el.to ? 2 : 0}
                    borderColor="#623CEA"
                  >
                    {el.name}
                  </Box>
                </Button>
              );
            })}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopNav;
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
