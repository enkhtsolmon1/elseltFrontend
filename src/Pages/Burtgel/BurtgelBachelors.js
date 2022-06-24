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

  const {
    bacheUser,
    addBachelor,
    addressState,
    masterUser,
    getSurguuli,
    school,
  } = useContext(ElseltCTX);
  {
    bacheUser.success && navigate("/profile");
  }
  {
    masterUser.success && navigate("/masterprofile");
  }
  const [bachelor, setBachelor] = useState({
    password: "",
    password2: "",
    lname: "",
    fname: "",
    phone: "",
    email: "",
    pupil_id: "",
    regnum: "",
    status: "Системд нэвтэрсэн",
    year: "",
    examloc: "",
    sname: "",
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
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
            onChange={(e) => {
              setBachelor({ ...bachelor, examloc: e.target.value });
              getSurguuli(e.target.value);
            }}
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
            onChange={(e) => {
              setBachelor({ ...bachelor, sname: e.target.value });
            }}
            size="small"
            label="Сургууль"
            fullWidth
            select
            SelectProps={{ native: true }}
          >
            <option aria-label="None" value="" />
            {school.surguuli.map((el, index) => (
              <option key={index} value={el.ner}>
                {el.ner}
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
            onChange={handleChange("phone")}
            label="Утас"
            variant="outlined"
            type="number"
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
            // error={regex.test(bachelor.email) ? false : true}
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
            error={bachelor.pupil_id.length !== 9 ? true : false}
            helperText={
              bachelor.pupil_id.length !== 9
                ? "Бүртгэлийн дугаараа зөв оруулна уу!"
                : false
            }
          />
          <Typography variant="caption" color="secondary">
            Боловсролын үнэлгээний төвд бүртгүүлсэн бүртгэлийн дугаар байхыг
            анхаарна уу !
          </Typography>
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
            helperText=""
          />
          <Typography variant="caption" color="secondary">
            Боловсролын үнэлгээний төвд бүртгүүлсэн нууц үг байхыг анхаарна уу !
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            style={{ maxWidth: 350 }}
            fullWidth
            onChange={handleChange("password2")}
            label="Нууц үг давтах"
            variant="outlined"
            type="password"
            error={bachelor.password === bachelor.password2 ? false : true}
            helperText={
              bachelor.password === bachelor.password2
                ? ""
                : "Нууц үгээ зөв оруулна уу!"
            }
          />
        </Grid>
        <Grid container item xs={12}>
          <Grow in {...(true ? { timeout: 1000 } : {})}>
            <Button
              disabled={
                bachelor.pupil_id.length !== 9 ||
                bachelor.password !== bachelor.password2
                  ? true
                  : false
              }
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
