import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Box, Button, useTheme } from "@mui/material";

import { Header } from "../../components/Header";
import { dashboard } from "../../data/headerData/headerData";
import { tokens } from "../../theme";
function HeaderDashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title={dashboard.title} subtitle={dashboard.subtitle}></Header>
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
    </Box>
  );
}
export default HeaderDashboard;
