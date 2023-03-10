import { Box } from "@mui/material";
import { ButtonLink } from "../../components/buttons/button-link";
import * as s from "./styles";
import Logo from "../../assets/images/logo.png";
import { LabelInter } from "../../utils/typography";
import { ButtonMain } from "../../components/buttons/button-main";
import { useNavigate } from "react-router-dom";
import { DialogCantAccess } from "../../components/dialogs/dialog-cant-access";
import { useState } from "react";

export const Home = () => {
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <s.Container>
      <DialogCantAccess isOpen={open} onClose={handleClose} />
      <Box sx={s.ContainerHeader}>
        <ButtonLink
          text="Registro"
          fontSize={window.innerHeight > 600 ? "20px" : "24px"}
          mr="32px"
          color="#FFFFFF"
          onClick={() => navigation("/register")}
        />
        <ButtonLink
          text="Login"
          fontSize={window.innerHeight > 600 ? "20px" : "24px"}
          color="#FFFFFF"
          onClick={() => navigation("/login")}
        />
      </Box>
      <Box sx={s.ContainerContent}>
        <Box mb={5}>
          <img src={Logo} alt="logo silos 4 you" style={{ width: "320px" }} />
        </Box>
        <Box mb={3}>
          <LabelInter
            text="Entre com seu acesso"
            color="#FFFFFF"
            fontWeight="700"
            fontSize={window.innerHeight > 600 ? 24 : 32}
          />
        </Box>
        <Box mb={4}>
          <ButtonMain
            text="Fazer Login"
            width="485px"
            height={window.innerHeight > 600 ? "50px" : "85px"}
            widthRes="285px"
            borderRadius="4px"
            fontSize={window.innerHeight > 600 ? 20 : 24}
            onClick={() => navigation("/login")}
          />
        </Box>
        <Box mb={2}>
          <ButtonLink
            text="Não consigo fazer login com meu acesso."
            color="#FFFFFF"
            fontSize="16px"
            onClick={() => setOpen(true)}
          />
        </Box>
        <Box mb={30}>
          <ButtonLink
            text="Criar uma conta"
            color="#FFFFFF"
            fontSize={window.innerHeight > 600 ? "20px" : "24px"}
            onClick={() => navigation("/register")}
          />
        </Box>
        <Box sx={s.ContainerFooter}>
          <LabelInter
            text="By continuing you agree to CMAK Agro Privacy Policy and Terms of Service"
            color="#FFFFFF"
            fontWeight="400"
            fontSize={16}
          />
        </Box>
      </Box>
    </s.Container>
  );
};
