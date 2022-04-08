import { Button, Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ElseltCTX from "../../Context/ElseltContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Login = ({ handleClose }) => {
  const { LoginBachelor, bacheUser, masterUser, LoginMasters } =
    useContext(ElseltCTX);
  const [bLogin, setBlogin] = useState({
    password: "",
    pupil_id: "",
    email: "",
  });
  const handleChange = (prop) => (event) => {
    setBlogin({ ...bLogin, [prop]: event.target.value });
  };
  {
    bacheUser.success && handleClose();
  }
  {
    masterUser.success && handleClose();
  }
  const [value, setValue] = React.useState("b");

  const handleChange1 = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid sx={{ p: 2 }} container justify="center" spacing={2}>
      <Grid item xs={12}>
        <FormControl>
          <RadioGroup row value={value} onChange={handleChange1}>
            <FormControlLabel value="b" control={<Radio />} label="Бакалавр" />
            <FormControlLabel
              value="m"
              control={<Radio />}
              label="Магистр, Доктор"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      {value === "b" && (
        <Grid item xs={12}>
          <TextField
            size="small"
            variant="outlined"
            onChange={handleChange("pupil_id")}
            label=" Бүртгэлийн дугаар"
            type="text"
            fullWidth
          />
        </Grid>
      )}
      {value === "m" && (
        <Grid item xs={12}>
          <TextField
            size="small"
            variant="outlined"
            onChange={handleChange("email")}
            label="Email"
            type="text"
            fullWidth
          />
        </Grid>
      )}
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
            if (value === "b") {
              LoginBachelor(bLogin);
            } else if (value === "m") {
              LoginMasters(bLogin);
            }
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
