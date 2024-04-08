import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockBarData } from "../data/mockData.ts";

export default function BarChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;
  const keys = ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"];
  const data = mockBarData.reduce((acc: [], el: object, i: number) => {
    if (mode === "dark") {
      for (let i = 0; i < keys.length; i++) {
        const keyObj = `${keys[i]}Color`;
        el[keyObj] = colors.blueAccent[`${i + 1}00`];
      }
    } else {
      for (let i = 0; i < keys.length; i++) {
        const keyObj = `${keys[i]}Color`;
        el[keyObj] = colors.blueAccent[`${i + 1}00`];
      }
    }
    acc.push(el);
    return acc;
  }, []);
  return (
    <ResponsiveBar
      data={data}
      theme={{
        labels: {
          text: {
            fill: colors.grey[900],
            fontSize: 16,
            fontWeight: 600,
          },
        },
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
            fontSize: 14,
          },
        },
      }}
      animate={false}
      indexBy="country"
      keys={keys}
      margin={{ top: 40, right: 110, bottom: 80, left: 40 }}
      padding={0.2}
      colors={({ id, data }) => String(data[`${id}Color`])}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      enableGridY={false}
      axisLeft={null}
      axisBottom={{
        tickSize: 6,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      labelSkipWidth={0}
      labelSkipHeight={0}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 10,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      // valueFormat={{ colors }}
      // ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
      labelTextColor={{ theme: "labels.text.fill" }}
    />
  );
}
