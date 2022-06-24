import { Button, Grid, TextField, Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";

import ElseltCTX from "../../Context/ElseltContext";

const Masters = () => {
  const { elseltState, addElselt, loading, bachelors, allBachelors } =
    useContext(ElseltCTX);

  const masters = {
    isActive: false,
    imagePath: "",
    surName: "",
    lastname: "",
    firstname: "",
    gender: "",
    university: "",
    bakDipNum: "",
    magDipNum: "",
    pathRD: "",
    pathBakDip: "",
    pathMagDip: "",
    pathTulbur: "",
    regnum: "",
    email: "",
    password: "",
    password2: "",
    address1: "",
    address2: "",
    social1: "",
    social2: "",
    phone1: "",
    phone2: "",
  };
  const [formData, updateFormData] = React.useState(masters);

  const formhandleChange = (prop) => (event) => {
    updateFormData({ ...formData, [prop]: event.target.value.trim() });
  };
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: 350,
        }}
      >
        <Grid item xs={12}>
          <TextField
            size="small"
            onChange={formhandleChange("lastname")}
            fullWidth
            label="Овог"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            onChange={formhandleChange("firstname")}
            fullWidth
            label="Нэр"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            size="small"
            onChange={formhandleChange("gender")}
            label="Хүйс"
            fullWidth
            select
            SelectProps={{ native: true }}
          >
            <option aria-label="None" value="" />l
            {["Эрэгтэй", "Эмэгтэй"].map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            size="small"
            onChange={formhandleChange("phone1")}
            fullWidth
            label="Утас"
            type="number"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            size="small"
            onChange={formhandleChange("email")}
            fullWidth
            label="Е-мэйл"
            type="email"
            // error={regex.test(formData.email) ? false : true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            onChange={formhandleChange("password")}
            type="password"
            fullWidth
            label="Нууц үг"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            style={{ maxWidth: 350 }}
            fullWidth
            onChange={formhandleChange("password2")}
            label="Нууц үг давтах"
            variant="outlined"
            type="password"
            error={formData.password === formData.password2 ? false : true}
            helperText={
              formData.password === formData.password2
                ? ""
                : "Нууц үгээ зөв оруулна уу!"
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            disabled={formData.password !== formData.password2 ? true : false}
            size="medium"
            onClick={() => {
              addElselt(formData);
            }}
            variant="contained"
            color="primary"
          >
            Бүртгүүлэх
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Masters;
