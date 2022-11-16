import React, { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { emitBorderColour } from "./helpers/emitBorderColour";
import { Status } from "../../createTaskForm/enums/Status";
import { ICounter } from "./ICounter";
import { emitLAbel } from "./helpers/emitLabel";
import PropTypes from "prop-types";

export const Counter: FC<ICounter> = (props): ReactElement => {
  const { status = Status.completed, count = 0 } = props;
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
            borderColor: `${emitBorderColour(status)}`,
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {emitLAbel(status)}
        </Typography>
      </Box>
    </>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
};
