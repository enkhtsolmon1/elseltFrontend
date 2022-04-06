import {
  Button,
  Container,
  Divider,
  Grid,
  Grow,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ElseltCTX from "../../Context/ElseltContext";

const BurtgelBachelors = () => {
  const navigate = useNavigate();

  const { bacheUser, addBachelor, addressState, masterUser } =
    useContext(ElseltCTX);
  {
    bacheUser.success && navigate("/profile");
  }
  {
    masterUser.success && navigate("/masterprofile");
  }
  const [bachelor, setBachelor] = useState({
    password: "",
    lname: "",
    fname: "",
    phone: "",
    email: "",
    pupil_id: "",
    regnum: "",
    status: "Системд нэвтэрсэн",
    year: "",
    examloc: "",
  });
  const handleChange = (prop) => (event) => {
    setBachelor({ ...bachelor, [prop]: event.target.value });
    if (prop === "password") {
      setBachelor({
        ...bachelor,
        year: event.target.value,
        password: event.target.value,
      });
    }
  };
  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <Grid
        container
        spacing={1}
        sx={{
          maxWidth: 350,
        }}
      >
        <Grid item xs={12}>
          <TextField
            onChange={handleChange("examloc")}
            size="small"
            label="Аймаг сонгох"
            fullWidth
            select
            SelectProps={{ native: true }}
          >
            <option aria-label="None" value="" />
            {addressState.success &&
              addressState.address.map((el, index) => (
                <option key={index} value={el.aimagCity}>
                  {el.aimagCity}
                </option>
              ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            onChange={handleChange("lname")}
            fullWidth
            label="Овог"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            fullWidth
            onChange={handleChange("fname")}
            label="Нэр"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            fullWidth
            onChange={handleChange("regnum")}
            label="Регистр"
            variant="outlined"
          />
        </Grid>{" "}
        <Grid item xs={12}>
          <TextField
            size="small"
            fullWidth
            onChange={handleChange("phone")}
            label="Утас"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            fullWidth
            onChange={handleChange("email")}
            label="Email"
            variant="outlined"
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            fullWidth
            onChange={handleChange("pupil_id")}
            label="Бүртгэлийн дугаар"
            variant="outlined"
            type="number"
            helperText="Боловсролын үнэлгээний төвд бүртгүүлсэн бүртгэлийн дугаар байхыг анхаарна уу!"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            style={{ maxWidth: 350 }}
            fullWidth
            onChange={handleChange("password")}
            label="Нууц үг"
            variant="outlined"
            type="password"
            helperText="Боловсролын үнэлгээний төвд бүртгүүлсэн нууц үг байхыг анхаарна уу"
          />
        </Grid>
        <Grid container item xs={12}>
          <Grow in {...(true ? { timeout: 1000 } : {})}>
            <Button
              style={{ borderRadius: 0, width: 350 }}
              size="large"
              onClick={() => {
                addBachelor(bachelor);
              }}
              fullWidth
              variant="contained"
              color="primary"
            >
              Бүртгүүлэх
            </Button>
          </Grow>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default BurtgelBachelors;
