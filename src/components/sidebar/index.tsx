import {
  List,
  ListItemButton,
  Divider,
  ListItemText,
  Box,
  IconButton,
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
} from "../../assets/icons";
import Logo from "../../assets/images/logo.png";

import { useState } from "react";
import {
  DrawerStyled,
  Container,
  LogoContainer,
  ContainerResponsive,
  ContainerList,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();
  const handleListItemClick = (index: number, url: string | undefined) => {
    navigate(url);
    setSelectedIndex(selectedIndex === index ? -1 : index);
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
      Icon: FolderIcon,
      IconSelected: FolderIconYellow,
      Text: "Inventário",
      Divider: (!open && (
        <Divider
          sx={{ height: 2, width: 50, borderColor: "#DFBD2C", ml: "-33px" }}
        />
      )) || (
        <Divider
          sx={{ height: 2, width: 250, borderColor: "#DFBD2C", ml: "-280px" }}
        />
      ),
    },
    {
      Icon: GearIcon,
      IconSelected: GearIconYellow,
      Text: "Configurações",
      url: "/settings",
    },
    { Icon: DoubtIcon, IconSelected: DoubtIconYellow, Text: "Ajuda" },
    {
      Icon: UserIcon,
      IconSelected: UserIconYellow,
      Text: "Meus dados",
      url: "/profile",
    },
    { Icon: SignoutIcon, IconSelected: SignoutIconYellow, Text: "Desconectar" },
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
      Text: "Home",
      url: "/#",
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
                        onClick={() => handleListItemClick(index, item.url)}
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
                        onClick={() => handleListItemClick(index, item.url)}
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
                      onClick={() => handleListItemClick(index, item.url)}
                    >
                      <img src={item.Icon} alt={item.Text} />
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
