import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "../interfaces/ITextField";

export const DescriptionField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (e) => console.log(e), disabled = false } = props;
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
      disabled={disabled}
      onChange={onChange}
    />
  );
};
