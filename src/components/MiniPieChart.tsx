import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";

import { tokens } from "../theme.ts";

export default function MiniPieChart({ precent }: { precent: number }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      id: 1,
      value: Number(precent),
      color: colors.greenAccent[600],
    },
    {
      id: 2,
      value: 100 - Number(precent),
      color: colors.blueAccent[700],
    },
  ];

  return (
    <ResponsivePie
      data={data}
      innerRadius={0.7}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      layers={["arcs"]}
      isInteractive={false}
      colors={{ datum: "data.color" }}
      sortByValue={true}
    />
  );
}
