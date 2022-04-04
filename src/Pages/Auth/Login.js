import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ElseltCTX from "../../Context/ElseltContext";

const Login = ({ handleClose }) => {
  const navigate = useNavigate();
  const { LoginBachelor, bacheUser } = useContext(ElseltCTX);
  const [bLogin, setBlogin] = useState({
    password: "",
    pupil_id: "",
  });
  const handleChange = (prop) => (event) => {
    setBlogin({ ...bLogin, [prop]: event.target.value });
  };
  {
    bacheUser.success && handleClose();
  }
  return (
    <Grid sx={{ p: 2 }} container justify="center" spacing={2}>
      <Grid container justify="center" item xs={12}>
        <TextField
          size="small"
          variant="outlined"
          onChange={handleChange("pupil_id")}
          label=" Бүртгэлийн дугаар"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid container justify="center" item xs={12}>
        <TextField
          size="small"
          variant="outlined"
          onChange={handleChange("password")}
          label="Нууц үг"
          type="password"
          fullWidth
        />
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Button
          size="medium"
          sx={{
            backgroundColor: "#2C75E4",
            borderRadius: 0,
          }}
          fullWidth
          variant="contained"
          onClick={() => {
            LoginBachelor(bLogin);
          }}
          color="primary"
        >
          Нэвтрэх
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
