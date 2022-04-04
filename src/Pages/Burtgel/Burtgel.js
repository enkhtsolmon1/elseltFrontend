import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BurtgelBachelors from "./BurtgelBachelors";

const Burtgel = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="md">
      <Box sx={{ width: "100%", typography: "body1", mt: 2 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              centered
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="БАКАЛАВРЫН БҮРТГЭЛ" value="1" />
              <Tab label="МАГИСТРЫН БҮРТГЭЛ" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BurtgelBachelors />
          </TabPanel>
          <TabPanel value="2">МАГИСТРЫН БҮРТГЭЛ</TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default Burtgel;
