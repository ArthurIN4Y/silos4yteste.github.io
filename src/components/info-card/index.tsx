import { Box } from "@mui/material";
import { MenuIcon, OpenIcon, WindAlertIcon } from "../../assets/icons";
import {
  HeaderTypography,
  HeaderTypographyStrong,
  SupportTypography,
} from "../../utils/typography";
import { BackgroundContainer } from "./styles";

export const InfoCard = () => {
  return (
    <BackgroundContainer>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <img src={MenuIcon} alt="Menu" />
      </Box>
      <img src={WindAlertIcon} alt="WindAlert" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={2}
        mb={2}
      >
        <HeaderTypography text="Aeração" />
        <HeaderTypographyStrong text="Recomendada" />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
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
