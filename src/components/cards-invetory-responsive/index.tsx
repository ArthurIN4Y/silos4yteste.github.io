import { LabelInter } from "../../utils/typography";
import * as s from "./styles";
import IconButton from "@mui/material/IconButton";
import { GearIconYellow } from "../../assets/icons";
import { Box, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GroupButton } from "../buttons/button-group";
import { useState } from "react";
export const InventoryCard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [onDelete, setOpenDelete] = useState(false);
  const [onEdit, setOpenEdit] = useState(false);
  
  const tooltipContent = ({ onDelete, onEdit }: any) => {
    return (
      <Box sx={s.ContainerGroupButton}>
        <GroupButton
          onDelete={onDelete}
          onEdit={onEdit}
          onRegister={() => setOpen(true)}
        />
      </Box>
    );
  };

  return (
    <s.ContainerCard onClick={() => navigate("/dashboard-silo")}>
      <s.ContainerCardHeader>
        <LabelInter text={"Silo 0015"} fontSize={18} fontWeight="700" />
        <Tooltip
          title={tooltipContent({ onEdit, onDelete })}
          placement="right"
          sx={{ cursor: "pointer" }}
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "transparent",
              },
            },
          }}
        >
          <IconButton aria-label="settings">
            <img src={GearIconYellow} alt="plus-icon" />
          </IconButton>
        </Tooltip>
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
