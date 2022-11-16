import React, { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import { Header } from "./header/Header";
import { Description } from "./description/Description";
import { Footer } from "./footer/Footer";
import { ITask } from "./interfaces/ITask";
import { Status } from "../../createTaskForm/enums/Status";
import { Priority } from "../../createTaskForm/enums/Priority";
import PropTypes from "prop-types";
import { priorityColor } from "./helpers/priorityColor";

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = "Test title",
    date = new Date(),
    description = " Test Description",
    priority = Priority.high,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: priorityColor(priority),
      }}
    >
      <Header title={title} date={date} />
      <Description description={description} />
      <Footer onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};
