import { Box } from "@mui/material";
import * as s from "./styles";
import Logo from "../../assets/images/logo.png";
import { LabelInter } from "../../utils/typography";
import { Input } from "../../components/Input";
import { ButtonMain } from "../../components/buttons/button-main";
import { DialogPasswordChanged } from "../../components/dialogs/dialog-password-changed";
import { useState } from "react";

export const ResetPassword = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={s.Container}>
      <DialogPasswordChanged isOpen={open} onClose={handleClose} />
      <Box mb={5}>
        <img src={Logo} alt="logo silos 4 you" />
      </Box>
      <Box sx={{ width: "300px", textAlign: "center" }}>
        <LabelInter
          text="Preencha os campos abaixo para solicitar alterar definitivamente sua senha!"
          fontWeight="400"
          fontSize={14}
        />
      </Box>
      <Box mt={4}>
        <Input label="Nova senha" mb={2} />
        <Input label="Confirme a nova senha" mb={6.75} />
      </Box>
      <Box>
        <ButtonMain
          text="Enviar"
          color="#DFBD2C"
          width="380px"
          height="56px"
          fontSize={18}
          onClick={() => setOpen(true)}
        />
      </Box>
    </Box>
  );
};
