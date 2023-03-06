import { Box, Divider } from "@mui/material";
import { MaxIcon, MinIcon, RainCloudIcon } from "../../assets/icons";
import {
  DayTypography,
  SupportTypography,
  SupportTypographyStrong,
} from "../../utils/typography";
import {
  BackgroundContainer,
  BoxInformation,
  ContainerInformations,
} from "./styles";

export const MeteriologyCard = () => (
  <BackgroundContainer>
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <DayTypography text="Sexta-feira," />
      <SupportTypography fontSize={10} text="21/01/2023 | 08:41" />
    </Box>
    <Box
      sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}
    >
      <Box
        ml={2}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img src={RainCloudIcon} alt="Rain cloud" />
        <SupportTypographyStrong fontSize={48} text="17º" />
      </Box>
      <Box mt={2} ml={3.5}>
        <DayTypography text="Nublado" />
        <SupportTypography fontSize={10} text="Umidade: 60%" />
        <SupportTypography fontSize={10} text="Chuva: 5mm - 90%" />
      </Box>
    </Box>
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Box mr={1}>
        <img src={MinIcon} alt="Min" />
      </Box>
      <Box mr={2.5}>
        <SupportTypography fontSize={10} text="Min.: 17º" />
      </Box>
      <Box mr={1}>
        <img src={MaxIcon} alt="Min" />
      </Box>
      <SupportTypography fontSize={10} text="Máx.: 22º" />
    </Box>
    <ContainerInformations>
      <BoxInformation>
        <Box>
          <SupportTypography fontSize={12} text="Temp. Interna" />
          <SupportTypographyStrong fontSize={12} text="22º" />
        </Box>
        <Box>
          <SupportTypography fontSize={12} text="Temp. Externa" />
          <SupportTypographyStrong fontSize={12} text="17º" />
        </Box>
      </BoxInformation>
      <Divider sx={{ width: "100%" }} />
      <BoxInformation>
        <Box>
          <SupportTypography fontSize={12} text="Umidade Interna" />
          <SupportTypographyStrong fontSize={12} text="52%" />
        </Box>
        <Box>
          <SupportTypography fontSize={12} text="Umidade Externa" />
          <SupportTypographyStrong fontSize={12} text="60%" />
        </Box>
      </BoxInformation>
      <Divider sx={{ width: "100%" }} />
      <BoxInformation>
        <Box>
          <SupportTypography fontSize={12} text="Vel. do Vento" />
          <SupportTypographyStrong fontSize={12} text="25Km/h" />
        </Box>
        <Box>
          <SupportTypography fontSize={12} text="Direção do Vento" />
          <SupportTypographyStrong fontSize={12} text="NE" />
        </Box>
      </BoxInformation>
      <Divider sx={{ width: "100%" }} />
      <BoxInformation>
        <Box>
          <SupportTypography fontSize={12} text="Precipitação Acumulada" />
          <SupportTypographyStrong fontSize={12} text="127,8mm" />
        </Box>
        <Box>
          <SupportTypography fontSize={12} text="Preciptação Ult. Minutos" />
          <SupportTypographyStrong fontSize={12} text="115,2mm" />
        </Box>
      </BoxInformation>
      <Divider sx={{ width: "100%" }} />
      <BoxInformation>
        <Box>
          <SupportTypography fontSize={12} text="Altitude" />
          <SupportTypographyStrong fontSize={12} text="27m" />
        </Box>
        <Box>
          <SupportTypography fontSize={12} text="Pressão Atmosférica" />
          <SupportTypographyStrong fontSize={12} text="920bar(g)" />
        </Box>
      </BoxInformation>
    </ContainerInformations>
  </BackgroundContainer>
);
