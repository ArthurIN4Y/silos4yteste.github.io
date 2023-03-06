import { Logout, Settings } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowDownIcon,
  FolderIcon,
  GearIcon,
  HelpIcon,
  SignoutIcon,
} from "../../assets/icons";

interface UserMenuProps {
  haveAvatar?: boolean;
}

export const UserMenu = ({ haveAvatar }: UserMenuProps) => {
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {haveAvatar ? (
        <>
          <IconButton onClick={handleClick}>
            <Avatar />
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
        <MenuItem onClick={() => navigation("/profile")}>
          <Avatar /> Meus dados
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <img src={FolderIcon} alt="icone de ajuda" />
          </ListItemIcon>
          Inventario
        </MenuItem>
        <MenuItem onClick={() => {}}>
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
      </Menu>
    </>
  );
};