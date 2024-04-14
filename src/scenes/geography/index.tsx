import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import GeographyChart from "../../components/Geography";

export default function Geography() {
  return (
    <Box padding="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
}
