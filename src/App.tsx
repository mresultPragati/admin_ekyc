import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { Box } from "@mui/material";
import { KycRequest } from "./request/KycRequest";
import { navigatorPath } from "./constants";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path={navigatorPath.request} element={<KycRequest />} />
          </Routes>
        </Box>
      </Box>
      {/* <div style={{ width: "fit-content" }}>
        <Routes>
          <Route path={navigatorPath.home} element={<Home />} />
        </Routes>
      </div> */}
    </div>
  );
}

export default App;
