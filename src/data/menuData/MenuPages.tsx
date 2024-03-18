import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import { MenuData, MenuItem } from "./menuTypes";

const form = new MenuItem("Profile Form", "/form", <PersonOutlinedIcon />);

const calendar = new MenuItem(
  "Calendar",
  "/calendar",
  <CalendarTodayOutlinedIcon />
);
const faq = new MenuItem("FAQ Page", "/faq", <HelpOutlineOutlinedIcon />);
const menuPages = new MenuData("Pages", [form, calendar, faq]);

export default menuPages;
