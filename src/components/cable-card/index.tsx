import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import {
  CableTitleTypography,
  CelciusTypography,
  DetailsTypography,
  SupportTypography,
  SupportTypographyStrong,
  TemperatureTypography,
} from "../../utils/typography";
import {
  BackgroundContainer,
  TemperatureContainer,
  ToolTipContainer,
} from "./styles";

interface Props {
  text: string;
  data: any;
}

export const CableCard = ({ text, data }: Props) => {
  const TooltipContente = () => {
    return (
      <ToolTipContainer>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <SupportTypographyStrong text="Cabo 4 | " fontSize={12} />
          <SupportTypography text=" Sensor 4" fontSize={12} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <DetailsTypography text="Temperatura: " fontSize={12} />
          <DetailsTypography text={data.sensors.sensor_4 + "º"} fontSize={12} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <DetailsTypography text="Umidade: " fontSize={12} />
          <DetailsTypography text={"15%"} fontSize={12} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <DetailsTypography text="Umidade de equilib.: " fontSize={12} />
          <DetailsTypography text={"15%"} fontSize={12} />
        </Box>
      </ToolTipContainer>
    );
  };
  return (
    <BackgroundContainer>
      <Box mt={1} mb={1}>
        <CableTitleTypography text={text} />
      </Box>
      <>
        <Tooltip
          title={TooltipContente()}
          placement="right"
          sx={{ cursor: "pointer" }}
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "transparent",
              },
            },
          }}
        >
          <TemperatureContainer color={"#CDB44A"}>
            <TemperatureTypography text="Temperatura" />
            <CelciusTypography text={data.sensors.sensor_1 + "º"} />
          </TemperatureContainer>
        </Tooltip>
        <Tooltip
          title={TooltipContente()}
          placement="right"
          sx={{ cursor: "pointer" }}
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "transparent",
              },
            },
          }}
        >
          <TemperatureContainer color={"#D9C46B"}>
            <TemperatureTypography text="Temperatura" />
            <CelciusTypography text={data.sensors.sensor_2 + "º"} />
          </TemperatureContainer>
        </Tooltip>
        <Tooltip
          title={TooltipContente()}
          placement="right"
          sx={{ cursor: "pointer" }}
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "transparent",
              },
            },
          }}
        >
          <TemperatureContainer color={"#DFBD2C"}>
            <TemperatureTypography text="Temperatura" />
            <CelciusTypography text={data.sensors.sensor_3 + "º"} />
          </TemperatureContainer>
        </Tooltip>
        <Tooltip
          title={TooltipContente()}
          placement="right"
          sx={{ cursor: "pointer" }}
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "transparent",
              },
            },
          }}
        >
          <TemperatureContainer color={"#EED35F"}>
            <TemperatureTypography text="Temperatura" />
            <CelciusTypography text={data.sensors.sensor_4 + "º"} />
          </TemperatureContainer>
        </Tooltip>
        <Tooltip
          title={TooltipContente()}
          placement="right"
          sx={{ cursor: "pointer" }}
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "transparent",
              },
            },
          }}
        >
          <TemperatureContainer color={"#EBDB99"}>
            <TemperatureTypography text="Temperatura" />
            <CelciusTypography text={data.sensors.sensor_5 + "º"} />
          </TemperatureContainer>
        </Tooltip>
      </>
    </BackgroundContainer>
  );
};
