import React, { FC, ReactElement } from "react";
import { Grid, Box } from "@mui/material";
import { format } from "date-fns";
import { Counter } from "./counter/Counter";

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status of your Task As on {format(new Date(), "PPPP")}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          container
          display="flex"
          flexDirection="row"
          md={10}
          xs={12}
          mb={8}
          justifyContent="space-around"
          alignItems="center"
        >
          <Counter />
          <Counter />
          <Counter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          alignItems="center"
          md={8}
          xs={10}
        >
          <Box> Task ll come over here</Box>
          <Box> Task ll come over here</Box>
          <Box> Task ll come over here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
