import { LabelInter } from "../../utils/typography";
import { GrainIcon, CapacityIcon, WeightIcon } from "../../assets/icons";
import * as s from "./styles";
import { ButtonMain } from "../buttons/button-main";
import { useNavigate } from "react-router-dom";

export const MapInfoCard = () => {
  const navigate = useNavigate();
  return (
    <s.ContainerMain>
      <s.TitleWrapper mb={0.5}>
        <s.Circle />
        <LabelInter
          text={"Silo 0015 - São Leopoldo "}
          fontSize={13}
          fontWeight="700"
        />
      </s.TitleWrapper>
      <s.SubtitleWrapper mb={1}>
        <LabelInter
          text={"Região Sul  | Armazem IN4Y"}
          fontSize={9}
          fontWeight="500"
        />
      </s.SubtitleWrapper>
      <s.ContentWrapper>
        <img src={GrainIcon} alt="Imagem" />
        <LabelInter text={"Tipo de grão:"} fontSize={10} fontWeight="700" />
        <LabelInter text={"Soja"} fontSize={10} fontWeight="500" />
      </s.ContentWrapper>
      <s.ContentWrapper>
        <img src={CapacityIcon} alt="Imagem" />
        <LabelInter text={"Capacidade:"} fontSize={10} fontWeight="700" />
        <LabelInter text={"1000 m³"} fontSize={10} fontWeight="500" />
      </s.ContentWrapper>
      <s.ContentWrapper mb={2}>
        <img src={WeightIcon} alt="Imagem" />
        <LabelInter text={"Peso atual:"} fontSize={10} fontWeight="700" />
        <LabelInter text={"500 toneladas"} fontSize={10} fontWeight="500" />
      </s.ContentWrapper>
      <ButtonMain text="Ver mais" onClick={() => navigate("/dashboard-silo")} />
    </s.ContainerMain>
  );
};
