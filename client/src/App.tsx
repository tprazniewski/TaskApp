import React, { FC, ReactElement } from "react";
import { customTheme } from "./theme/customTheme";
import { ThemeProvider, CssBaseline } from "@mui/material"; // CssBaseline resets the value based on the provided customTheme
const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <h1> Main Route</h1>
    </ThemeProvider>
  );
};
export default App;
