import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      py={4}
      sx={{
        backgroundColor: "#2C75E4",
        color: "#ffffff",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Stack direction="row" spacing={1} justifyContent="center">
        <Typography variant="body2" textAlign="center">
          {" © "}
          <Link
            sx={{ color: "#ffffff" }}
            target="_blank"
            href="http://khu.edu.mn/"
          >
            ХОВД ИХ СУРГУУЛЬ
          </Link>{" "}
          , МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН АЛБА {new Date().getFullYear()}
          {"."}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
