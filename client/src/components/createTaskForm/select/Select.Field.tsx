import React, { FC, ReactElement } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { ISelect } from "../interfaces/ISelect";
import PropTypes from "prop-types";

export const SelectField: FC<ISelect> = (props): ReactElement => {
  const {
    value = "",
    label = "Select Box",
    name = "Select Box",
    items = [{ value: "", label: "Add Items" }],
    disabled = false,
    onChange = (e) => {
      console.log(e.target.value);
    },
  } = props;
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((e, i) => {
          return (
            <MenuItem value={e.value} key={e.value + i}>
              {" "}
              {e.label}{" "}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

SelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ),
};
