import { Avatar, Box } from "@mui/material";
import { ButtonLink } from "../../components/buttons/button-link";
import { ButtonMain } from "../../components/buttons/button-main";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import Logo from "../../assets/images/logo.png";

import * as s from "./styles";
import { Input } from "../../components/Input";
import { SideBar } from "../../components/sidebar";
import { UserMenu } from "../../components/user-menu";

export const Profile = () => {
  return (
    <Box>
      <SideBar />
      <s.ContainerHeader>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          mt={1}
        >
          <s.LogoContainer src={Logo} />
        </Box>
        <UserMenu haveAvatar />
      </s.ContainerHeader>
      <s.ContainerProfile>
        <s.ContainerProfileBody mt={10}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Box
              mb={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Avatar sx={{ width: 123, height: 123 }} />
            </Box>
            <Input label="Nome de Usuario" mb={2} defaultValue="Jhon Doe" />
            <Input label="Email" mb={2} defaultValue="jhondoe@mail.com.br" />
            <Input label="Endereço" mb={2} defaultValue="Rua do Jhon Doe 123" />
            <Input label="Telefone" mb={2} defaultValue="(51) 9 9999 9999" />
            <Input label="Telefone Fixo" mb={2} defaultValue="(51) 9999 9999" />
            <Input label="CPF" mb={2} defaultValue="(123.456.789-00)" />
            <Input
              label="Senha"
              mb={2}
              defaultValue="123456789"
              type="password"
            />
            <ButtonLink text="Salvar senha" startIcon={<LockRoundedIcon />} />
            <Box mt={2} mb={12}>
              <ButtonMain text="Salvar alterações" widthRes="220px" />
            </Box>
          </Box>
        </s.ContainerProfileBody>
      </s.ContainerProfile>
    </Box>
  );
};
