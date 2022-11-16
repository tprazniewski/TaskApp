import React, { FC, ReactElement } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { IHeader } from "../interfaces/IHeader";
import { format } from "date-fns";
import PropTypes from "prop-types";

export const Header: FC<IHeader> = (props): ReactElement => {
  const { title = "Default Title", date = new Date() } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={4}
      //   flexDirection="column"
    >
      <Box>
        {" "}
        <Typography variant="h6">{title}</Typography>{" "}
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, "PPP")} />
      </Box>
    </Box>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
