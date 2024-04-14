import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { linearGradientDef } from "@nivo/core";
import { mockLineData } from "../data/mockData.ts";
import { tokens } from "../theme";

export default function LineChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;
  return (
    <ResponsiveLine
      data={mockLineData}
      theme={{
        text: {
          fill: colors.grey[100],
          fontSize: 16,
          fontWeight: 700,
        },
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
              fontSize: 12,
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
              fontSize: 12,
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              fontSize: 12,
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
              fontSize: 12,
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
            fontSize: 12,
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            fontSize: 12,
          },
        },
        crosshair: {
          line: {
            stroke: ` ${mode === "dark" ? colors.grey[100] : colors.grey[100]}`,
            strokeWidth: 2,
          },
        },
      }}
      margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
      colors={{ datum: "color" }} // added
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      lineWidth={2}
      curve="catmullRom"
      enablePoints={true}
      enablePointLabel={false}
      enableArea={true}
      areaOpacity={0.15}
      areaBlendMode="normal"
      isInteractive={true}
      pointLabel="y"
      pointLabelYOffset={-12}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointBorderWidth={0}
      pointBorderColor={{ from: "serieColor" }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      useMesh={true}
      enableCrosshair={true}
      debugMesh={false}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      defs={[
        linearGradientDef("gradientA", [
          { offset: 0, color: "inherit" },
          { offset: 100, color: "inherit", opacity: 0 },
        ]),
      ]}
      fill={[{ match: "*", id: "gradientA" }]}
    />
  );
}
