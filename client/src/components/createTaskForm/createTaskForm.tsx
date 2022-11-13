import React, { FC, ReactElement } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { TitleField } from "./task/TitleField";
import { DescriptionField } from "./description/DescriptionField";
import { DataField } from "./date/DateField";
import { SelectField } from "./select/Select.Field";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
export const CreateTaskForm: FC = (): ReactElement => {
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
        <TitleField />
        <DescriptionField />
        <DataField />
        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <SelectField
            label="Status"
            name="status"
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
