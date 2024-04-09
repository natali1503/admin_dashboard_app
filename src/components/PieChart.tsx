import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData } from "../data/mockData.ts";
import { animated } from "@react-spring/web";
export default function PieChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;
  const data = mockPieData
    .sort((a, b) => {
      if (a.value - b.value > 0) return 1;
      if (a.value - b.value < 0) return -1;
      return 0;
    })
    .reduce((acc, el, i) => {
      mode === "dark"
        ? (el.color = colors.blueAccent[`${i + 1}00`])
        : (el.color = colors.blueAccent[`${mockPieData.length - i}00`]);
      acc.push(el);
      return acc;
    }, []);
  const CenteredMetric = ({ centerX, centerY }) => {
    const total = mockPieData.reduce((acc, el) => {
      return (acc += el.value);
    }, 0);
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
        {total}
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
                fontSize: 16,
                fontWeight: 800,
              }}
            >
              {label}
            </text>
          </animated.g>
        );
      }}
    />
  );
}
