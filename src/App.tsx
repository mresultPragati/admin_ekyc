import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./sidebar/TopBar";
import { navigatorPath } from "./sidebar/constant/TopBarConst";
import { KycRequest } from "./request/KycRequest";
import { Box } from "@mui/material";
import "./OverrideStyled.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <PersonalDetailTest /> */}
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Routes>
          <Route path={navigatorPath.summary} element={<KycRequest />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;

// import React, { useEffect } from "react";
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import { Box } from "@mui/material";
// import { KycRequest } from "./request/KycRequest";
// import TopBar from "./sidebar/TopBar";
// import { navigatorPath } from "./sidebar/constant/TopBarConst";

// function App() {
//   return (
//     <div className="App">
//       {/* <Box sx={{ display: "flex" }}>
//         <TopBar />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Routes>
//             <Route path={navigatorPath.request} element={<KycRequest />} />
//           </Routes>
//         </Box>
//       </Box> */}

//       <TopBar />
//       <Routes>
//         <Route path={navigatorPath.summary} element={<KycRequest />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
