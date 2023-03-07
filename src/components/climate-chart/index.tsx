import { ContainerBackground } from "./styles";
import { curveCatmullRom } from "d3-shape";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";

export const ClimateChart = () => (
  <>
    <XYPlot width={1030} height={300}>
      <HorizontalGridLines
        style={{ stroke: "#C9CBCD", strokeDasharray: "6" }}
      />
      <VerticalGridLines style={{ stroke: "#FFFFFF" }} />
      <XAxis
        style={{
          text: { stroke: "none", fill: "#6b6b76", fontWeight: 300 },
        }}
      />
      <YAxis style={{ fontFamily: "inter", fill: "#72758A" }} />
      <LineSeries
        className="first-series"
        curve={curveCatmullRom.alpha(0.2)}
        data={[
          { x: 1, y: 3 },
          { x: 2, y: 5 },
          { x: 3, y: 15 },
          { x: 4, y: 12 },
        ]}
        color={"#DFBD2C"}
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 6,
          fill: "none",
        }}
      />
      <LineSeries
        color={"#979797"}
        className="third-series"
        curve={curveCatmullRom.alpha(0.2)}
        data={[
          { x: 1, y: 10 },
          { x: 2, y: 4 },
          { x: 3, y: 2 },
          { x: 4, y: 15 },
        ]}
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 6,
          fill: "none",
        }}
      />
      <LineSeries
        color={"#000000"}
        className="fourth-series"
        curve={curveCatmullRom.alpha(0.2)}
        data={[
          { x: 1, y: 7 },
          { x: 2, y: 11 },
          { x: 3, y: 9 },
          { x: 4, y: 2 },
        ]}
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 6,
          fill: "none",
        }}
      />
    </XYPlot>
  </>
);
