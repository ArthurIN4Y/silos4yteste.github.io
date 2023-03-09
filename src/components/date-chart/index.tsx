import { useState } from "react";
import { RadialChart } from "react-vis";

export const DateChart = () => {
  const [data, setData] = useState([
    { angle: 4, value: "45%", color: "#DFBD2C" },
    { angle: 1, value: "5%",color: "#FFE160" },
    { angle: 3, value: "30%",color: "#FFEB98" },
    { angle: 2, value: "20%",color: "#E4E4E4" },
    
  ]);

  return (
    <div className="App">
      <Chart data={data} />
    </div>
  );
};

function Chart({ data }: any) {
  return (
    <RadialChart
      colorType="literal"
      innerRadius={50}
      radius={75}
      data={data}
      color={(d: any) => d.color}
      width={160}
      height={160}
      animation={"gentle"}
      showLabels={true}
      getLabel={(d: any) => d.value}
    />
  );
}
