import { Box } from "@mui/material";
import { ButtonLink } from "../../components/buttons/button-link";
import Logo from "../../assets/images/logo.png";
import * as s from "./styles";
import { LabelInter } from "../../utils/typography";
import { ButtonMain } from "../../components/buttons/button-main";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigation = useNavigate();
  return (
    <Box sx={s.Container}>
      <Box sx={s.ContainerHeader}>
        <ButtonLink
          text="Login"
          fontSize="24px"
          color="#33303E"
          onClick={() => {
            navigation("/login");
          }}
        />
      </Box>
      <Box sx={s.ContainerContent}>
        <Box mb={5}>
          <img src={Logo} alt="logo silos 4 you" />
        </Box>
        <Box mb={1}>
          <LabelInter text="Register" fontWeight="600" fontSize={40} />
        </Box>
        <Box mb={5}>
          <LabelInter
            text="Criar uma nova conta."
            fontWeight="500"
            fontSize={28}
          />
        </Box>
        <Box mb={1}>
          <Input label="Usuário" borderRadius="4px" />
        </Box>
        <Box mb={1}>
          <Input label="Senha" borderRadius="4px" />
        </Box>
        <Box mb={4}>
          <Input label="Confirmar senha" borderRadius="4px" />
        </Box>
        <Box mb={18}>
          <ButtonMain
            text="Registrar"
            borderRadius="4px"
            fontSize={24}
            width="385px"
            height="74px"
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
