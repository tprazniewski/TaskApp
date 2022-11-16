import React, { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import { Header } from "./header/Header";

export const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={2}
      p={4}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "error.light",
      }}
    >
      <Header />
      {/* desc */}
      {/* footer */}
    </Box>
  );
};
