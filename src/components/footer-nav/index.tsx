import { IconButton } from "@mui/material";
import {
  DashboardIcon,
  GearIcon,
  HomeIcon,
  ReportIcon,
} from "../../assets/icons";
import * as s from "./styles";

export const Footer = () => {
  return (
    <s.Footer>
      <IconButton>
        <img src={HomeIcon} alt="Home icon" />
      </IconButton>
      <IconButton>
        <img src={DashboardIcon} alt="Home icon" />
      </IconButton>
      <IconButton>
        <img src={ReportIcon} alt="Home icon" />
      </IconButton>
      <IconButton>
        <img src={GearIcon} alt="Home icon" />
      </IconButton>
    </s.Footer>
  );
};
