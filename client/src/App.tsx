import React, { FC, ReactElement } from "react";
import { customTheme } from "./theme/customTheme";
import { ThemeProvider, CssBaseline } from "@mui/material"; // CssBaseline resets the value based on the provided customTheme
import { Dashboard } from "./pages/dashboard/dashboard";
const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};
export default App;
