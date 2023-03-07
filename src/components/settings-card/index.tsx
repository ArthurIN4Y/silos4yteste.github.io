import { Alert, Box, Snackbar } from "@mui/material";
import { useState } from "react";
import { ConsultIcon, EditIcon, RestIcon } from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import { ButtonLink } from "../buttons/button-link";
import { ButtonMain } from "../buttons/button-main";
import { DialogSettingsHistory } from "../dialogs/dialog-settings-history";
import { AdjustCard } from "../settings-adjust-card";
import { SettingsInfoCard } from "../settings-info-card";
import * as s from "./styles";

interface CardProps {
  onClick: () => void;
  onClose: () => void;
  open: any;
}

export const SettingsCard = ({ onClick, open, onClose }: CardProps) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [openHistory, setOpenHistory] = useState(false);

  const handleClose = () => setOpenHistory(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <>
      <DialogSettingsHistory
        isOpen={openHistory}
        name={"Tempo de descanso"}
        onClose={handleClose}
      />
      <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
        <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
          Configuração enviada com sucesso!
        </Alert>
      </Snackbar>
      <Box sx={s.Container}>
        <Box sx={s.Header} mb={1}>
          <s.Icon src={RestIcon} />
          <Box mr={1.2}>
            <LabelInter text={"Tempo de"} fontWeight="300" fontSize={24} />
          </Box>
          <LabelInter text={"Descanso"} fontWeight="700" fontSize={24} />
        </Box>
        <Box sx={s.Content}>
          <SettingsInfoCard color="#FFC46C" text="Dados de configuração" />
          <AdjustCard
            text="Tempo de"
            subTitle="Descanso"
            about="min."
            marginBottom={2}
            marginTop={2}
            toggleEnabled={isEnabled}
          />
        </Box>
        <Box sx={s.Footer}>
          <Box sx={s.ButtonContainer}>
            <ButtonLink
              onClick={() => setOpenHistory(true)}
              text="Consultar"
              startIcon={<img src={ConsultIcon} alt="consultar" />}
              color="#7A7786"
            />
            <ButtonLink
              onClick={toggleSwitch}
              text="Editar"
              startIcon={<img src={EditIcon} alt="consultar" />}
              color="#7A7786"
            />
          </Box>
          <ButtonMain
            text="Enviar configuração para o CLP"
            width="320px"
            height="52px"
            onClick={onClick}
          />
        </Box>
      </Box>
    </>
  );
};
