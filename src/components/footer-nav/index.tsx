import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  GearIcon,
  HomeIcon,
  ReportIcon,
} from "../../assets/icons";
import * as s from "./styles";

export const Footer = () => {
const navigation = useNavigate()
  return (
    <s.Footer>
      <IconButton onClick={() => navigation('/map-page')}>
        <img src={HomeIcon} alt="Home icon" />
      </IconButton>
      <IconButton onClick={() => navigation('/dashboard-silo')}>
        <img src={DashboardIcon} alt="Home icon" />
      </IconButton>
      <IconButton >
        <img src={ReportIcon} alt="Home icon" />
      </IconButton>
      <IconButton onClick={() => navigation('/settings')}>
        <img src={GearIcon} alt="Home icon" />
      </IconButton>
    </s.Footer>
  );
};
