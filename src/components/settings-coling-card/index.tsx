import { Alert, Box, Snackbar } from "@mui/material";
import { useState } from "react";
import {
  ConsultIcon,
  EditIcon,
  TrashIcon,
  WindBlueIcon,
} from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import { ButtonLink } from "../buttons/button-link";
import { ButtonMain } from "../buttons/button-main";
import { DialogSettingsHistory } from "../dialogs/dialog-settings-history";
import { DialogSettingsHistoryLarge } from "../dialogs/dialog-settings-history-large";
import { AdjustCard } from "../settings-adjust-card";
import { SettingsInfoCard } from "../settings-info-card";
import * as s from "./styles";

export const SettingsColingCard = () => {
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
      <Box sx={s.Header} mb={4.5} mt={2}>
        {window.innerWidth < 600 ? (
          <></>
        ) : (
          <>
            <s.Icon src={WindBlueIcon} />
            <Box sx={s.BoxTitle}>
              <Box mr={1.2}>
                <LabelInter
                  text={"Resfriamento da"}
                  fontWeight="300"
                  fontSize={24}
                />
              </Box>
              <LabelInter text={"Massa"} fontWeight="700" fontSize={24} />
            </Box>
          </>
        )}
      </Box>
      <Box sx={s.Content}>
        <SettingsInfoCard color="#65DAFF" text="Dados de configuração" />
        <AdjustCard
          text="Tempo de"
          subTitle="resfriamento da massa"
          about="min."
          marginBottom={2}
          marginTop={2}
          toggleEnabled={isEnabled}
        />
        <AdjustCard
          text="Limite de"
          subTitle="resfriamento"
          about="ºC"
          toggleEnabled={isEnabled}
          mr={2.2}
        />
        <AdjustCard
          text="Velocidade dos"
          subTitle="ventiladores"
          about="%"
          toggleEnabled={isEnabled}
          marginBottom={2}
          mr={3}
        />
        <AdjustCard
          text="Selecionar contagem do tempo de resfriamento continuo ou so quando os"
          subTitle="ventiladores estiverem ligados"
          about="ºC"
          toggleEnabled={isEnabled}
          marginBottom={2}
          mr={1.8}
        />
        <AdjustCard
          text="Selecionar fim da fase por"
          subTitle="tempo, temperatura ou ambos"
          about=""
          toggleEnabled={isEnabled}
          marginBottom={2}
          marginTop={2}
        />
        <AdjustCard
          text="Selecionar realizar a"
          subTitle="operação com chuva"
          about=""
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
          fontSize={14}
          height="52px"
          onClick={() => setSuccess(true)}
        />
      </Box>
    </Box>
  );
};
