import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { SiloIcon } from "../../assets/icons";
import * as s from "./styles";

interface MenuMapProps {
  open: boolean;
}

export const MenuMap = (Props: MenuMapProps) => {
  return (
    <>
      {Props.open && (
        <s.ContainerMain>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <img src={SiloIcon} alt="icone silo" />
              </ListItemIcon>
              <ListItemText primary="Meus Silos" />
            </ListItemButton>
          </List>
        </s.ContainerMain>
      )}
    </>
  );
};
