import React, { FC, ReactElement } from "react";
import { Grid, Box, Alert, LinearProgress } from "@mui/material";
import { format } from "date-fns";
import { Counter } from "./counter/Counter";
import { Task } from "./task/Task";
import { useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/api";
import { ITaskApi } from "./interfaces/ITaskApi";
import { Status } from "../createTaskForm/enums/Status";
import { useMutation } from "@tanstack/react-query";
import { IUpdateSwitch } from "../createTaskForm/interfaces/IUpdateSwitch";

export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(["tasks"], async () => {
    return await sendApiRequest<ITaskApi[]>(
      "http://localhost:999/tasks",
      "GET"
    );
  });

  const updateSwitch = useMutation((data: IUpdateSwitch) =>
    sendApiRequest("http://localhost:999/tasks", "PUT", data)
  );

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
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}
            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning"> you don't have any tasks yet!</Alert>
            )}
            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((e, i) => {
                return (
                  // e.status == Status.todo ||
                  // (e.status == Status.inProgress ? (
                  <Task
                    key={i + e.priority}
                    id={e.id}
                    title={e.title}
                    date={new Date(e.date)}
                    priority={e.priority}
                    status={e.status}
                  />
                  // ) : (
                  //   false
                  // )
                  // )
                );
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
