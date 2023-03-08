import { Box } from "@mui/material";
import { RainIcon, TemperatureIcon } from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import * as s from "./styles";

export const MeterelogyCardMobile = () => {
  return (
    <s.ContainerMain>
      <s.TemperatureContainer>
        <img
          src={TemperatureIcon}
          alt="thermometer"
          style={{ width: "64px" }}
        />
        <s.DividerVertical />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <s.TemperatureTextContainer>
            <LabelInter text={"Temperatura"} fontSize={14} />
            <LabelInter text={"16°"} fontSize={42} fontWeight="700" />
          </s.TemperatureTextContainer>
          <s.TemperatureTextContainerRight>
            <LabelInter text={"Minima"} fontSize={14} />
            <LabelInter text={"16°"} fontSize={12} fontWeight="700" />
            <LabelInter text={"Máxima"} fontSize={14} />
            <LabelInter text={"26°"} fontSize={12} fontWeight="700" />
          </s.TemperatureTextContainerRight>
        </Box>
      </s.TemperatureContainer>
      <s.TemperatureContainer>
        <img src={RainIcon} alt="thermometer" style={{ width: "64px" }} />
        <s.DividerVertical />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <s.TemperatureTextContainer>
            <LabelInter text={"Chuva"} fontSize={14} />
            <LabelInter text={"0,9mm"} fontSize={42} fontWeight="700" />
          </s.TemperatureTextContainer>
        </Box>
      </s.TemperatureContainer>
      <LabelInter text={"Outras medições"} fontSize={16} />
      <s.TemperatureContainer mt={1}>
        <Box width={"100%"}>
          <s.MoreInformationContainer>
            <LabelInter text={"Temp. Interna"} fontSize={14} />
            <LabelInter text={"12°"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
          <s.DividerHorizontal />
          <s.MoreInformationContainer>
            <LabelInter text={"Temp. Externa"} fontSize={14} />
            <LabelInter text={"17°"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
          <s.DividerHorizontal />
          <s.MoreInformationContainer>
            <LabelInter text={"Umidade Interna"} fontSize={14} />
            <LabelInter text={"52%"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
          <s.DividerHorizontal />
          <s.MoreInformationContainer>
            <LabelInter text={"Umidade Externa"} fontSize={14} />
            <LabelInter text={"60%"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
          <s.DividerHorizontal />
          <s.MoreInformationContainer>
            <LabelInter text={"Velocidade do Vento"} fontSize={14} />
            <LabelInter text={"25Km/h"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
          <s.DividerHorizontal />
          <s.MoreInformationContainer>
            <LabelInter text={"Direção do vento"} fontSize={14} />
            <LabelInter text={"NE"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
          <s.DividerHorizontal />
          <s.MoreInformationContainer>
            <LabelInter text={"Precipitação acumulada"} fontSize={14} />
            <LabelInter text={"127,8mm"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
          <s.DividerHorizontal />
          <s.MoreInformationContainer>
            <LabelInter text={"Precipitação Ult. Minutos"} fontSize={14} />
            <LabelInter text={"112,8mm"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
          <s.DividerHorizontal />
          <s.MoreInformationContainer>
            <LabelInter text={"Altitude"} fontSize={14} />
            <LabelInter text={"27m"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
          <s.DividerHorizontal />
          <s.MoreInformationContainer>
            <LabelInter text={"Pressão Atmosférica"} fontSize={14} />
            <LabelInter text={"920bar(g)"} fontSize={14} fontWeight="700" />
          </s.MoreInformationContainer>
        </Box>
      </s.TemperatureContainer>
    </s.ContainerMain>
  );
};
