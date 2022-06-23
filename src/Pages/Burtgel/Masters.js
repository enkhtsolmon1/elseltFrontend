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
            required
            fullWidth
            label="Овог"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            onChange={formhandleChange("firstname")}
            required
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
            required
            fullWidth
            label="Е-мэйл"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            onChange={formhandleChange("password")}
            type="password"
            required
            fullWidth
            label="Нууц үг"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            size="small"
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
