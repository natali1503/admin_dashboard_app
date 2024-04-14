import { Box } from "@mui/material";

import HeaderDashboard from "./HeaderDashboard";
import { StatBox } from "../../components/StatBox";
import { dataForStatBox } from "../../data/dataForStatBox";

function Dashboard() {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <HeaderDashboard />
      <Box
        gap="20px"
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        // flexBasis={0}
        // flexGrow={1}
      >
        {dataForStatBox.map((data, i) => {
          return (
            <StatBox
              key={i}
              title={data.getTitle()}
              icon={data.getIcon()}
              value={data.getValue()}
              precent={data.getPrecent()}
            />
          );
        })}
      </Box>
    </Box>
  );
}
export default Dashboard;
