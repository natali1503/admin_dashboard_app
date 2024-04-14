import { ResponsiveChoropleth } from "@nivo/geo";
import { Stack, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures.ts";
import { mockGeographyData } from "../data/mockData.ts";
import { useState } from "react";

interface LegendsData {
  id: number;
  label: string;
  hidden: boolean;
  fill: string;
}

export default function GeographyChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;

  const min = mockGeographyData.reduce((acc, el, i) => {
    if (el.value < acc || i === 0) {
      acc = el.value;
    }
    return acc;
  }, 0);
  const max = mockGeographyData.reduce((acc, el) => {
    if (el.value > acc) {
      acc = el.value;
    }
    return acc;
  }, 0);
  const quantityColor = Object.keys(colors.blueAccent).length;
  const step = Math.trunc((max - min) / quantityColor);

  const colorsGeoInitialState = Object.values(colors.blueAccent);
  const legendsDataInitialState = Object.keys(colors.blueAccent).reduce(
    (acc: LegendsData[], color, i) => {
      const start = i === 0 ? 0 : step * i;
      const end = start + step;
      const label = `${Math.trunc(start / 1000)}k - ${Math.trunc(end / 1000)}k`;
      const obj = {
        id: i + 1,
        label: `${label}`,
        hidden: false,
        fill: colors.blueAccent[Number(color)],
      };
      acc.push(obj);
      return acc;
    },
    []
  );

  const [selectedId, setSelectedId] = useState(0);
  const [colorsGeo, setColorsGeo] = useState(colorsGeoInitialState);
  const [legendsData, setLegendsData] = useState(legendsDataInitialState);

  function handleResetSelectedId() {
    setColorsGeo(colorsGeoInitialState);
    setLegendsData(legendsDataInitialState);
  }

  function changeLegendsData(selectedId: number) {
    setLegendsData(() =>
      legendsDataInitialState.map((el, i) => {
        if (selectedId === i + 1)
          return { ...el, fill: colors.greenAccent[600] };
        return { ...el, fill: `${el.fill}50` };
      })
    );
  }

  function changeColorsGeo(selectedId: number) {
    setColorsGeo(() =>
      colorsGeoInitialState.map((color, i) => {
        if (selectedId === i + 1) return colors.greenAccent[600];
        return `${color}50`;
      })
    );
  }

  return (
    <ResponsiveChoropleth
      data={mockGeographyData}
      theme={{
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
          },
        },
      }}
      features={geoFeatures.features}
      colors={colorsGeo}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor={colors.grey[500]}
      label="properties.name"
      valueFormat=".2s"
      projectionType="mercator"
      projectionScale={150}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={[
        {
          data: legendsData,
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 5,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: colors.grey[200],
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.grey[100],
                itemOpacity: 1,
              },
            },
          ],
          onClick: ({ id }) => {
            if (id === selectedId) {
              handleResetSelectedId();
              return;
            }
            setSelectedId(Number(id));

            changeLegendsData(selectedId);
            changeColorsGeo(selectedId);
          },
        },
      ]}
      tooltip={({ feature }) => {
        if (!feature.formattedValue) return;
        return (
          <Stack
            flexDirection={"row"}
            bgcolor={mode ? colors.grey[900] : colors.grey[100]}
            gap={2}
            padding={1}
            sx={{ opacity: 0.9 }}
          >
            <Stack
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: `${feature.color}`,
              }}
            ></Stack>
            <Stack>
              {feature.data.id} {feature.formattedValue}
            </Stack>
          </Stack>
        );
      }}
      onClick={(el) => {
        console.log(el);
      }}
    />
  );
}
