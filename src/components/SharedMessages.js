import {
  Stack,
  Box,
  IconButton,
  Typography,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretLeft, X } from "phosphor-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { Shared_Docs, Shared_Links } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MessageTypes";

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* {Header} */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        {/* {Body} */}
        <Stack
          sx={{ height: "100%" }}
          position={"relative"}
          flexGrow={1}
          overflow={"scroll"}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((each) => (
                      <Grid item xs={4}>
                        <img
                          src={faker.image.avatar()}
                          alt={faker.name.fullName()}
                        />
                      </Grid>
                    ))}
                  </Grid>
                );
              case 1:
                return Shared_Links.map((each) => <LinkMsg el={each} />);
              case 2:
                return Shared_Docs.map((each) => <DocMsg el={each} />);
              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
