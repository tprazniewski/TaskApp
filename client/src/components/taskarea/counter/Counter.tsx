import React, { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";

export const Counter: FC = (): ReactElement => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        // justifyContent="center"
      >
        <Avatar
          sx={{
            backgroundColor: "transparent",
            border: "5px solid",
            width: "96px",
            height: "96px",
            marginBottom: "16px",
            borderColor: "warning.light",
          }}
        >
          <Typography color="#ffffff" variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          SubTitle
        </Typography>
      </Box>
    </>
  );
};
