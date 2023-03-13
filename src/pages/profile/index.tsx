import { Avatar, Box, IconButton } from "@mui/material";
import { ButtonLink } from "../../components/buttons/button-link";
import { ButtonMain } from "../../components/buttons/button-main";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import Logo from "../../assets/images/logo.png";

import * as s from "./styles";
import { Input } from "../../components/Input";
import { SideBar } from "../../components/sidebar";
import { UserMenu } from "../../components/user-menu";
import { useState } from "react";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

export const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [image, setImage] = useState([]);
  console.log(image);
  const SelectImagetoUploadFromWindows = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    };
    input.click();
  };

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
              <Avatar sx={{ width: 123, height: 123 }} src={image} />
              <Box sx={{ marginLeft: "-50px", marginTop: "100px" }}>
                <IconButton onClick={SelectImagetoUploadFromWindows}>
                  <CameraAltRoundedIcon
                    sx={{
                      backgroundColor: "#FFF",
                      border: "1px solid #DFBD2C",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      padding: "8px",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
            <ButtonMain
              text="Editar meus dados"
              widthRes="180px"
              onClick={() => setEdit(true)}
            />
            <Input
              label="Nome de Usuario"
              mb={2}
              defaultValue="Jhon Doe"
              disabled={edit === false}
            />
            <Input
              label="Email"
              mb={2}
              defaultValue="jhondoe@mail.com.br"
              disabled={edit === false}
            />
            <Input
              label="Endereço"
              mb={2}
              defaultValue="Rua do Jhon Doe 123"
              disabled={edit === false}
            />
            <Input
              disabled={edit === false}
              label="Telefone"
              mb={2}
              defaultValue="(51) 9 9999 9999"
            />
            <Input
              disabled={edit === false}
              label="Telefone Fixo"
              mb={2}
              defaultValue="(51) 9999 9999"
            />
            <Input
              disabled={edit === false}
              label="CPF"
              mb={2}
              defaultValue="(123.456.789-00)"
            />
            <Input
              label="Senha"
              mb={2}
              defaultValue="123456789"
              type="password"
              disabled={editPassword === false}
            />
            <ButtonLink
              text={editPassword ? "Salvar senha" : "Alterar senha"}
              startIcon={<LockRoundedIcon />}
              onClick={() => setEditPassword(!editPassword)}
            />
            <Box mt={2} mb={12}>
              <ButtonMain
                text="Salvar alterações"
                widthRes="220px"
                disabled={edit === false}
              />
            </Box>
          </Box>
        </s.ContainerProfileBody>
      </s.ContainerProfile>
    </Box>
  );
};
