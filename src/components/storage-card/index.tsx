import { Box } from "@mui/material";
import { AeracaoRiscIcon, MenuIcon, RefreshIcon } from "../../assets/icons";
import {
  HeaderTypography,
  HeaderTypographyStrong,
} from "../../utils/typography";
import { ContainerCard, ContainerContent, ContainerHeader } from "./styles";

const ProcessStatus: any = {
  1: (
    <ContainerContent>
      <img src={AeracaoRiscIcon} alt="intragranular" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={1}
        mb={2}
      >
        <HeaderTypography text="Aeração com" fontSize={18}/>
        <HeaderTypographyStrong text="risco de aumentar " fontSize={18} />
        <HeaderTypography text="a temperatura dos grãos" fontSize={18}/>
      </Box>
    </ContainerContent>
  ),
};

export const StorageCard = () => (
  <ContainerCard>
    <ContainerHeader>
      <img src={RefreshIcon} alt="refresh" />
    </ContainerHeader>
    {ProcessStatus[1]}
  </ContainerCard>
);
