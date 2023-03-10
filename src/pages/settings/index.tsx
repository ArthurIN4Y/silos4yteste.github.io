import { Avatar, Box } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BellIcon,
  GearIconYellow,
  ProgrammerMaintanceIcon,
  RestIcon,
  WindAeracaoIcon,
  WindBlueIcon,
} from "../../assets/icons";
import { Footer } from "../../components/footer-nav";
import { SettingsAirCard } from "../../components/settings-air-card";
import { SettingsCard } from "../../components/settings-card";
import { SettingsColingCard } from "../../components/settings-coling-card";
import { SettingsMaintanceCard } from "../../components/settings-maintance-card";
import { SideBar } from "../../components/sidebar";
import { UserMenu } from "../../components/user-menu";
import { LabelInter } from "../../utils/typography";
import * as s from "./styles";
import Logo from "../../assets/images/logo.png";
import { Notifications } from "../../components/notifications";

export const SettingsPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SideBar />
      <s.ContainerMain>
        <Box sx={s.Header} mb={1}>
          {window.innerWidth < 600 ? (
            <s.ContainerHeader>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                mt={1}
              >
                <s.LogoContainer src={Logo} />
              </Box>
              <UserMenu haveAvatar />
            </s.ContainerHeader>
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
                  <Notifications/>
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
          <Box mt={11.5}>
            <Box mb={3}>
              {window.innerWidth < 600 ? (
                <s.ContainerTitle>
                  <s.Icon src={RestIcon} />
                  <Box mr={1.2}>
                    <LabelInter
                      text={"Tempo de"}
                      fontWeight="300"
                      fontSize={24}
                    />
                  </Box>
                  <LabelInter
                    text={"Descanso"}
                    fontWeight="700"
                    fontSize={24}
                  />
                </s.ContainerTitle>
              ) : (
                <> </>
              )}
              <SettingsCard
                open={open}
                onClick={() => setOpen(true)}
                onClose={() => setOpen(false)}
              />
            </Box>
            {window.innerWidth < 600 ? (
              <s.ContainerTitle>
                <s.Icon src={WindAeracaoIcon} />
                <Box mr={1.2}>
                  <LabelInter
                    text={"Renovação do ar"}
                    fontWeight="300"
                    fontSize={24}
                  />
                </Box>
                <LabelInter
                  text={"Intragranular"}
                  fontWeight="700"
                  fontSize={24}
                />
              </s.ContainerTitle>
            ) : (
              <> </>
            )}
            <SettingsAirCard />
          </Box>
          <Box>
            {window.innerWidth < 600 ? (
              <s.ContainerTitle>
                <s.Icon src={WindBlueIcon} />
                <Box mr={1.2}>
                  <LabelInter
                    text={"Rsfriamento da"}
                    fontWeight="300"
                    fontSize={24}
                  />
                </Box>
                <LabelInter text={"Massa"} fontWeight="700" fontSize={24} />
              </s.ContainerTitle>
            ) : (
              <> </>
            )}
            <SettingsColingCard />
          </Box>
          <Box>
            {window.innerWidth < 600 ? (
              <s.ContainerTitle>
                <s.Icon src={ProgrammerMaintanceIcon} />
                <Box mr={1.2}>
                  <LabelInter
                    text={"Aeração de"}
                    fontWeight="300"
                    fontSize={24}
                  />
                </Box>
                <LabelInter
                  text={"Manutenção"}
                  fontWeight="700"
                  fontSize={24}
                />
              </s.ContainerTitle>
            ) : (
              <> </>
            )}
            <SettingsMaintanceCard />
          </Box>
        </Box>
      </s.ContainerMain>
    </Box>
  );
};
