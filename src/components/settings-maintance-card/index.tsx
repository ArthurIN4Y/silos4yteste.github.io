import { Alert, Box, Snackbar } from "@mui/material";
import { useState } from "react";
import {
  ConsultIcon,
  EditIcon,
  ProgrammerMaintanceIcon,
  TrashIcon,
} from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import { ButtonLink } from "../buttons/button-link";
import { ButtonMain } from "../buttons/button-main";
import { DialogSettingsHistoryLarge } from "../dialogs/dialog-settings-history-large";
import { AdjustCard } from "../settings-adjust-card";
import { SettingsInfoCard } from "../settings-info-card";
import * as s from "./styles";

export const SettingsMaintanceCard = () => {
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
      <Box sx={s.Header} mb={5.8} mt={5}>
        <s.Icon src={ProgrammerMaintanceIcon} />
        <Box mr={1.2}>
          <LabelInter text={"Aeração de"} fontWeight="300" fontSize={24} />
        </Box>
        <LabelInter text={"Manutenção"} fontWeight="700" fontSize={24} />
      </Box>
      <Box sx={s.Content}>
        <SettingsInfoCard color="#D3D3D3" text="Dados de configuração" />
        <AdjustCard
          text="Limite superios da"
          subTitle="umidade de equilibrio"
          about="%"
          marginBottom={2}
          marginTop={2}
          toggleEnabled={isEnabled}
        />
        <AdjustCard
          text="Tolerância superior da 
          zona de controle da"
          subTitle="umidade de equilíbrio"
          toggleEnabled={isEnabled}
          about="%"
        />
        <AdjustCard
          text="Tolerância inferior da 
          zona de controle da"
          subTitle="umidade de equilíbrio"
          about="%"
          toggleEnabled={isEnabled}
          marginBottom={2}
        />
        <AdjustCard
          text="Limite de temperatura"
          subTitle="aceite super secagem"
          about="ºC"
          toggleEnabled={isEnabled}
          marginBottom={2}
        />
        <AdjustCard
          text="Limite quebra de umidade com"
          subTitle="temperatura baixa"
          about="%"
          toggleEnabled={isEnabled}
          marginBottom={2}
        />
        <AdjustCard
          text="Limite temperatura aceite"
          subTitle="aumento de umidade"
          about="ºC"
          marginBottom={2}
          toggleEnabled={isEnabled}
          marginTop={2}
        />
      </Box>
      <Box sx={s.Footer}>
        <Box sx={s.ButtonContainer}>
          <ButtonLink
            onClick={handleOpen}
            text="Consultar"
            startIcon={<img src={ConsultIcon} alt="consultar" />}
            color="#7A7786"
          />
          <ButtonLink
            onClick={handleToggle}
            text="Editar"
            startIcon={<img src={EditIcon} alt="editar" />}
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
