import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import { Header } from "../../components/Header";

export default function Line() {
  return (
    <Box padding="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
