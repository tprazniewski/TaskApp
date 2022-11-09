import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";

export const TitleField: FC = (): ReactElement => {
  return (
    <TextField
      id="Title"
      label="Task"
      placeholder="Task Title..."
      variant="outlined"
      size="small"
      name="title"
      fullWidth
    />
  );
};
