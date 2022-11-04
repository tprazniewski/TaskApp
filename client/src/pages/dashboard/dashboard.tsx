import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { SideBar } from "../../components/sidebar/Sidebar";
import { TaskArea } from "../../components/taskarea/Taskarea";

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <SideBar />
    </Grid>
  );
};
