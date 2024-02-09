// React
import React, { useContext } from "react";

// MUI
import {
  Box,
  Avatar,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DomainVerificationOutlinedIcon from "@mui/icons-material/DomainVerificationOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

// App
import { useNavigate } from "react-router-dom";
import { CacheContext } from "../../../states/global/cache_context";

interface DrawerItem {
  text: string;
  icon: React.ReactNode;
  to: string;
  isDisabled: boolean;
}

const drawerItems: DrawerItem[] = [
  {
    text: "Home",
    icon: <HomeOutlinedIcon />,
    to: "/",
    isDisabled: false,
  },
  {
    text: "Objectives",
    icon: <DomainVerificationOutlinedIcon />,
    to: "",
    isDisabled: false,
  },
  {
    text: "Key Results",
    icon: <DnsOutlinedIcon />,
    to: "",
    isDisabled: false,
  },
  {
    text: "Win Session",
    icon: <EmojiEventsOutlinedIcon />,
    to: "",
    isDisabled: true,
  },
  {
    text: "Setting",
    icon: <MoreHorizIcon />,
    to: "setting",
    isDisabled: false,
  },
];

const drawerWidth: number = 240;

export const ResponsiveDrawer = React.memo(() => {
  const navigate = useNavigate();
  const { user } = useContext(CacheContext);

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
      open
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          // width: "100%",
          padding: 24,
          boxSizing: "border-box",
        }}
      >
        <Avatar>{user.userName[0]}</Avatar>
        {user.userName}
      </Box>

      {drawerItems.map((item) => (
        <ListItem key={item.text}>
          <ListItemButton
            disabled={item.isDisabled}
            onClick={() => navigate(item.to)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </Drawer>
  );
});
