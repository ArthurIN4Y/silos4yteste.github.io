import { LabelInter } from "../../utils/typography";
import * as s from "./styles";
import IconButton from "@mui/material/IconButton";
import { GearIconYellow } from "../../assets/icons";
import { Box } from "@mui/material";
export const InventoryCard = () => {
  return (
    <s.ContainerCard>
      <s.ContainerCardHeader>
        <LabelInter text={"Silo 0015"} fontSize={18} fontWeight="700" />
        <IconButton
          aria-label="settings button"
          onClick={() => console.log("clicou")}
        >
          <img src={GearIconYellow} alt="setting icon" />
        </IconButton>
      </s.ContainerCardHeader>
      <s.ContainerCardBody>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "230px",
          }}
        >
          <s.TextWrapper>
            <LabelInter
              text={"IdEquipamento:"}
              fontSize={14}
              fontWeight="700"
              color="#7A7786"
            />
            <LabelInter
              text={"01"}
              fontSize={14}
              fontWeight="400"
              color="#7A7786"
            />
          </s.TextWrapper>
          <s.TextWrapper>
            <LabelInter
              text={"Grão:"}
              fontSize={14}
              fontWeight="700"
              color="#7A7786"
            />
            <LabelInter
              text={"Soja"}
              fontSize={14}
              fontWeight="400"
              color="#7A7786"
            />
          </s.TextWrapper>
        </Box>
        <s.TextWrapper>
          <LabelInter
            text={"Responsável:"}
            fontSize={14}
            fontWeight="700"
            color="#7A7786"
          />
          <LabelInter
            text={"Jhon Doe"}
            fontSize={14}
            fontWeight="400"
            color="#7A7786"
          />
        </s.TextWrapper>
        <s.TextWrapper>
          <LabelInter
            text={"LatLng:"}
            fontSize={14}
            fontWeight="700"
            color="#7A7786"
          />
          <LabelInter
            text={"lat: -29.7788025, lng: -51.1238223"}
            fontSize={14}
            fontWeight="400"
            color="#7A7786"
          />
        </s.TextWrapper>
        <s.TextWrapper>
          <LabelInter
            text={"Status:"}
            fontSize={14}
            fontWeight="700"
            color="#7A7786"
          />
          <LabelInter
            text={"Ativo"}
            fontSize={14}
            fontWeight="400"
            color="#00FE6D"
          />
        </s.TextWrapper>
      </s.ContainerCardBody>
    </s.ContainerCard>
  );
};
