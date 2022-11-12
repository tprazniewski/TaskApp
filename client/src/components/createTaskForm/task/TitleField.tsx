import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "../interfaces/ITextField";
import PropTypes from "prop-types";
export const TitleField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (e) => console.log(e.target.value), disabled = false } =
    props;
  return (
    <TextField
      id="Title"
      label="Task"
      placeholder="Task Title..."
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
