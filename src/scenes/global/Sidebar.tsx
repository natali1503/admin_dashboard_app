import { Box, IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
// import { P } from "react-pro-sidebar";
import { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";

import { tokens } from "../../theme";
import SidebarItem, { Item } from "./SidebarItem";
import menuData from "../../data/menuData/MenuData";
import menuCharts from "../../data/menuData/MenuCharts";
import menuPages from "../../data/menuData/MenuPages";

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": { backgroundColor: "transparent !important" },
        "& .pro-inner-item": { padding: "5px 35px 5px 20px !important" },
        "& .pro-inner-item:hover": { color: "#868dfb !important" },
        "& .pro-menu-item.active": { color: "#6870fa !important" },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/KATE4592.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Natalia Sitnikova
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              chapter={menuData.chapter}
              item={menuData.item}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              chapter={menuPages.chapter}
              item={menuPages.item}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              chapter={menuCharts.chapter}
              item={menuCharts.item}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
export default Sidebar;
