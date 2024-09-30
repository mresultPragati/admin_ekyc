import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Tooltip,
  Divider,
  Typography,
} from "@mui/material";
import { Menu, Home, Settings, Close, Info } from "@mui/icons-material";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const drawerWidth = isOpen ? 240 : 80; // Expand to 240px, collapse to 80px

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            transition: "width 0.3s ease-in-out", // Smooth transition for sidebar width
          },
        }}
      >
        {/* Header with toggle button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isOpen ? "space-between" : "center",
            padding: "8px 16px",
            backgroundColor: "#1976d2", // Material UI primary color for header
            color: "#fff",
          }}
        >
          {isOpen && <Typography variant="h6">Admin</Typography>}
          <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
            {isOpen ? <Close /> : <Menu />}
          </IconButton>
        </Box>

        {/* List of menu items */}
        <List>
          {["Home", "Settings", "About"].map((text, index) => (
            <Tooltip
              key={text}
              title={!isOpen ? text : ""}
              placement="right"
              arrow
            >
              <ListItem
                component="li" // Explicitly set the component as 'li'
                onClick={() => console.log(`${text} clicked`)} // Optional: Add click handler
                disablePadding
                sx={{
                  padding: isOpen ? "10px 16px" : "10px 12px",
                  "&:hover": {
                    backgroundColor: "#e0f7fa", // Hover effect
                  },
                  transition: "all 0.3s ease-in-out", // Smooth transition on hover
                }}
              >
                <ListItemIcon sx={{ color: "#1976d2" }}>
                  {index === 0 ? (
                    <Home />
                  ) : index === 1 ? (
                    <Settings />
                  ) : (
                    <Info />
                  )}
                </ListItemIcon>
                {isOpen && <ListItemText primary={text} />}
              </ListItem>
            </Tooltip>
          ))}
        </List>

        {/* Divider between sections */}
        <Divider />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
