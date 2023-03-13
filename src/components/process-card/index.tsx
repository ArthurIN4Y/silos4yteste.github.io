import {
  HeaderTypography,
  HeaderTypographyStrong,
  LabelInter,
} from "../../utils/typography";
import { ContainerCard, ContainerContent, ContainerHeader } from "./styles";
import {
  CicleIcon,
  IntragranularIcon,
  MaintanceIcon,
  MassIcon,
  MenuIcon,
  RefreshIcon,
  RestIcon,
} from "../../assets/icons";

import { Box } from "@mui/material";

const ProcessStatus: any = {
  1: (
    <ContainerContent>
      <img src={IntragranularIcon} alt="intragranular" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={2}
        mb={2}
      >
        <LabelInter
          text={"Renovação do"}
          fontWeight="300"
          fontSize={18}
          lineHeight="1"
        />
        <LabelInter text={"Ar Intragranular"} fontWeight="700" fontSize={18} />
      </Box>
    </ContainerContent>
  ),
  2: (
    <ContainerContent>
      <img src={MassIcon} alt="mass" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={2}
        mb={2}
      >
        <HeaderTypography text="Resfriamento da" />
        <HeaderTypographyStrong text="Massa" />
      </Box>
    </ContainerContent>
  ),
  3: (
    <ContainerContent>
      <img src={RestIcon} alt="mass" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={2}
        mb={2}
      >
        <HeaderTypography text="Tempo de" />
        <HeaderTypographyStrong text="Descanso" />
      </Box>
    </ContainerContent>
  ),
  4: (
    <ContainerContent>
      <img src={MaintanceIcon} alt="mass" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={2}
        mb={2}
      >
        <HeaderTypography text="Aeração de" />
        <HeaderTypographyStrong text="Manutenção" />
      </Box>
    </ContainerContent>
  ),
  5: (
    <ContainerContent>
      <img src={CicleIcon} alt="mass" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={2}
        mb={2}
      >
        <HeaderTypography text="Fora de" />
        <HeaderTypographyStrong text="Ciclo" />
      </Box>
    </ContainerContent>
  ),
};

export const ProcessCard = () => (
  <ContainerCard>
    <ContainerHeader>
      <img src={RefreshIcon} alt="refresh" />
    </ContainerHeader>
    {ProcessStatus[1]}
  </ContainerCard>
);
