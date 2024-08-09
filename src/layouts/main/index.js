import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";

const MainLayout = () => {
  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack
            sx={{ width: "100%" }}
            direction={"column"}
            alignItems={"center"}
          >
            <img
              src="https://res.cloudinary.com/dxvsvzsai/image/upload/e_improve:outdoor/n8copiwmh04rwspg6qpq.jpg"
              alt="Logo"
              style={{ height: 120, width: 120 }}
            />
          </Stack>
        </Stack>

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
