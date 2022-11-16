import React, { FC, ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { IDescription } from "../interfaces/IDescription";
import PropTypes from "prop-types";

export const Description: FC<IDescription> = (props): ReactElement => {
  const { description = "Lorem Ipsum" } = props;
  return (
    <Box>
      <Typography variant="h6"> {description}</Typography>
    </Box>
  );
};

Description.prototype = {
  description: PropTypes.string,
};
