import { Box, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { CalendarIcon, ClockIcon } from "../../assets/icons";
import { SubtitleTypography } from "../../utils/typography";
import { Notifications } from "../notifications";
import { UserMenu } from "../user-menu";
import { MainContainer } from "./styles";

export const InformationsHeader = () => {
  const hourNow = new Date().getHours() + ":" + new Date().getMinutes();
  const dateNow =
    new Date().getDate() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear();

  return (
    <Box>
      <MainContainer>
        <img src={CalendarIcon} alt="" />
        <SubtitleTypography text={dateNow} fontSize={20} />
        <img src={ClockIcon} alt="" />
        <SubtitleTypography text={hourNow} fontSize={20} />
        <Box>
          <Notifications />
        </Box>
        <Avatar
          sx={{ border: "3px solid #DFBD2C", width: "32px", height: "32px" }}
        />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <SubtitleTypography text="Olá," />
          <SubtitleTypography text="João" />
        </Box>
        <UserMenu />
      </MainContainer>
      <Divider sx={{ width: "100%", marginTop: "12px" }} />
    </Box>
  );
};
