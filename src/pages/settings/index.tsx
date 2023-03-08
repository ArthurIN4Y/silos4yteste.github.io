import { Avatar, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { BellIcon, GearIconYellow } from "../../assets/icons";
import { Footer } from "../../components/footer-nav";
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
  const [width, setWidth] = useState(false);

  const resize = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setWidth(true);
      } else setWidth(false);
    });
  };

  useEffect(() => {
    resize();
  }, []);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SideBar />
      <s.ContainerMain>
        <Box sx={s.Header} mb={1}>
          {window.innerWidth < 600 ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
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
              <img src={BellIcon} alt="bell-icon" />
              <UserMenu haveAvatar />
            </>
          ) : (
            <>
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
              <Box sx={s.ContainerRight}>
                <Box>
                  <img src={BellIcon} alt="bell-icon" />
                </Box>
                <Avatar sx={s.Avatar} />
                <Box display={"flex"} flexDirection={"row"} ml={1}>
                  <LabelInter text="Olà," fontWeight="400" fontSize={14} />
                  <LabelInter
                    text="João"
                    fontWeight="700"
                    fontSize={14}
                    marginLeft={"16px"}
                  />
                </Box>
                <UserMenu />
              </Box>
            </>
          )}
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
      </s.ContainerMain>
    </Box>
  );
};
