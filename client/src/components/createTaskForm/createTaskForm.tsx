import React, { FC, ReactElement, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { TitleField } from "./task/TitleField";
import { DescriptionField } from "./description/DescriptionField";
import { DataField } from "./date/DateField";
import { SelectField } from "./select/Select.Field";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";

export const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create Task Form!
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TitleField onChange={(e) => setTitle(e.target.value)} />
        <DescriptionField onChange={(e) => setDescription(e.target.value)} />
        <DataField value={date} onChange={(date) => setDate(date)} />
        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <SelectField
            label="Status"
            name="status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
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
      </Stack>
      {/* title */}
      {/* description */}
      {/* due Date */}
      {/* status */}
      {/* priority */}
    </Box>
  );
};
