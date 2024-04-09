import { Box } from "@mui/material";

import HeaderDashboard from "./HeaderDashboard";
import { StatBox } from "../../components/StatBox";
function Dashboard() {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <HeaderDashboard />
      <Box gap="20px" display="flex" justifyContent="space-around">
        <StatBox />
        <StatBox />
        <StatBox />
        <StatBox />
      </Box>
    </Box>
  );
}
export default Dashboard;
