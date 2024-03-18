import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { MenuData, MenuItem } from "./menuTypes";

const bar = new MenuItem("Bar Chart", "/bar", <BarChartOutlinedIcon />);

const pie = new MenuItem("Pie Char", "/pie", <PieChartOutlineOutlinedIcon />);
const line = new MenuItem("Line Chart", "/line", <TimelineOutlinedIcon />);
const geography = new MenuItem(
  "Geography Chart",
  "/geography",
  <MapOutlinedIcon />
);
const menuCharts = new MenuData("Charts", [bar, pie, line, geography]);

export default menuCharts;
