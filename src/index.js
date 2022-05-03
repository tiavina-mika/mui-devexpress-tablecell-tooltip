import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import CustomTable from "./CustomTable";
import "./styles.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <StyledEngineProvider injectFirst>
    <CustomTable />
  </StyledEngineProvider>
);
