import React, { FC, ReactElement } from "react";
import { Box, Switch, Button, FormControlLabel } from "@mui/material";
import { IFooter } from "../interfaces/IFooter";
import PropTypes from "prop-types";

export const Footer: FC<IFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In progress"
        control={<Switch onChange={(e) => onStatusChange(e)} color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "#ffffff" }}
        onClick={(e) => onClick(e)}
      >
        {" "}
        Mark completed
      </Button>
    </Box>
  );
};

Footer.propTypes = {
  id: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  status: PropTypes.string,
};
