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

const MasterProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });

    // getmaster(bacheUser.user._id);
  }, []);

  const { masterOne, masterUser, updatemasterOne, addressState } =
    useContext(ElseltCTX);

  const [master, setmaster] = useState({});
  const handleChange = (prop) => (event) => {
    setmaster({ ...master, [prop]: event.target.value });
  };

  const [value, setValue] = React.useState(0);

  const handleChange1 = (newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  console.log(masterOne);
  return (
    <>
      {!masterUser.success && navigate("/burtgel")}

      {masterOne.success && (
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
                  <Grid item xs={12}>
                    <b> Овог:</b> {masterOne.master.lastname}
                  </Grid>
                  <Grid item xs={12}>
                    <b> Нэр:</b> {masterOne.master.firstname}
                  </Grid>
                  <Grid item xs={12}>
                    <b> Регистер:</b> {masterOne.master.regnum}
                  </Grid>
                  <Grid item xs={12}>
                    <b> Email:</b> {masterOne.master.email}
                  </Grid>
                  <Grid item xs={12}>
                    <b> Утас:</b> {masterOne.master.phone1}
                  </Grid>

                  <Grid container justify="center" item xs={12}>
                    <Button
                      size="medium"
                      onClick={() => {
                        handleChange1(1);
                        // addmaster(master);
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
                      {masterOne.master.program ? (
                        <Chip
                          style={{
                            marginLeft: 10,
                            backgroundColor: "#3498db",
                            color: "#fff",
                          }}
                          size="medium"
                          label={masterOne.master.program.name}
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
                        defaultValue={masterOne.master.lastname}
                        onChange={handleChange("lastname")}
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
                        defaultValue={masterOne.master.firstname}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("firstname")}
                        label="Нэр"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={masterOne.master.regnum}
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
                        defaultValue={masterOne.master.email}
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
                        defaultValue={masterOne.master.phone1}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("phone1")}
                        label="Утас"
                        variant="outlined"
                        type="number"
                      />
                    </Grid>{" "}
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={masterOne.master.phone2}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("phone2")}
                        label="Холбоо барих хүний дугаар"
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
                        defaultValue={masterOne.master.gender}
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
                        defaultValue={masterOne.master.university}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("university")}
                        label="Төгссөн сургууль"
                        variant="outlined"
                        type="text"
                      />
                    </Grid>{" "}
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={masterOne.master.bakDipNum}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("bakDipNum")}
                        label="Бакалаврын дипломын дугаар"
                        variant="outlined"
                        type="text"
                      />
                    </Grid>{" "}
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={masterOne.master.magDipNum}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("magDipNum")}
                        label="Магистрын дипломын дугаар"
                        variant="outlined"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={masterOne.master.address}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("address")}
                        label="Гэрийн хаяг"
                        variant="outlined"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={masterOne.master.social}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("social")}
                        label="Олон нийтийн сүлжээний хаяг"
                        variant="outlined"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        defaultValue={masterOne.master.social}
                        style={{ maxWidth: 350 }}
                        fullWidth
                        onChange={handleChange("social")}
                        label="Олон нийтийн сүлжээний хаяг"
                        variant="outlined"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        size="small"
                        onClick={() => {
                          // updatemasterOne({
                          //   id: masterOne.master._id,
                          //   editmasterOne: master,
                          // });
                          handleChange1(0);
                          setmaster({});
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

export default MasterProfile;
