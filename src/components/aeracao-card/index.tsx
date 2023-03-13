import { Box } from "@mui/material";
import { DoneIcon, MenuIcon, RefreshIcon } from "../../assets/icons";
import {
  HeaderTypography,
  HeaderTypographyStrong,
  LabelInter,
} from "../../utils/typography";
import {
  BackgroundContainer,
  ContainerContent,
  ContainerHeader,
} from "./styles";

const ProcessStatus: any = {
  1: (
    <ContainerContent>
      <img src={DoneIcon} alt="intragranular" style={{ width: "72px", marginTop: '18px' }} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={1}
        mb={2}
      >
        <LabelInter text="Aeração" lineHeight="1" fontSize={18} fontWeight="300" />
        <LabelInter text="Rodando" fontSize={18} fontWeight="700" />
      </Box>
    </ContainerContent>
  ),
};

export const AeracaoCard = () => (
  <BackgroundContainer>
    <ContainerHeader>
      <img src={RefreshIcon} alt="refresh" />
    </ContainerHeader>
    {ProcessStatus[1]}
  </BackgroundContainer>
);
