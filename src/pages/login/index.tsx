import { Box } from "@mui/material";
import { ButtonLink } from "../../components/buttons/button-link";
import Logo from "../../assets/images/logo.png";
import * as s from "./styles";
import { LabelInter } from "../../utils/typography";
import { ButtonMain } from "../../components/buttons/button-main";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { DialogForgotPassword } from "../../components/dialogs/dialog-forgot-password";
import { useState } from "react";

export const LoginPage = () => {
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={s.Container}>
      <DialogForgotPassword isOpen={open} onClose={handleClose} />
      <Box sx={s.ContainerHeader}>
        <ButtonLink
          text="Registro"
          fontSize="24px"
          mr="32px"
          color="#33303E"
          onClick={() => navigation("/register")}
        />
      </Box>
      <Box sx={s.ContainerContent}>
        <Box mb={5}>
          <img src={Logo} alt="logo silos 4 you" />
        </Box>
        <Box mb={3}>
          <Input label="Usuário" borderRadius="4px" />
        </Box>
        <Box mb={1}>
          <Input label="Senha" borderRadius="4px" />
        </Box>
        <Box mb={2} ml={-31}>
          <ButtonLink
            text="Esqueci minha senha."
            color="#DFBD2C"
            fontSize="12px"
            onClick={() => setOpen(true)}
          />
        </Box>
        <Box mb={1}>
          <ButtonMain
            text="Acessar"
            borderRadius="4px"
            fontSize={24}
            width="385px"
            height="74px"
            onClick={() => navigation("/dashboard-silo")}
          />
        </Box>
        <Box
          mb={32}
          ml={-27}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <ButtonLink
            text="Problemas para fazer login?"
            color="#DFBD2C"
            fontSize="12px"
            mr="140px"
          />
        </Box>
        <LabelInter
          text="By continuing you agree to CMAK Agro Privacy Policy and Terms of Service"
          color="#D3D3D3"
          fontWeight="400"
          fontSize={16}
        />
      </Box>
    </Box>
  );
};
