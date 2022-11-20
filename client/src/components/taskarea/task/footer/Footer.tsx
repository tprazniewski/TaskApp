import React, { FC, ReactElement } from "react";
import { Box, Switch, Button, FormControlLabel } from "@mui/material";
import { IFooter } from "../interfaces/IFooter";
import PropTypes from "prop-types";
import { Status } from "../../../createTaskForm/enums/Status";

export const Footer: FC<IFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  console.log("status:", status, "!!!! Status form enum:", Status.inProgress);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In progress"
        control={
          <Switch
            defaultChecked={status === Status.inProgress}
            onChange={(e) => onStatusChange(e, id)}
            color="warning"
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "#ffffff" }}
        onClick={(e) => onClick(e, id)}
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
