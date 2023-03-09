import * as s from "./styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { SideBar } from "../../components/sidebar";
import {
  BellIcon,
  CapacityIcon,
  GrainIcon,
  MapPinIcon,
  ReportIcon,
  ReportIconYellow,
  StorageIcon,
  TermologyIcon,
  WeightIcon,
} from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import { UserMenu } from "../../components/user-menu";

import Logo from "../../assets/images/logo.png";
import { SelectButton } from "../../components/buttons/select-button";
import { SelectCity } from "../../components/buttons/select-city";
import { DatePick } from "../../components/date-picker";
import { ButtonMain } from "../../components/buttons/button-main";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClimateChart } from "../../components/climate-chart";
import { DateChart } from "../../components/date-chart";

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

export const ReportPage = () => {
  return (
    <Box>
      <SideBar />
      {window.innerWidth > 600 ? (
        <>
          <Box component={"main"}>
            <s.ContainerHeader>
              <s.ContainerText>
                <img
                  src={ReportIconYellow}
                  alt="report image"
                  style={{ width: 36 }}
                />
                <LabelInter
                  text={"Relatórios"}
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
              <Box mt={2}>
                <s.ContainerFilters>
                  <Box>
                    <LabelInter
                      text={"Equipamento"}
                      fontSize={14}
                      fontWeight="400"
                    />
                    <SelectCity />
                  </Box>
                  <Box>
                    <LabelInter
                      text={"Status"}
                      fontSize={14}
                      fontWeight="400"
                    />
                    <SelectCity />
                  </Box>
                  <Box ml={2}>
                    <LabelInter
                      text={"Data inicial"}
                      fontSize={14}
                      fontWeight="400"
                    />
                    <DatePick />
                  </Box>
                  <Box ml={2}>
                    <LabelInter
                      text={"Data final"}
                      fontSize={14}
                      fontWeight="400"
                    />
                    <DatePick />
                  </Box>
                  <Box mt={2.5} ml={4}>
                    <ButtonMain
                      text="Gerar Relátorio"
                      width="200px"
                      height="41px"
                    />
                  </Box>
                  <Box mt={2.5} ml={4}>
                    <ButtonMain text="Baixar PDF" width="200px" height="41px" />
                  </Box>
                </s.ContainerFilters>
              </Box>
              <s.ContainerAccordion mt={8}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <LabelInter
                      text={"Silo 0015"}
                      fontSize={20}
                      fontWeight="700"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <s.ContainerChart>
                      <DateChart />
                      <Box ml={3}>
                        <s.ContainerLegend>
                          <s.SquareLegend backgroundColor={"#DFBD2C"} />
                          <LabelInter
                            text={"Tempo em atividade"}
                            fontSize={12}
                            fontWeight={"400"}
                            marginLeft={"4px"}
                          />
                        </s.ContainerLegend>
                        <s.ContainerLegend>
                          <s.SquareLegend backgroundColor={"#FFE160"} />
                          <LabelInter
                            text={"Tempo desligada"}
                            fontSize={12}
                            fontWeight={"400"}
                            marginLeft={"4px"}
                          />
                        </s.ContainerLegend>
                        <s.ContainerLegend>
                          <s.SquareLegend backgroundColor={"#FFEB98"} />
                          <LabelInter
                            text={"Tempo em manutenção"}
                            fontSize={12}
                            fontWeight={"400"}
                            marginLeft={"4px"}
                          />
                        </s.ContainerLegend>
                        <s.ContainerLegend>
                          <s.SquareLegend backgroundColor={"#E4E4E4"} />
                          <LabelInter
                            text={"Outros"}
                            fontSize={12}
                            fontWeight={"400"}
                            marginLeft={"4px"}
                          />
                        </s.ContainerLegend>
                      </Box>
                      <Box ml={6}>
                        <Box sx={{ display: "flex" }}>
                          <img
                            src={GrainIcon}
                            alt="grain icon"
                            style={{ width: 24, marginRight: 8 }}
                          />
                          <LabelInter
                            text={"Tipo de grão armazenado"}
                            fontSize={16}
                            fontWeight={"400"}
                          />
                        </Box>
                        <Box ml={4}>
                          <LabelInter
                            text={"Soja"}
                            fontSize={14}
                            fontWeight={"700"}
                          />
                        </Box>
                        <Box sx={{ display: "flex" }} mt={4}>
                          <img
                            src={WeightIcon}
                            alt="grain icon"
                            style={{ width: 24, marginRight: 8 }}
                          />
                          <LabelInter
                            text={"Peso atual"}
                            fontSize={16}
                            fontWeight={"400"}
                          />
                        </Box>
                        <Box ml={4}>
                          <LabelInter
                            text={"60.000Kg"}
                            fontSize={14}
                            fontWeight={"700"}
                          />
                        </Box>
                      </Box>
                      <Box ml={6}>
                        <Box sx={{ display: "flex" }}>
                          <img
                            src={CapacityIcon}
                            alt="grain icon"
                            style={{ width: 24, marginRight: 8 }}
                          />
                          <LabelInter
                            text={"Capacidade de armazenado"}
                            fontSize={16}
                            fontWeight={"400"}
                          />
                        </Box>
                        <Box ml={4}>
                          <LabelInter
                            text={"5000m³"}
                            fontSize={14}
                            fontWeight={"700"}
                          />
                        </Box>
                      </Box>
                      <Box ml={6}>
                        <Box sx={{ display: "flex" }}>
                          <img
                            src={TermologyIcon}
                            alt="grain icon"
                            style={{ width: 24, marginRight: 8 }}
                          />
                          <LabelInter
                            text={"Análise de temperatura média"}
                            fontSize={16}
                            fontWeight={"400"}
                          />
                        </Box>
                        <Box ml={4} display="flex">
                          <LabelInter
                            text={"Cabo Um:"}
                            fontSize={14}
                            fontWeight={"400"}
                          />
                          <LabelInter
                            text={"24°C"}
                            fontSize={14}
                            marginLeft={"4px"}
                            fontWeight={"700"}
                          />
                        </Box>
                        <Box ml={4} display="flex">
                          <LabelInter
                            text={"Cabo Dois:"}
                            fontSize={14}
                            fontWeight={"400"}
                          />
                          <LabelInter
                            text={"23°C"}
                            fontSize={14}
                            marginLeft={"4px"}
                            fontWeight={"700"}
                          />
                        </Box>
                        <Box ml={4} display="flex">
                          <LabelInter
                            text={"Cabo Três:"}
                            fontSize={14}
                            fontWeight={"400"}
                          />
                          <LabelInter
                            text={"20°C"}
                            fontSize={14}
                            marginLeft={"4px"}
                            fontWeight={"700"}
                          />
                        </Box>
                        <Box ml={4} display="flex">
                          <LabelInter
                            text={"Cabo Quatro:"}
                            fontSize={14}
                            fontWeight={"400"}
                          />
                          <LabelInter
                            text={"18°C"}
                            fontSize={14}
                            fontWeight={"700"}
                            marginLeft={"4px"}
                          />
                        </Box>
                      </Box>
                      <Box ml={6}>
                        <Box sx={{ display: "flex" }}>
                          <img
                            src={MapPinIcon}
                            alt="grain icon"
                            style={{ width: 24, marginRight: 8 }}
                          />
                          <LabelInter
                            text={"Localização do silo"}
                            fontSize={16}
                            fontWeight={"400"}
                          />
                        </Box>
                        <Box ml={4}>
                          <LabelInter
                            text={"lat: -29.7788025, lng: -51.1238223"}
                            fontSize={14}
                            fontWeight={"700"}
                          />
                        </Box>
                      </Box>
                    </s.ContainerChart>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <LabelInter
                      text={"Silo 0014"}
                      fontSize={20}
                      fontWeight="700"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </s.ContainerAccordion>
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
            <s.ContainerFilters>
              <Box display={"flex"} mb={3}>
                <Box>
                  <LabelInter
                    text={"Equipamento"}
                    fontSize={14}
                    fontWeight="400"
                  />
                  <SelectCity width="180px" />
                </Box>
                <Box ml={2.5}>
                  <LabelInter text={"Status"} fontSize={14} fontWeight="400" />
                  <SelectCity width="180px" />
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box>
                  <LabelInter
                    text={"Data inicial"}
                    fontSize={14}
                    fontWeight="400"
                  />
                  <DatePick />
                </Box>
                <Box ml={2.5}>
                  <LabelInter
                    text={"Data final"}
                    fontSize={14}
                    fontWeight="400"
                  />
                  <DatePick />
                </Box>
              </Box>
              <Box display={"flex"} mt={4} >
                <Box mr={3}>
                  <ButtonMain
                    text="Gerar Relátorio"
                    widthRes="180px"
                    height="41px"
                  />
                </Box>
                <Box>
                  <ButtonMain text="Baixar PDF" widthRes="180px" height="41px" />
                </Box>
              </Box>
            </s.ContainerFilters>
            <s.ContainerAccordion mt={8}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <LabelInter
                    text={"Silo 0015"}
                    fontSize={20}
                    fontWeight="700"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <s.ContainerChart>
                    <Box display={"flex"} flexDirection={"row"}>
                      <DateChart />
                      <Box ml={3}>
                        <s.ContainerLegend>
                          <s.SquareLegend backgroundColor={"#DFBD2C"} />
                          <LabelInter
                            text={"Tempo em atividade"}
                            fontSize={12}
                            fontWeight={"400"}
                            marginLeft={"4px"}
                          />
                        </s.ContainerLegend>
                        <s.ContainerLegend>
                          <s.SquareLegend backgroundColor={"#FFE160"} />
                          <LabelInter
                            text={"Tempo desligada"}
                            fontSize={12}
                            fontWeight={"400"}
                            marginLeft={"4px"}
                          />
                        </s.ContainerLegend>
                        <s.ContainerLegend>
                          <s.SquareLegend backgroundColor={"#FFEB98"} />
                          <LabelInter
                            text={"Tempo em manutenção"}
                            fontSize={12}
                            fontWeight={"400"}
                            marginLeft={"4px"}
                          />
                        </s.ContainerLegend>
                        <s.ContainerLegend>
                          <s.SquareLegend backgroundColor={"#E4E4E4"} />
                          <LabelInter
                            text={"Outros"}
                            fontSize={12}
                            fontWeight={"400"}
                            marginLeft={"4px"}
                          />
                        </s.ContainerLegend>
                      </Box>
                    </Box>
                    <Box mt={4}>
                      <Box sx={{ display: "flex" }}>
                        <img
                          src={GrainIcon}
                          alt="grain icon"
                          style={{ width: 24, marginRight: 8 }}
                        />
                        <LabelInter
                          text={"Tipo de grão armazenado"}
                          fontSize={16}
                          fontWeight={"400"}
                        />
                      </Box>
                      <Box ml={4}>
                        <LabelInter
                          text={"Soja"}
                          fontSize={14}
                          fontWeight={"700"}
                        />
                      </Box>
                      <Box sx={{ display: "flex" }} mt={2}>
                        <img
                          src={WeightIcon}
                          alt="grain icon"
                          style={{ width: 24, marginRight: 8 }}
                        />
                        <LabelInter
                          text={"Peso atual"}
                          fontSize={16}
                          fontWeight={"400"}
                        />
                      </Box>
                      <Box ml={4}>
                        <LabelInter
                          text={"60.000Kg"}
                          fontSize={14}
                          fontWeight={"700"}
                        />
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Box sx={{ display: "flex" }}>
                        <img
                          src={CapacityIcon}
                          alt="grain icon"
                          style={{ width: 24, marginRight: 8 }}
                        />
                        <LabelInter
                          text={"Capacidade de armazenado"}
                          fontSize={16}
                          fontWeight={"400"}
                        />
                      </Box>
                      <Box ml={4}>
                        <LabelInter
                          text={"5000m³"}
                          fontSize={14}
                          fontWeight={"700"}
                        />
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Box sx={{ display: "flex" }}>
                        <img
                          src={TermologyIcon}
                          alt="grain icon"
                          style={{ width: 24, marginRight: 8 }}
                        />
                        <LabelInter
                          text={"Análise de temperatura média"}
                          fontSize={16}
                          fontWeight={"400"}
                        />
                      </Box>
                      <Box ml={4} display="flex">
                        <LabelInter
                          text={"Cabo Um:"}
                          fontSize={14}
                          fontWeight={"400"}
                        />
                        <LabelInter
                          text={"24°C"}
                          fontSize={14}
                          marginLeft={"4px"}
                          fontWeight={"700"}
                        />
                      </Box>
                      <Box ml={4} display="flex">
                        <LabelInter
                          text={"Cabo Dois:"}
                          fontSize={14}
                          fontWeight={"400"}
                        />
                        <LabelInter
                          text={"23°C"}
                          fontSize={14}
                          marginLeft={"4px"}
                          fontWeight={"700"}
                        />
                      </Box>
                      <Box ml={4} display="flex">
                        <LabelInter
                          text={"Cabo Três:"}
                          fontSize={14}
                          fontWeight={"400"}
                        />
                        <LabelInter
                          text={"20°C"}
                          fontSize={14}
                          marginLeft={"4px"}
                          fontWeight={"700"}
                        />
                      </Box>
                      <Box ml={4} display="flex">
                        <LabelInter
                          text={"Cabo Quatro:"}
                          fontSize={14}
                          fontWeight={"400"}
                        />
                        <LabelInter
                          text={"18°C"}
                          fontSize={14}
                          fontWeight={"700"}
                          marginLeft={"4px"}
                        />
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Box sx={{ display: "flex" }}>
                        <img
                          src={MapPinIcon}
                          alt="grain icon"
                          style={{ width: 24, marginRight: 8 }}
                        />
                        <LabelInter
                          text={"Localização do silo"}
                          fontSize={16}
                          fontWeight={"400"}
                        />
                      </Box>
                      <Box ml={4}>
                        <LabelInter
                          text={"lat: -29.7788025, lng: -51.1238223"}
                          fontSize={14}
                          fontWeight={"700"}
                        />
                      </Box>
                    </Box>
                  </s.ContainerChart>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <LabelInter
                    text={"Silo 0014"}
                    fontSize={20}
                    fontWeight="700"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </s.ContainerAccordion>
          </s.ContainerBody>
        </>
      )}
    </Box>
  );
};
