import { Avatar, Box } from "@mui/material";
import { useState } from "react";
import { BellIcon, GearIconYellow, HelpIcon } from "../../assets/icons";
import { DialogSettingsHistory } from "../../components/dialogs/dialog-settings-history";
import { SettingsAirCard } from "../../components/settings-air-card";
import { SettingsCard } from "../../components/settings-card";
import { SettingsColingCard } from "../../components/settings-coling-card";
import { SettingsMaintanceCard } from "../../components/settings-maintance-card";
import { SideBar } from "../../components/sidebar";
import { UserMenu } from "../../components/user-menu";
import { LabelInter } from "../../utils/typography";
import * as s from "./styles";

export const SettingsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SideBar />

      <Box
        component="main"
        display={"flex"}
        flexDirection={"column"}
        mt={2}
        ml={8}
        mb={5.8}
        width="100%"
      >
        <Box sx={s.Header} mb={1}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <s.GearIcon src={GearIconYellow} />
            <Box mr={1.2}>
              <LabelInter
                text="Configuração de"
                fontWeight="300"
                fontSize={26}
              />
            </Box>
            <LabelInter text="Paramêtros" fontWeight="700" fontSize={26} />
          </Box>
          <Box>
            <Box sx={s.ContainerRight}>
              <img src={HelpIcon} alt="help-icon" />
              <img src={BellIcon} alt="bell-icon" />
              <Box sx={s.ContainerAvatar}>
                <Avatar sx={s.Avatar} />
                <Box display={"flex"} flexDirection={"row"} ml={1}>
                  <LabelInter text="Olà" fontWeight="400" fontSize={14} />
                  <LabelInter text="João" fontWeight="700" fontSize={14} />
                </Box>
              </Box>
              <UserMenu />
            </Box>
          </Box>
        </Box>
        <Box sx={s.GridContainer}>
          <Box>
            <Box mb={3}>
              <SettingsCard
                open={open}
                onClick={() => setOpen(true)}
                onClose={() => setOpen(false)}
              />
            </Box>
            <SettingsAirCard />
          </Box>
          <Box>
            <SettingsColingCard />
          </Box>
          <Box>
            <SettingsMaintanceCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
