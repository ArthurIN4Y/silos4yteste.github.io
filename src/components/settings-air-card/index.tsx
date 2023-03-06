import { Alert, Box, Snackbar } from "@mui/material";
import { useState } from "react";
import {
  ConsultIcon,
  EditIcon,
  TrashIcon,
  WindAeracaoIcon,
} from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import { ButtonLink } from "../buttons/button-link";
import { ButtonMain } from "../buttons/button-main";
import { DialogSettingsHistoryLarge } from "../dialogs/dialog-settings-history-large";
import { AdjustCard } from "../settings-adjust-card";
import { SettingsInfoCard } from "../settings-info-card";
import * as s from "./styles";

export const SettingsAirCard = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleToggle = () => setIsEnabled((previousState) => !previousState);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={s.Container}>
      <DialogSettingsHistoryLarge
        isOpen={open}
        onClose={handleClose}
        name={"Ar Intragranular"}
      />
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Configuração enviada com sucesso!
        </Alert>
      </Snackbar>
      <Box sx={s.Header} mb={1}>
        <s.Icon src={WindAeracaoIcon} />
        <Box mr={1.2}>
          <LabelInter text={"Renovação do ar"} fontWeight="300" fontSize={24} />
        </Box>
        <LabelInter text={"Intragranular"} fontWeight="700" fontSize={24} />
      </Box>
      <Box sx={s.Content}>
        <SettingsInfoCard color="#DFBD2C" text="Dados de configuração" />
        <AdjustCard
          text="Tempo de"
          subTitle="aeração ligada"
          about="min."
          marginBottom={2}
          marginTop={2}
          toggleEnabled={isEnabled}
        />
        <AdjustCard
          text="Tempo de"
          subTitle="aeração desligada"
          about="min."
          toggleEnabled={isEnabled}
        />
        <AdjustCard
          text="Velocidade dos"
          subTitle="ventiladores"
          about="%"
          marginBottom={2}
          mr={3.2}
          toggleEnabled={isEnabled}
        />
        <AdjustCard
          text="Limite de"
          subTitle="resfriamento"
          about="ºC"
          marginBottom={2}
          mr={2.4}
          toggleEnabled={isEnabled}
        />
        <AdjustCard
          text="Selecionar realizar a"
          subTitle="operação com chuva"
          about="%"
          marginBottom={2}
          marginTop={2}
          mr={3.3}
          toggleEnabled={isEnabled}
        />
      </Box>
      <Box sx={s.Footer}>
        <Box sx={s.ButtonContainer}>
          <ButtonLink
            onClick={handleOpen}
            text="Consultar histórico"
            startIcon={<img src={ConsultIcon} alt="consultar" />}
            color="#7A7786"
          />
          <ButtonLink
            onClick={handleToggle}
            text="Editar"
            startIcon={<img src={EditIcon} alt="consultar" />}
            color="#7A7786"
          />
        </Box>
        <ButtonMain
          text="Enviar configuração para o CLP"
          width="320px"
          height="52px"
          onClick={() => setSuccess(true)}
        />
      </Box>
    </Box>
  );
};
