import React, { useContext, useEffect, useState } from "react";
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
import ElseltCTX from "../../Context/ElseltContext";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Login from "../Auth/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
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
  const { LoginBachelor, bacheUser, setBacheUser } = useContext(ElseltCTX);

  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {}, []);

  const [active, setActive] = useState("home");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
          Нэвтрэх хэсэг
        </DialogTitle>
        <DialogContent>
          <Login handleClose={handleClose} />
        </DialogContent>
      </Dialog>
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
                  <Typography sx={{ fontSize: 20 }} color="inherit" noWrap>
                    <b>ХОВД</b>
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>ИХ СУРГУУЛЬ</Typography>
                  <Typography sx={{ fontSize: 10 }} variant="caption">
                    SINCE 1979
                  </Typography>
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
              {bacheUser.success ? (
                <>
                  <Button
                    color="primary"
                    onClick={() => {
                      navigate("profile");
                    }}
                  >
                    <Box ml={2} mt={1} borderColor="#623CEA">
                      {bacheUser.user.fname}
                    </Box>
                  </Button>
                  <IconButton
                    sx={{ mt: 1 }}
                    onClick={() => {
                      setBacheUser({
                        success: false,
                        token: "",
                        user: {},
                      });
                      navigate("/home");
                    }}
                  >
                    <LogoutIcon color="primary" />
                  </IconButton>
                </>
              ) : (
                <Button
                  size="small"
                  onClick={() => {
                    setActive("login");
                    handleClickOpen();
                  }}
                  sx={{
                    color: active === "login" ? "#623CEA" : "#000",
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
                    borderBottom={active === "login" ? 2 : 0}
                    borderColor="#623CEA"
                  >
                    Нэвтрэх
                  </Box>
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
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
    to: "programs",
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
