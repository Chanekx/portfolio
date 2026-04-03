import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00ff88" },
    secondary: { main: "#00cc66" },
    background: {
      default: "#1a1f28",
      paper: "rgba(255, 255, 255, 0.05)",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.8)",
    },
  },
  typography: {
    fontFamily:
      '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
});
