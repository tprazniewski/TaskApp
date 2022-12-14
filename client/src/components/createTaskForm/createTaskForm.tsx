import React, { FC, ReactElement, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { TitleField } from "./task/TitleField";
import { DescriptionField } from "./description/DescriptionField";
import { DataField } from "./date/DateField";
import { SelectField } from "./select/Select.Field";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
import { sendApiRequest } from "../../helpers/api";
import { useMutation } from "@tanstack/react-query";
import { ICreateTask } from "../taskarea/interfaces/ICreateTask";

export const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequest("http://localhost:999/tasks", "POST", data)
  );

  const createTaskHandler = () => {
    if (!title || !description || !date) {
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    createTaskMutation.mutate(task);
  };

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [createTaskMutation.isSuccess]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={8}
      my={6}
    >
      {showSuccess && (
        <Alert
          severity="success"
          sx={{
            width: "100%",
            marginBottom: "16px",
          }}
        >
          <AlertTitle>Success</AlertTitle>
          The task ahs been addedd successfully!
        </Alert>
      )}

      <Typography mb={2} component="h2" variant="h6">
        Create Task Form!
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={4}>
        <TitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <DescriptionField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <DataField
          value={date}
          onChange={(date) => setDate(date)}
          disabled={createTaskMutation.isLoading}
        />
        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <SelectField
            label="Status"
            name="status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            disabled={createTaskMutation.isLoading}
            items={[
              { value: Status.todo, label: Status.todo.toLocaleUpperCase() },
              {
                value: Status.completed,
                label: Status.completed.toLocaleUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toLocaleUpperCase(),
              },
            ]}
          />
          <SelectField
            label="Priority"
            name="priority"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
            disabled={createTaskMutation.isLoading}
            items={[
              { value: Priority.low, label: Priority.low.toLocaleUpperCase() },
              {
                value: Priority.normal,
                label: Priority.normal.toLocaleUpperCase(),
              },
              {
                value: Priority.high,
                label: Priority.high.toLocaleUpperCase(),
              },
            ]}
          />
        </Stack>

        {createTaskMutation.isLoading && <LinearProgress />}

        <Button
          disabled={!title || !description || !date || !status || !priority}
          variant="contained"
          size="medium"
          fullWidth
          onClick={createTaskHandler}
        >
          {" "}
          Create A task{" "}
        </Button>
      </Stack>
    </Box>
  );
};
