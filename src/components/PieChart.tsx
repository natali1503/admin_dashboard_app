import { ResponsivePie } from "@nivo/pie";
import { useTheme, Typography, Stack } from "@mui/material";
import { animated } from "@react-spring/web";
import { PieData } from "../data/interfaceMockData.ts";
import { tokens } from "../theme";
import { mockPieData } from "../data/mockData.ts";

export default function PieChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;
  const total = mockPieData.reduce((acc, el) => {
    return (acc += el.value);
  }, 0);
  const data = mockPieData
    .sort((a, b) => {
      if (a.value - b.value > 0) return 1;
      if (a.value - b.value < 0) return -1;
      return 0;
    })
    .reduce((acc: PieData[], el, i) => {
      mode === "dark"
        ? (el.color = colors.blueAccent[Number(`${i + 1}00`)])
        : (el.color = colors.blueAccent[Number(`${mockPieData.length - i}00`)]);
      acc.push(el);
      return acc;
    }, []);
  const CenteredMetric = ({
    centerX,
    centerY,
  }: {
    centerX: number;
    centerY: number;
  }) => {
    return (
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="central"
        fill={colors.grey[100]}
        style={{
          fontSize: "52px",
          fontWeight: 600,
        }}
      >
        {total.toLocaleString()}
      </text>
    );
  };
  return (
    <ResponsivePie
      data={data}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={5}
      enableArcLabels={true}
      layers={["arcs", "arcLabels", "arcLinkLabels", CenteredMetric]}
      theme={{
        text: {
          fontSize: 16,
        },
        annotations: {
          text: {
            fontSize: 74,
          },
        },
      }}
      colors={{ datum: "data.color" }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsThickness={0}
      arcLinkLabelsTextColor={colors.grey[100]}
      sortByValue={true}
      valueFormat={(value) => {
        return `${Math.trunc((value / total) * 100)} %`;
      }}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["brighter", 10]],
      }}
      arcLabelsComponent={({ label, style }) => {
        return (
          <animated.g
            transform={style.transform}
            style={{ pointerEvents: "none" }}
          >
            <text
              textAnchor="middle"
              fill={colors.grey[900]}
              style={{
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              {label}
            </text>
          </animated.g>
        );
      }}
      tooltip={(e) => {
        return (
          <Stack
            bgcolor={mode ? colors.grey[900] : colors.grey[100]}
            padding={1}
            sx={{ opacity: 0.9 }}
            flexDirection={"row"}
            gap={2}
          >
            <Typography
              fontWeight={600}
              color={
                mode === "dark"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[400]
              }
              variant="h4"
            >
              {e.datum.label}
            </Typography>
            <Typography fontWeight={600} variant="h5">
              {e.datum.value}
            </Typography>
          </Stack>
        );
      }}
    />
  );
}
