import { Help } from "@mui/icons-material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import FlexBetween from "./components/FlexBetween";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Navbar from "./scenes/Navbar.js";

const App = () => {
  const mode = useSelector((state) => state.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FlexBetween>
          <Help />
          <Navbar />
        </FlexBetween>
      </ThemeProvider>
    </>
  );
};

export default App;
