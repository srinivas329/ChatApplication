import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MessageTypes";

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3} direction={"column"}>
        {Chat_History.map((each) => {
          console.log(each);
          switch (each.type) {
            case "divider":
              return <Timeline key={each.message} el={each} />;
            case "msg":
              switch (each.subtype) {
                case "img":
                  return <MediaMsg key={each.message} el={each} menu={menu} />;

                case "doc":
                  return <DocMsg key={each.message} el={each} menu={menu} />;
                case "link":
                  return <LinkMsg key={each.message} el={each} menu={menu} />;
                case "reply":
                  return <ReplyMsg key={each.message} el={each} menu={menu} />;
                default:
                  return <TextMsg key={each.message} el={each} menu={menu} />;
              }
              break;

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
