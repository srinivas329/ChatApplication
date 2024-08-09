import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MagnifyingGlass, Plus } from "phosphor-react";
import React, { useState } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";

const Group = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* {Left} */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Groups</Typography>
            </Stack>
            <Stack
              sx={{
                width: "100%",
              }}
            >
              <Search
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "#fff"
                      : theme.palette.background.paper,
                }}
              >
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2" component={Link}>
                Create New Group
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              direction={"column"}
              sx={{ flexGrow: 1, overflow: "auto", height: "100%" }}
            >
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={1}>
                  <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                    Pinned
                  </Typography>
                  {ChatList.filter((each) => each.pinned).map((el) => {
                    return <ChatElement {...el} />;
                  })}
                </Stack>
                <Stack sx={{ marginTop: 2 }} spacing={1}>
                  <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                    All Groups
                  </Typography>
                  {ChatList.filter((each) => !each.pinned).map((el) => {
                    return <ChatElement {...el} />;
                  })}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>
        {/* {Right} */}
        {/* //reuse the conversation  */}
      </Stack>
      {openDialog && (
        <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Group;
