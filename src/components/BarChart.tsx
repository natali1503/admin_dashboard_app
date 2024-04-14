import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { Stack, Typography, useTheme } from "@mui/material";
import { mockBarData } from "../data/mockData.ts";
import { BarData } from "../data/interfaceMockData.ts";

export default function BarChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;

  const keys = mockBarData.reduce((acc: string[], el) => {
    const arrKeys = Array.from(el.items.keys());
    arrKeys.forEach((key: string) => {
      if (!acc.includes(key)) acc.push(key);
    });
    return acc;
  }, []);
  const data: BarData[] = mockBarData.reduce((acc: BarData[], el) => {
    const colorMap = new Map();
    for (let i = 0; i < keys.length; i++) {
      const colorNumber = +`${i + 1}00`;
      const colorStr = colors.blueAccent[colorNumber];
      el.colorItems = colorMap.set(`${keys[i]}Color`, colorStr);
    }
    acc.push(el);
    return acc;
  }, []);

  const dataForBar = data.reduce(
    (acc: { [key: string]: string | number }[], el) => {
      const items = Object.fromEntries(el.items);
      if (!el.colorItems) return acc;
      const colorItems = Object.fromEntries(el.colorItems);
      const obj = {
        country: el.country,
        ...items,
        ...colorItems,
      };
      acc.push(obj);
      return acc;
    },
    []
  );
  const dataForBarWithPercent = dataForBar.reduce(
    (acc: { [key: string]: string | number }[], el) => {
      const total = Object.entries(el).reduce((acc: number, el) => {
        if (typeof el[1] === "number") {
          acc = acc + el[1];
        }
        return acc;
      }, 0);
      const temp = { ...el };
      for (const key of keys) {
        temp[key] = Math.trunc((Number(temp[key]) / total) * 100);
      }
      acc.push(temp);
      return acc;
    },
    []
  );
  return (
    <ResponsiveBar
      data={dataForBarWithPercent}
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
      valueFormat={(value) => {
        return `${value}%`;
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
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
      labelTextColor={{ theme: "labels.text.fill" }}
      tooltip={({ indexValue, id }) => {
        const map = Object.values(mockBarData).filter(
          (el) => el.country === indexValue
        )[0].items;
        const value = map.get(id.toString());
        return (
          <Stack
            flexDirection={"row"}
            gap={2}
            sx={{ opacity: 0.9 }}
            padding={1}
            bgcolor={mode ? colors.grey[900] : colors.grey[100]}
          >
            <Typography
              fontWeight={600}
              color={
                mode === "dark"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[400]
              }
              variant="h5"
            >
              {id}
            </Typography>
            <Typography fontWeight={600} variant="h6">
              {value}
            </Typography>
          </Stack>
        );
      }}
    />
  );
}
