import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Grow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ElseltCTX from "../../Context/ElseltContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });

    // getBachelor(bacheUser.user._id);
  }, []);

  const {
    alert,
    setAlert,
    addBachelor,
    bachelors,
    allBachelors,
    bacheUser,
    getBachelor,
    updateBachelors,
    addressState,
  } = useContext(ElseltCTX);

  const [bachelor, setBachelor] = useState({});
  const handleChange = (prop) => (event) => {
    setBachelor({ ...bachelor, [prop]: event.target.value });
  };

  const [value, setValue] = React.useState(0);

  const handleChange1 = (newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      {!bacheUser.success && navigate("/burtgel")}

      {bachelors.success && (
        <Container maxWidth="lg" style={{ marginBottom: 20 }}>
          <Grid container justify="flex-start" spacing={2}>
            <Grid container justify="flex-start" item xs={12}>
              <Typography variant="h6" component="h2">
                Элсэгчийн мэдээлэл
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box style={{ height: "100%" }} boxShadow={3} p={2}>
                <Grid container justify="center" spacing={2}>
                  <Grid container justify="center" item xs={12}>
                    <img
                      src={`https://eyesh.eec.mn/uploads/pupils/${bachelors.bachelor.pupil_id}.jpg`}
                      width="150"
                    />
                    {/* <img
                      src="https://image.flaticon.com/icons/png/512/3135/3135755.png"
                      width="150px"
                    /> */}
                  </Grid>
                  <Grid item xs={12}>
                    <Chip
                      style={{
                        marginTop: 10,
                        backgroundColor: "#27ae60",
                        color: "#fff",
                      }}
                      size="small"
                      label={bachelors.bachelor.status}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <b> Овог:</b> {bachelors.bachelor.lname}
                  </Grid>
                  <Grid item xs={12}>
                    <b> Нэр:</b> {bachelors.bachelor.fname}
                  </Grid>
                  <Grid item xs={12}>
                    <b> Регистер:</b> {bachelors.bachelor.regnum}
                  </Grid>
                  <Grid item xs={12}>
                    <b> Email:</b> {bachelors.bachelor.email}
                  </Grid>
                  <Grid item xs={12}>
                    <b> Утас:</b> {bachelors.bachelor.phone}
                  </Grid>
                  <Grid item xs={12}>
                    <b> Бүртгэлийн дугаар:</b> {bachelors.bachelor.pupil_id}
                  </Grid>
                  <Grid container justify="center" item xs={12}>
                    <Button
                      size="medium"
                      onClick={() => {
                        handleChange1(1);
                        // addBachelor(bachelor);
                      }}
                      fullWidth
                      variant="outlined"
                      color="primary"
                    >
                      Засварлах
                    </Button>{" "}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box style={{ padding: 20 }} boxShadow={3}>
                {/* <Sliders /> */}
                {/* <Box
                    style={{
                      backgroundColor: "#e67e22",
                      color: "#fff",
                      borderRadius: 5,
                    }}
                    p={3}
                  >
                    <b>АНХААРНА УУ. </b> Суралцах эрх баталгаажуулах хугацаа 2021
                    оны 8 сарын 20-25-ны хооронд явагдана. Заасан хугацаанд
                    суралцах эрхээ баталгаажуулаагүй тохиолдолд суралцах эрхээс
                    татгалзсан гэж үзэх ба дараагийн бүртгүүлэгчид элсэх эрх
                    шилжинэ.
                  </Box> */}

                <TabPanel value={value} index={0}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        Таны сонгосон хөтөлбөр:
                      </Typography>
                      {bachelors.bachelor.program ? (
                        <Chip
                          style={{
                            marginLeft: 10,
                            backgroundColor: "#3498db",
                            color: "#fff",
                          }}
                          size="medium"
                          label={bachelors.bachelor.program.name}
                        />
                      ) : (
                        <Chip
                          style={{
                            marginLeft: 10,
                            backgroundColor: "#EF4C42",
                            color: "#fff",
                          }}
                          size="small"
                          label="Хөтөлбөр сонгоогүй байна"
                        />
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={bachelors.bachelor.lname}
                        onChange={handleChange("lname")}
                        required
                        style={{ maxWidth: 350 }}
                        fullWidth
                        label="Овог нэр"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={bachelors.bachelor.fname}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("fname")}
                        label="Нэр"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={bachelors.bachelor.regnum}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("regnum")}
                        label="Регистер"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={bachelors.bachelor.email}
                        style={{ maxWidth: 350 }}
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
                        defaultValue={bachelors.bachelor.phone}
                        style={{ maxWidth: 350 }}
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
                        disabled
                        defaultValue={bachelors.bachelor.pupil_id}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("pupil_id")}
                        label="Бүртгэлийн дугаар"
                        variant="outlined"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        onChange={handleChange("gender")}
                        label="Хүйс"
                        fullWidth
                        size="small"
                        style={{ maxWidth: 350 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        select
                        SelectProps={{ native: true }}
                        defaultValue={bachelors.bachelor.gender}
                      >
                        <option aria-label="None" value="" />l
                        {["Эрэгтэй", "Эмэгтэй"].map((el, index) => (
                          <option key={index} value={el}>
                            {el}
                          </option>
                        ))}
                      </TextField>
                    </Grid>{" "}
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        onChange={handleChange("examloc")}
                        label="Шалгалт өгөх газар"
                        fullWidth
                        size="small"
                        style={{ maxWidth: 350 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        select
                        SelectProps={{ native: true }}
                        defaultValue={bachelors.bachelor.examloc}
                      >
                        <option aria-label="None" value="" />l
                        {addressState.address.map((el, index) => (
                          <option key={index} value={el.aimagCity}>
                            {el.aimagCity}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        size="small"
                        onClick={() => {
                          updateBachelors({
                            id: bachelors.bachelor._id,
                            editBachelors: bachelor,
                          });
                          handleChange1(0);
                          setBachelor({});
                        }}
                        variant="outlined"
                        color="primary"
                      >
                        Хадгалах
                      </Button>
                    </Grid>
                  </Grid>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Profile;
