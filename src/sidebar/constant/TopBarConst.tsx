export const navigatorPath = {
  summary: "/",
};

export const topBarMenu = [
  { name: "Summary", path: navigatorPath?.summary },
  // {
  //   name: "Analysis",
  //   subMenu: [
  //     {
  //       menuItem: "Investor Suggestion",
  //       menuPath: navigatorPath?.advisorAnalysis,
  //     },
  //     {
  //       menuItem: "Stock Analysis",
  //       menuPath: navigatorPath?.stockAnalysis,
  //     },
  //     // {
  //     //   menuItem: "Tax Analysis",
  //     //   menuPath: navigatorPath?.taxAnalysis,
  //     // },
  //   ],
  // },
  // { name: "Investor Suggestion", path: navigatorPath?.advisorAnalysis },
];

export const returnCssTopbar = (page: any, locationPath: string) => {
  let boxShadow = "";
  let color = "black"; // Default color
  let fontSize = "medium"; // Default font size

  // // Check if the page has a submenu
  // if (page?.subMenu && page?.subMenu.length > 0) {
  //   // Iterate through the submenu items
  //   page.subMenu.forEach((item:any) => {
  //     // If any submenu item path matches the location path
  //     if (item.menuPath === locationPath) {
  //       boxShadow = "0 5px 0 -1px #84c14b";
  //       color = "#84c14b"; // Selected color
  //       fontSize = "14px"; // Selected font size
  //     }
  //   });
  // } else {
  // No submenu; check if the main page path matches the location path
  if (locationPath === page.path) {
    boxShadow = "0 5px 0 -1px #84c14b";
    color = "#84c14b"; // Selected color
    // fontSize = "14.5px"; // Selected font size
  }
  // }

  // Return the style object
  return {
    height: "4rem",
    display: "block",
    boxShadow: boxShadow,
    color: color,
    fontSize: fontSize,
    borderRadius: 0,
    margin: "0px 3px",
  };
};
