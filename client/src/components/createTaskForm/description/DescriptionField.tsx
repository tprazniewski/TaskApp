import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";

export const DescriptionField: FC = (): ReactElement => {
  return (
    <TextField
      id="description"
      label="description"
      placeholder="Description ....."
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
    />
  );
};
