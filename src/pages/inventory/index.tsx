import * as s from "./styles";
import { Avatar, Box } from "@mui/material";
import { SideBar } from "../../components/sidebar";
import { BellIcon, FolderIconYellow } from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import { UserMenu } from "../../components/user-menu";
import { InformationsHeader } from "../../components/informations-header";
import { TableInventory } from "../../components/table-inventory";
import { useState } from "react";
import { ButtonLink } from "../../components/buttons/button-link";
import { InventoryCard } from "../../components/cards-invetory-responsive";
import Logo from "../../assets/images/logo.png";

const data = [
  {
    id: 1,
    name: "Lorem",
    equipamento: "Silo",
    status: "Ativo",
    grain: "Lorem",
    latLng: "lat: -29.7788025, lng: -51.1238223",
  },
  {
    id: 2,
    name: "Lorem",
    equipamento: "Silo",
    status: "Ativo",
    grain: "Lorem",
    latLng: "lat: -29.7788025, lng: -51.1238223",
  },
  {
    id: 3,
    name: "Lorem",
    equipamento: "Silo",
    status: "Ativo",
    grain: "Lorem",
    latLng: "lat: -29.7788025, lng: -51.1238223",
  },
  {
    id: 4,
    name: "Lorem",
    equipamento: "Silo",
    status: "Ativo",
    grain: "Lorem",
    latLng: "lat: -29.7788025, lng: -51.1238223",
  },
  {
    id: 5,
    name: "Lorem",
    equipamento: "Silo",
    status: "Ativo",
    grain: "Lorem",
    latLng: "lat: -29.7788025, lng: -51.1238223",
  },
  {
    id: 6,
    equipamento: "Silo",
    status: "Ativo",
    grain: "Lorem",
    latLng: "lat: -29.7788025, lng: -51.1238223",
  },
  {
    id: 7,
    name: "Lorem",
    equipamento: "Silo",
    status: "Ativo",
    grain: "Lorem",
    latLng: "lat: -29.7788025, lng: -51.1238223",
  },
];

export const InventoryPage = () => {
  const [viewMoreEquipments, setViewMoreEquipments] = useState(false);

  return (
    <Box>
      <SideBar />
      {window.innerWidth > 600 ? (
        <>
          <Box component={"main"}>
            <s.ContainerHeader>
              <s.ContainerText>
                <img
                  src={FolderIconYellow}
                  alt="folder image"
                  style={{ width: 40 }}
                />
                <LabelInter text={"Seu"} fontWeight="300" fontSize={26} />
                <LabelInter
                  text={"Inventario"}
                  fontWeight="700"
                  fontSize={26}
                />
              </s.ContainerText>
              <s.ContainerMenu>
                <img src={BellIcon} alt="bell-icon" />
                <Avatar />
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
              </s.ContainerMenu>
            </s.ContainerHeader>
            <s.ContainerBody>
              <s.ContainerTable>
                <TableInventory data={data} more={viewMoreEquipments} />
                <s.ContainerSeeMore>
                  {viewMoreEquipments ? (
                    <>
                      <s.ContainerSeeMore>
                        <ButtonLink
                          text="Ver menos..."
                          onClick={() => setViewMoreEquipments(false)}
                        />
                      </s.ContainerSeeMore>
                    </>
                  ) : (
                    <s.ContainerSeeMore>
                      <ButtonLink
                        text="Ver mais..."
                        onClick={() => setViewMoreEquipments(true)}
                      />
                    </s.ContainerSeeMore>
                  )}
                </s.ContainerSeeMore>
              </s.ContainerTable>
            </s.ContainerBody>
          </Box>
        </>
      ) : (
        <>
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
          <s.ContainerBody>
            <Box mt={10}>
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
            </Box>
          </s.ContainerBody>
        </>
      )}
    </Box>
  );
};
