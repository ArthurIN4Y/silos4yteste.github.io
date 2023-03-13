import { Box } from "@mui/material";
import { MenuIcon, OpenIcon, WindAlertIcon } from "../../assets/icons";
import {
  HeaderTypography,
  HeaderTypographyStrong,
  LabelInter,
  SupportTypography,
} from "../../utils/typography";
import { BackgroundContainer } from "./styles";

export const InfoCard = () => {
  return (
    <BackgroundContainer>
      <Box mt={2}>
        <img src={WindAlertIcon} alt="WindAlert" />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={1}
        mb={3.5}
      >
        <LabelInter text="Aeração" lineHeight="1" fontSize={18} fontWeight="300"/>
        <LabelInter text="Recomendada" fontSize={18} fontWeight="700" />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
          mt: -2.5,
        }}
      >
        <SupportTypography
          fontSize={10}
          text="Ver diagrama de aeração de grãos"
        />
        <Box ml={1}>
          <img src={OpenIcon} alt="Menu" />
        </Box>
      </Box>
    </BackgroundContainer>
  );
};
