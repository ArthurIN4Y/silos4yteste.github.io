import {
  CapacityIcon,
  GrainIcon,
  SiloImage,
  WeightIcon,
} from "../../assets/icons";
import { theme } from "../../utils/theme";
import { Box, Divider } from "@mui/material";
import { LabelInter } from "../../utils/typography";
import {
  ContainerHeader,
  ContainerSubtitle,
  ContainerAbout,
  ContainerMain,
} from "./styles";

export const UnitCard = () => {
  return (
    <ContainerMain mt={2}>
      <ContainerHeader>
        <LabelInter text="Unidade" fontSize={22} fontWeight="500" />
        <LabelInter text="São Leopoldo | 015" fontSize={22} fontWeight="700" />
      </ContainerHeader>
      <ContainerSubtitle>
        <LabelInter
          text="Armazém Expointer | Região Sul"
          fontSize={14}
          fontWeight="400"
          color={theme.palette.text.secondary}
        />
      </ContainerSubtitle>
      <ContainerAbout>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Box mr={1}>
            <img src={GrainIcon} alt="grain type" style={{ height: 22 }} />
          </Box>
          <LabelInter
            text="Tipo de grão:"
            fontSize={14}
            fontWeight="700"
            color={theme.palette.text.secondary}
          />
          <LabelInter
            text="Soja"
            fontSize={14}
            fontWeight="400"
            color={theme.palette.text.secondary}
          />
        </Box>
        <Box mr={1} ml={2}>
          <img src={CapacityIcon} alt="Capacity" style={{ height: 22 }} />
        </Box>
        <LabelInter
          text="Capacidade:"
          fontSize={14}
          fontWeight="700"
          color={theme.palette.text.secondary}
        />
        <LabelInter
          text="5000m³"
          fontSize={14}
          fontWeight="400"
          color={theme.palette.text.secondary}
        />
      </ContainerAbout>
      <ContainerAbout>
        <Box mr={1}>
          <img src={WeightIcon} alt="Weight now" style={{ height: 22 }} />
        </Box>
        <LabelInter
          text="Peso Atual:"
          fontSize={14}
          fontWeight="700"
          color={theme.palette.text.secondary}
        />
        <LabelInter
          text="60.000kg"
          fontSize={14}
          fontWeight="400"
          color={theme.palette.text.secondary}
        />
      </ContainerAbout>
      <Box mt={"-16px"}>
        <img
          src={SiloImage}
          alt="Silo image"
          // style={(window.innerWidth < 600 && { width: 390 })}
        />
      </Box>
      {(window.innerWidth < 600 && <></>) || (
        <Divider sx={{ width: 330, borderColor: "#D9D9D9" }} />
      )}
    </ContainerMain>
  );
};
