import { Logout, Settings } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowDownIcon,
  BellIconYellow,
  CloseIcon,
  FolderIcon,
  HelpIcon,
  SignoutIcon,
} from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import { DialogHelp } from "../dialogs/dialog-help";
import * as s from "./styles";

interface UserMenuProps {
  haveAvatar?: boolean;
}

const data = [
  {
    id: 1,
    description: "Notificação sobre alguma coisa",
  },
  {
    id: 2,
    description: "Notificação sobre alguma coisa",
  },
  {
    id: 3,
    description: "Notificação sobre alguma coisa",
  },
];

export const UserMenu = ({ haveAvatar }: UserMenuProps) => {
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openNote, setOpenNote] = useState(false);
  const [notifications, setNotifications] = useState(data);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNotification = (id: number) => {
    const newData = data.filter((item) => item.id === id);
    setNotifications(newData);
  };

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  const HandleClick = () => {
    setOpenNote(true);
    setAnchorEl(null);
  }

  return (
    <>
      <Drawer
        anchor={"right"}
        open={openNote}
        onClose={() => setOpenNote(false)}
        sx={{ zIndex: 99999 }}
      >
        <s.ContainerMain>
          <Box sx={{ display: "flex" }} mb={4}>
            <img src={BellIconYellow} alt="bell-icon" />
            <LabelInter
              text={"Notificações"}
              marginLeft={"4px"}
              fontSize={24}
              fontWeight={"700"}
            />
          </Box>
          <>
            {data.map((item: any) => {
              return (
                <>
                  {notifications && (
                    <s.CardNote>
                      <IconButton
                        onClick={() => handleCloseNotification(item.id)}
                      >
                        <img src={CloseIcon} alt="close icon" />
                      </IconButton>
                      <s.WrapperContent>
                        <img src={BellIconYellow} alt="bell-icon" />
                        <LabelInter
                          text={item.description}
                          fontSize={12}
                          fontWeight={"400"}
                          marginLeft={"4px"}
                        />
                      </s.WrapperContent>
                    </s.CardNote>
                  )}
                </>
              );
            })}
          </>
        </s.ContainerMain>
      </Drawer>
      <DialogHelp isOpen={openModal} onClose={() => setOpenModal(false)} />
      {haveAvatar ? (
        <>
          <IconButton onClick={handleClick}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#DFBD2C",
                  height: "12px",
                  width: "12px",
                  borderRadius: "6px",
                },
              }}
              badgeContent={
                <LabelInter
                  text={"12"}
                  fontSize={24}
                  fontWeight={"400"}
                  color="#000"
                />
              }
            >
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </Badge>
          </IconButton>
        </>
      ) : (
        <>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img src={ArrowDownIcon} alt="arrow-down-icon" />
          </IconButton>
        </>
      )}

      <Menu
        onClose={handleClose}
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {(window.innerWidth > 600 && (
          <>
            <MenuItem onClick={() => navigation("/")}>
              <ListItemIcon>
                <img src={SignoutIcon} alt="icone de signout" />
              </ListItemIcon>
              Desconectar
            </MenuItem>
          </>
        )) || (
          <>
            <MenuItem onClick={() => navigation("/profile")}>
              <Avatar /> Meus dados
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => HandleClick()}>
              <ListItemIcon>
                <img src={BellIconYellow} alt="Bell icon" />
              </ListItemIcon>
              Notificações
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/inventory");
              }}
            >
              <ListItemIcon>
                <img src={FolderIcon} alt="folder icon" />
              </ListItemIcon>
              Meus Equipamentos
            </MenuItem>
            <MenuItem onClick={() => setOpenModal(true)}>
              <ListItemIcon>
                <img src={HelpIcon} alt="icone de ajuda" />
              </ListItemIcon>
              Ajuda
            </MenuItem>
            <MenuItem onClick={() => navigation("/")}>
              <ListItemIcon>
                <img src={SignoutIcon} alt="icone de signout" />
              </ListItemIcon>
              Desconectar
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};
