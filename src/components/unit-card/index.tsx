import { Box, Divider } from "@mui/material";
import {
  CapacityIcon,
  GrainIcon,
  SiloImage,
  WeightIcon,
} from "../../assets/icons";
import {
  DetailsTypography,
  HeaderTypography,
  HeaderTypographyStrong,
  SubtitleTypography,
  DetailsTypographyStrong,
  LabelInter,
} from "../../utils/typography";
import {
  ContainerHeader,
  ContainerSubtitle,
  Circle,
  ContainerAbout,
} from "./styles";

export const UnitCard = () => {
  return (
    <Box mt={2}>
      <ContainerHeader>
        <HeaderTypography text="Unidade" />
        <HeaderTypographyStrong text="São Leopoldo | 015" />
        {/* <Circle />
        <LabelInter text={"ativo"} fontSize={14} color="#1DCA38" /> */}
      </ContainerHeader>
      <ContainerSubtitle>
        <SubtitleTypography text="Armazém IN4Y | Região Sul" />
      </ContainerSubtitle>
      <ContainerAbout>
        <Box mr={1}>
          <img src={GrainIcon} alt="grain type" />
        </Box>
        <DetailsTypographyStrong text="Tipo de grão:" />
        <b />
        <DetailsTypography text="Soja" />
        <Box mr={1} ml={2}>
          <img src={CapacityIcon} alt="Capacity" />
        </Box>
        <DetailsTypographyStrong text="Capacidade:" />
        <DetailsTypography text="5000m³" />
      </ContainerAbout>
      <ContainerAbout>
        <Box mr={1}>
          <img src={WeightIcon} alt="Weight now" />
        </Box>
        <DetailsTypographyStrong text="Peso atual:" />
        <DetailsTypography text="60.000kg" />
      </ContainerAbout>
      <Box mt={"-16px"}>
        <img src={SiloImage} alt="Silo image" />
      </Box>
      <Divider sx={{ width: 330, borderColor: "#D9D9D9" }} />
    </Box>
  );
};
