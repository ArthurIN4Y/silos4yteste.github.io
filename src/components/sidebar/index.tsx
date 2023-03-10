import {
  List,
  ListItemButton,
  Divider,
  ListItemText,
  Box,
  IconButton,
  Drawer,
  Avatar,
  Dialog,
  Snackbar,
  Alert,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import {
  HomeIcon,
  DashboardIcon,
  UserIcon,
  FolderIcon,
  GearIcon,
  SignoutIcon,
  DoubtIcon,
  HomeIconYellow,
  DashboardIconYellow,
  UserIconYellow,
  FolderIconYellow,
  GearIconYellow,
  DoubtIconYellow,
  SignoutIconYellow,
  RobotIcon,
  ReportIcon,
  UserProfileIcon,
} from "../../assets/icons";
import Logo from "../../assets/images/logo.png";

import { useState } from "react";
import {
  DrawerStyled,
  Container,
  LogoContainer,
  ContainerProfile,
  ContainerList,
  ContainerProfileHeader,
  ContainerProfileBody,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { LabelInter } from "../../utils/typography";
import { Input } from "../Input";
import { ButtonLink } from "../buttons/button-link";
import { ButtonMain } from "../buttons/button-main";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import * as s from "./styles";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [sendAlert, setSendAlert] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openHelp, setOpenHelp] = useState(false);

  const navigate = useNavigate();
  const handleListItemClick = (
    index: number,
    url: string | undefined,
    onClick: any
  ) => {
    navigate(url);
    setSelectedIndex(selectedIndex === index ? -1 : index);
    onClick(() => onClick());
  };

  const MenuItems = [
    {
      Icon: HomeIcon,
      IconSelected: HomeIconYellow,
      Text: "Home",
      url: "/map-page",
    },
    {
      Icon: DashboardIcon,
      IconSelected: DashboardIconYellow,
      Text: "Dashboard",
      url: "/dashboard-silo",
    },
    {
      Icon: UserIcon,
      IconSelected: UserIconYellow,
      Text: "Usuarios",
      url: "/users",
    },
    {
      Icon: ReportIcon,
      IconSelected: ReportIcon,
      Text: "Relatórios",
      url: "/report-page",
    },
    {
      Icon: FolderIcon,
      IconSelected: FolderIconYellow,
      Text: "Meus equipamentos",
      Divider: (!open && (
        <Divider
          sx={{ height: 2, width: 50, borderColor: "#DFBD2C", ml: "-33px" }}
        />
      )) || (
        <Divider
          sx={{ height: 2, width: 250, borderColor: "#DFBD2C", ml: "-280px" }}
        />
      ),
      url: "/inventory",
    },

    {
      Icon: GearIcon,
      IconSelected: GearIconYellow,
      Text: "Configurações",
      url: "/settings",
    },
    {
      Icon: DoubtIcon,
      IconSelected: DoubtIconYellow,
      Text: "Ajuda",
      onClick: () => setOpenHelp(true),
    },
    {
      Icon: UserProfileIcon,
      IconSelected: UserProfileIcon,
      Text: "Meus dados",
      onClick: () => setOpenProfile(true),
    },
  ];

  const MenuItemsResponsive = [
    {
      Icon: HomeIcon,
      IconSelected: HomeIconYellow,
      url: "/map-page",
    },
    {
      Icon: DashboardIcon,
      IconSelected: HomeIconYellow,
      url: "/dashboard-silo",
    },
    {
      Icon: ReportIcon,
      IconSelected: ReportIcon,
      Text: "Meus equipamentos",
      url: "/report-page",
    },
    {
      Icon: GearIcon,
      IconSelected: GearIconYellow,
      Text: "Home",
      url: "/settings",
    },
  ];

  return (
    <>
      <Dialog open={openHelp} onClose={() => setOpenHelp(false)}>
        <Snackbar
          open={sendAlert}
          autoHideDuration={4000}
          onClose={() => setSendAlert(false)}
        >
          <Alert
            onClose={() => setSendAlert(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Email enviado com sucesso!
          </Alert>
        </Snackbar>
        <DialogTitle>
          <LabelInter
            text={"Esta com alguma dúvida?"}
            fontSize={32}
            fontWeight="700"
          />
        </DialogTitle>
        <Box ml={3}>
          <Divider sx={{ maxWidth: "460px" }} />
        </Box>
        <DialogContent sx={s.MainContainer}>
          <Box sx={s.ContainerAlert}>
            <LabelInter
              text="Preencha os campos abaixo e logo entraremos em contato!"
              fontWeight="400"
              fontSize={14}
            />
          </Box>
          <Box sx={s.ContentContainer}>
            <Input label={"Nome de usuário"} mb={2} />
            <Input label={"Email"} mb={2} />
            <Input
              label={"Descrição"}
              multiline
              rows={6}
              placeholder="Nos conte brevemente qual a sua dúvida..."
            />
          </Box>
          <Box sx={s.ContainerButton}>
            <ButtonMain
              text="Enviar"
              color="#DFBD2C"
              width="380px"
              height="56px"
              fontSize={18}
              onClick={() => setOpen(true)}
            />
            <ButtonLink
              text="Cancelar"
              fontSize="18px"
              onClick={() => setOpenHelp(false)}
            />
          </Box>
        </DialogContent>
      </Dialog>
      <Drawer
        anchor={"right"}
        open={openProfile}
        onClose={() => setOpenProfile(false)}
      >
        <ContainerProfile>
          <ContainerProfileHeader>
            <img src={UserProfileIcon} alt="userIcon" style={{ width: 32 }} />
            <LabelInter
              text={"Meus"}
              fontSize={24}
              fontWeight="400"
              color="#474B4E"
            />
            <LabelInter
              text={"Dados"}
              fontSize={24}
              fontWeight="700"
              color="#474B4E"
            />
          </ContainerProfileHeader>
          <ContainerProfileBody mt={4}>
            <Box mr={5}>
              <Avatar sx={{ width: 123, height: 123 }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Input label="Nome de Usuario" mb={2} defaultValue="Jhon Doe" />
              <Input label="Email" mb={2} defaultValue="jhondoe@mail.com.br" />
              <Input
                label="Endereço"
                mb={2}
                defaultValue="Rua do Jhon Doe 123"
              />
              <Input label="Telefone" mb={2} defaultValue="(51) 9 9999 9999" />
              <Input
                label="Telefone Fixo"
                mb={2}
                defaultValue="(51) 9999 9999"
              />
              <Input label="CPF" mb={2} defaultValue="(123.456.789-00)" />
              <Input
                label="Senha"
                mb={2}
                defaultValue="123456789"
                type="password"
              />
              <ButtonLink text="Salvar senha" startIcon={<LockRoundedIcon />} />
            </Box>
          </ContainerProfileBody>
          <Box sx={{ position: "absolute", bottom: 16, right: 16 }}>
            <ButtonMain text="Salvar alterações" width="220px" />
          </Box>
        </ContainerProfile>
      </Drawer>
      <DrawerStyled variant="permanent" open={open}>
        <List sx={{ width: "100%" }}>
          {window.innerWidth > 600 && (
            <>
              {(!open && (
                <ListItemButton
                  onClick={() => setOpen(true)}
                  sx={{ padding: 0 }}
                >
                  <img src={RobotIcon} alt="" />
                </ListItemButton>
              )) || (
                <Box>
                  <ListItemButton onClick={() => setOpen(false)}>
                    <LogoContainer src={Logo} alt="" />
                  </ListItemButton>
                </Box>
              )}
            </>
          )}

          <ContainerList>
            {window.innerWidth > 600 ? (
              <>
                {MenuItems.map((item, index) => (
                  <Container key={item.Text}>
                    {(open && (
                      <ListItemButton
                        sx={{ padding: 0 }}
                        key={index}
                        onClick={() =>
                          handleListItemClick(index, item.url, item.onClick)
                        }
                      >
                        {(selectedIndex === index && (
                          <img src={item.IconSelected} alt={item.Text} />
                        )) || <img src={item.Icon} alt={item.Text} />}
                        <ListItemText
                          sx={
                            selectedIndex === index
                              ? { color: "#DFBD2C" }
                              : { color: "#FFFFFF" }
                          }
                        >
                          <Box ml={2}>{item.Text}</Box>
                        </ListItemText>
                        <Box sx={{ marginTop: "80px" }}>{item.Divider}</Box>
                      </ListItemButton>
                    )) || (
                      <ListItemButton
                        sx={{ paddingLeft: "35%" }}
                        key={index}
                        onClick={() =>
                          handleListItemClick(index, item.url, item.onClick)
                        }
                      >
                        {(selectedIndex === index && (
                          <img src={item.IconSelected} alt="" />
                        )) || <img src={item.Icon} alt="" />}
                        <Box sx={{ marginTop: "60px" }}>{item.Divider}</Box>
                      </ListItemButton>
                    )}

                    {open === true && selectedIndex === index && (
                      <Box
                        onClick={() => setOpen(false)}
                        sx={{
                          cursor: "pointer",
                          width: "7px",
                          height: "24px",
                          backgroundColor: "#DFBD2C",
                        }}
                      />
                    )}
                  </Container>
                ))}
              </>
            ) : (
              <>
                {MenuItemsResponsive.map((item, index) => {
                  return (
                    <IconButton
                      onClick={() => handleListItemClick(index, item.url, null)}
                    >
                      <img
                        src={item.Icon}
                        alt={item.Text}
                        style={{ width: "32px" }}
                      />
                    </IconButton>
                  );
                })}
              </>
            )}
          </ContainerList>
        </List>
      </DrawerStyled>
    </>
  );
};
