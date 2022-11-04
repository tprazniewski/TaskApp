import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { Profile } from "../profile/Profile";

export const SideBar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: "100vh",
        positon: "fixed",
        right: "0",
        top: "0",
        width: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {" "}
      <Profile name="Tomasz" />
    </Grid>
  );
};
