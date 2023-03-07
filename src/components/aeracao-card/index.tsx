import { Box } from "@mui/material";
import { DoneIcon, MenuIcon, RefreshIcon } from "../../assets/icons";
import { HeaderTypography, HeaderTypographyStrong } from "../../utils/typography";
import { BackgroundContainer, ContainerContent, ContainerHeader } from "./styles";

const ProcessStatus: any = {
  1: (
    <ContainerContent>
      <img src={DoneIcon} alt="intragranular" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={1}
        mb={2}
      >
        <HeaderTypography text="Aeração" />
        <HeaderTypographyStrong text="Rodando" />
      </Box>
    </ContainerContent>
  ),
};

export const AeracaoCard = () => (
  <BackgroundContainer>
    <ContainerHeader>
      <img src={RefreshIcon} alt="refresh" />
      <img src={MenuIcon} alt="refresh" />
    </ContainerHeader>
    {ProcessStatus[1]}
  </BackgroundContainer>
);
