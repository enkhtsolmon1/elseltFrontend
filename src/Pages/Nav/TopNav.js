import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  Stack,
  Link,
} from "@mui/material";
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
  const { LoginBachelor, bacheUser, setBacheUser, masterUser, setMasterUser } =
    useContext(ElseltCTX);

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
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <>
      <Drawer anchor="right" open={menu} onClose={closeMenu}>
        <div
          style={{
            width: "250px",
            backgroundColor: "#fff",
            height: "100%",
          }}
        >
          <Grid container justify="center" spacing={1}>
            <Stack
              justifyContent="center"
              width="100%"
              alignItems="center"
              mt={2}
            >
              <img
                style={{ width: 100, marginTop: 20 }}
                src="http://khu.edu.mn:3000/upload/programfiles/khu.png"
                alt="khu"
              />
              <Typography
                variant="button"
                fontFamily="nunito"
                sx={{ fontSize: 18 }}
              >
                Ховд их сургууль{" "}
              </Typography>
            </Stack>
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
            <Grid item xs={12}>
              <List component="nav">
                {nav.map((el, index) => {
                  return (
                    <ListItem
                      onClick={() => {
                        navigate(el.to);
                        closeMenu();
                      }}
                      key={index}
                      button
                    >
                      <ChevronRightIcon color="info" />
                      <Link
                        underline="none"
                        sx={{
                          "&:hover": {
                            color: "#FFE400",
                            opacity: 1,
                          },
                          marginLeft: 1,
                          fontWeight: "bold",
                          fontSize: 12,
                          textTransform: "uppercase",
                        }}
                      >
                        {el.name}
                      </Link>
                    </ListItem>
                  );
                })}

                {bacheUser.success || masterUser.success ? (
                  <>
                    <ListItem
                      onClick={() => {
                        if (bacheUser.success) {
                          navigate("profile");
                        } else if (masterUser.success) {
                          navigate("masterprofile");
                        }
                        setActive("profile");
                        closeMenu();
                      }}
                      button
                    >
                      <AccountCircleIcon color="info" />
                      <Link
                        underline="none"
                        sx={{
                          "&:hover": {
                            color: "#FFE400",
                            opacity: 1,
                          },
                          marginLeft: 1,
                          fontWeight: "bold",
                          fontSize: 12,
                          textTransform: "uppercase",
                        }}
                      >
                        {bacheUser.user.fname}
                        {masterUser.user.firstname}
                      </Link>
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        setBacheUser({
                          success: false,
                          token: "",
                          user: {},
                        });
                        setMasterUser({
                          success: false,
                          token: "",
                          user: {},
                        });
                        navigate("/home");
                        closeMenu();
                      }}
                      button
                    >
                      <LogoutIcon color="error" />
                      <Link
                        underline="none"
                        sx={{
                          "&:hover": {
                            color: "#BD122D",
                            opacity: 1,
                          },
                          color: "#EF4C42",
                          marginLeft: 1,
                          fontWeight: "bold",
                          fontSize: 12,
                          textTransform: "uppercase",
                        }}
                      >
                        Гарах
                      </Link>
                    </ListItem>
                  </>
                ) : (
                  <>
                    <ListItem
                      onClick={() => {
                        setActive("burtgel");
                        navigate("burtgel");
                        closeMenu();
                      }}
                      button
                    >
                      <ChevronRightIcon color="info" />
                      <Link
                        underline="none"
                        sx={{
                          "&:hover": {
                            color: "#FFE400",
                            opacity: 1,
                          },

                          marginLeft: 1,
                          fontWeight: "bold",
                          fontSize: 12,
                          textTransform: "uppercase",
                        }}
                      >
                        Бүртгүүлэх
                      </Link>
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        setActive("login");
                        handleClickOpen();
                        closeMenu();
                      }}
                      button
                    >
                      <ChevronRightIcon color="info" />
                      <Link
                        underline="none"
                        sx={{
                          "&:hover": {
                            color: "#FFE400",
                            opacity: 1,
                          },

                          marginLeft: 1,
                          fontWeight: "bold",
                          fontSize: 12,
                          textTransform: "uppercase",
                        }}
                      >
                        Нэвтрэх
                      </Link>
                    </ListItem>
                  </>
                )}
              </List>
            </Grid>
          </Grid>
        </div>
      </Drawer>
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
                  <Typography
                    sx={{ fontSize: 18, fontFamily: "nunito" }}
                    color="inherit"
                  >
                    <b>ХОВД</b>
                  </Typography>
                  <Typography sx={{ fontSize: 12, fontFamily: "nunito" }}>
                    ИХ СУРГУУЛЬ
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, fontFamily: "nunito" }}
                    variant="caption"
                  >
                    SINCE 1979
                  </Typography>
                </Stack>
              </Stack>
              <Box sx={{ flexGrow: 1 }}></Box>
              <IconButton
                onClick={() => {
                  openMenu();
                }}
                sx={{ display: { xs: "block", md: "none" } }}
                size="large"
              >
                <MenuIcon fontSize="large" color="primary" />
              </IconButton>
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
                      sx={{ fontFamily: "nunito" }}
                    >
                      {el.name}
                    </Box>
                  </Button>
                );
              })}

              {bacheUser.success || masterUser.success ? (
                <>
                  <Button
                    sx={{
                      fontFamily: "nunito",
                      display: { xs: "none", md: "block" },
                    }}
                    color="primary"
                    onClick={() => {
                      if (bacheUser.success) {
                        navigate("profile");
                      } else if (masterUser.success) {
                        navigate("masterprofile");
                      }
                      setActive("profile");
                    }}
                  >
                    <Box ml={2} mt={1} borderColor="#623CEA">
                      {bacheUser.user.fname}
                      {masterUser.user.firstname}
                    </Box>
                  </Button>
                  <IconButton
                    sx={{ mt: 1, display: { xs: "none", md: "block" } }}
                    onClick={() => {
                      setBacheUser({
                        success: false,
                        token: "",
                        user: {},
                      });
                      setMasterUser({ success: false, token: "", user: {} });
                      navigate("/home");
                    }}
                  >
                    <LogoutIcon color="primary" />
                  </IconButton>
                </>
              ) : (
                <>
                  <Button
                    size="small"
                    onClick={() => {
                      setActive("burtgel");
                      navigate("burtgel");
                    }}
                    sx={{
                      color: active === "burtgel" ? "#623CEA" : "#000",
                      "&:hover": {
                        color: "#623CEA",
                      },
                      display: { xs: "none", md: "block" },
                      fontFamily: "nunito",
                    }}
                    variant="text"
                  >
                    <Box
                      sx={{ fontFamily: "nunito" }}
                      ml={2}
                      mt={1}
                      borderBottom={active === "burtgel" ? 2 : 0}
                      borderColor="#623CEA"
                    >
                      Бүртгүүлэх
                    </Box>
                  </Button>
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
                      fontFamily: "nunito",
                    }}
                    variant="text"
                  >
                    <Box
                      sx={{
                        display: { xs: "none", md: "block" },
                      }}
                      ml={2}
                      mt={1}
                      borderBottom={active === "login" ? 2 : 0}
                      borderColor="#623CEA"
                    >
                      Нэвтрэх
                    </Box>
                  </Button>
                </>
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
