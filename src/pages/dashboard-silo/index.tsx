import { LabelInter, SubtitleTypography } from "../../utils/typography";
import { SideBar } from "../../components/sidebar";
import "../../utils/react-slicker/slick-custom.css";
import { UnitCard } from "../../components/unit-card";
import { InfoCard } from "../../components/info-card";
import { CableCard } from "../../components/cable-card";
import { MeteriologyCard } from "../../components/meteriology-card";
import {
  ArrowClimateIcon,
  CamIcon,
  MeteriologyIcon,
  ProcessIcon,
  StorageIcon,
  TermologyIcon,
  WindAeracaoIcon,
  WindIcon,
} from "../../assets/icons";

import { Box, SelectChangeEvent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { ProcessCard } from "../../components/process-card";
import { StorageCard } from "../../components/storage-card";
import { AeracaoCard } from "../../components/aeracao-card";
import { InformationsHeader } from "../../components/informations-header";
import { ClimateChart } from "../../components/climate-chart";
import { theme } from "../../utils/theme";
import { SelectButton } from "../../components/buttons/select-button";
import { useEffect, useState } from "react";
import * as s from "./styles";
import { UserMenu } from "../../components/user-menu";
import Logo from "../../assets/images/logo.png";
import { MeterelogyCardMobile } from "../../components/meterelogy-card-mobile";

const temperature = [
  {
    id: 1,
    name: "cabo 1",
    sensors: {
      sensor_1: 0,
      sensor_2: 1,
      sensor_3: 2,
      sensor_4: 3,
      sensor_5: 4,
    },
  },
  {
    id: 2,
    name: "cabo 2",
    sensors: {
      sensor_1: 10,
      sensor_2: 12,
      sensor_3: 22,
      sensor_4: 34,
      sensor_5: 24,
    },
  },
  {
    id: 3,
    name: "cabo 3",
    sensors: {
      sensor_1: 0,
      sensor_2: 2,
      sensor_3: 2,
      sensor_4: 4,
      sensor_5: 4,
    },
  },
  {
    id: 4,
    name: "cabo 4",
    sensors: {
      sensor_1: 11,
      sensor_2: 21,
      sensor_3: 24,
      sensor_4: 14,
      sensor_5: 5,
    },
  },
  {
    id: 5,
    name: "cabo 5",
    sensors: {
      sensor_1: 2,
      sensor_2: 21,
      sensor_3: 24,
      sensor_4: 3,
      sensor_5: 10,
    },
  },
  {
    id: 6,
    name: "cabo 6",
    sensors: {
      sensor_1: 2,
      sensor_2: 21,
      sensor_3: 24,
      sensor_4: 3,
      sensor_5: 10,
    },
  },
  {
    id: 7,
    name: "cabo 7",
    sensors: {
      sensor_1: 2,
      sensor_2: 21,
      sensor_3: 24,
      sensor_4: 3,
      sensor_5: 10,
    },
  },
  {
    id: 8,
    name: "cabo 8",
    sensors: {
      sensor_1: 2,
      sensor_2: 21,
      sensor_3: 24,
      sensor_4: 3,
      sensor_5: 10,
    },
  },
  {
    id: 9,
    name: "cabo 9",
    sensors: {
      sensor_1: 2,
      sensor_2: 21,
      sensor_3: 24,
      sensor_4: 3,
      sensor_5: 10,
    },
  },
  {
    id: 10,
    name: "cabo 10",
    sensors: {
      sensor_1: 2,
      sensor_2: 21,
      sensor_3: 24,
      sensor_4: 3,
      sensor_5: 10,
    },
  },
];

const settings = {
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: true,
};

const settings_2 = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
};

const NextArrowCustom = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#8C8A97",
        width: 12,
      }}
      onClick={onClick}
    />
  );
};

const PrevArrowCustom = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosNewRoundedIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#8C8A97",
        width: 12,
      }}
      onClick={onClick}
    />
  );
};

export const DashboardSilo = () => {
  const [period, setPeriod] = useState("");
  const [size, setSize] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  const resize = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setSize(true);
      } else setSize(false);
    });
  };

  useEffect(() => {
    resize();
  }, [window.innerWidth]);

  return (
    <>
      {window.innerWidth < 600 ? (
        <>
          <s.ContainerMain>
            <SideBar />
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
            <s.ContainerBody mt={7}>
              <UnitCard />
              <s.ContainerTitle mt={2} mb={1} ml={-10.5} width={"300px"}>
                <img src={TermologyIcon} alt="Icone de temologia" />
                <LabelInter
                  text={"Sistema de"}
                  fontSize={22}
                  fontWeight="400"
                />
                <LabelInter
                  text={"Termometria"}
                  fontSize={22}
                  fontWeight="700"
                />
              </s.ContainerTitle>
              <s.ContainerBackground width={"400px"}>
                <Slider
                  nextArrow={<NextArrowCustom />}
                  prevArrow={<PrevArrowCustom />}
                  className="my-slider"
                  {...settings_2}
                >
                  {temperature.map((item) => (
                    <CableCard data={item} text={item.name} />
                  ))}
                </Slider>
              </s.ContainerBackground>
              <s.ContainerTitle mb={1} ml={-18} width={"250px"}>
                <img src={WindIcon} alt="Icone de vento" />
                <LabelInter text={"Análise"} fontSize={22} fontWeight="400" />
                <LabelInter
                  text={"Atmosférica"}
                  fontSize={22}
                  fontWeight="700"
                />
              </s.ContainerTitle>
              <InfoCard />
              <s.ContainerScroll mt={3}>
                <s.ContainerGroupStatus>
                  <s.ContainerTitle mb={1} ml={-14} width={"210px"}>
                    <img src={WindIcon} alt="Icone de vento" />
                    <LabelInter
                      text={"Status"}
                      fontSize={22}
                      fontWeight="400"
                    />
                    <LabelInter
                      text={"Processo"}
                      fontSize={22}
                      fontWeight="700"
                    />
                  </s.ContainerTitle>
                  <ProcessCard />
                </s.ContainerGroupStatus>
                <s.ContainerGroupStatus>
                  <s.ContainerTitle mb={1} ml={-6}>
                    <img src={StorageIcon} alt="Icone de armazenamento" />
                    <LabelInter
                      text={"Status"}
                      fontSize={22}
                      fontWeight="400"
                    />
                    <LabelInter
                      text={"Armazenamento"}
                      fontSize={22}
                      fontWeight="700"
                    />
                  </s.ContainerTitle>
                  <StorageCard />
                </s.ContainerGroupStatus>
                <s.ContainerGroupStatus>
                  <s.ContainerTitle mb={1} ml={-16} width={"200px"}>
                    <img src={WindAeracaoIcon} alt="Icone de aeração" />
                    <LabelInter
                      text={"Status"}
                      fontSize={22}
                      fontWeight="400"
                    />
                    <LabelInter
                      text={"Aeração"}
                      fontSize={22}
                      fontWeight="700"
                    />
                  </s.ContainerTitle>
                  <AeracaoCard />
                </s.ContainerGroupStatus>
              </s.ContainerScroll>
              <s.ContainerTitle mt={2} mb={1} ml={-14}>
                <img src={MeteriologyIcon} alt="Icone de metereologia" />
                <LabelInter text={"Estação"} fontSize={22} fontWeight="400" />
                <LabelInter
                  text={"Metereológica"}
                  fontSize={22}
                  fontWeight="700"
                />
              </s.ContainerTitle>
              {window.innerWidth < 600 ? (
                <>
                  <MeterelogyCardMobile />
                </>
              ) : (
                <>
                  <MeteriologyCard />
                </>
              )}
            </s.ContainerBody>
          </s.ContainerMain>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SideBar />
            <Box component="main" display={"flex"} flexDirection={"row"}>
              <Box display={"flex"} flexDirection={"column"}>
                <UnitCard />
                <s.ContainerTitle mt={1} width={"280px"}>
                  <img src={MeteriologyIcon} alt="Meteriologic station" />
                  <LabelInter text={"Estação"} fontSize={22} fontWeight="300" />
                  <LabelInter
                    text={"Metereológica"}
                    fontSize={22}
                    fontWeight="700"
                  />
                </s.ContainerTitle>
                <Box mt={1}>
                  <MeteriologyCard />
                </Box>
                <s.ContainerTitle mt={2} width={"250px"}>
                  <img src={WindIcon} alt="Wind" />
                  <LabelInter text={"Análise"} fontSize={22} fontWeight="300" />
                  <LabelInter
                    text={"Atmosférica"}
                    fontSize={22}
                    fontWeight="700"
                  />
                </s.ContainerTitle>
                <Box mt={1}>
                  <InfoCard />
                </Box>
              </Box>
              <Box
                width={"1086px"}
                height={"454px"}
                display={"flex"}
                flexDirection={"column"}
                ml={4}
              >
                <Box width={"600px"} ml={94}>
                  <InformationsHeader />
                </Box>
                <s.ContainerTitle ml={1} mb={1} mt={1.5} width="300px">
                  <img src={TermologyIcon} alt="Termology" />
                  <LabelInter
                    text={"Sistema de"}
                    fontSize={22}
                    fontWeight="300"
                  />
                  <LabelInter
                    text={"Termometria"}
                    fontSize={22}
                    fontWeight="700"
                  />
                </s.ContainerTitle>
                <s.ContainerBackground>
                  <Slider
                    nextArrow={<NextArrowCustom />}
                    prevArrow={<PrevArrowCustom />}
                    className="my-slider"
                    {...settings}
                  >
                    {temperature.map((item) => (
                      <CableCard data={item} text={item.name} />
                    ))}
                  </Slider>
                </s.ContainerBackground>
                <s.ContainerTitle ml={1} width={"340px"} mb={1}>
                  <img src={CamIcon} alt="Termology" width={32} height={32} />
                  <LabelInter
                    text={"Câmeras de"}
                    fontSize={22}
                    fontWeight="300"
                  />
                  <LabelInter
                    text={"Monitoramento"}
                    fontSize={22}
                    fontWeight="700"
                  />
                </s.ContainerTitle>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <s.ContainerBackgroundChart>
                    <LabelInter
                      text={"Interna"}
                      fontSize={18}
                      fontWeight={"300"}
                    />
                    <img
                      src="http://173.198.10.174/mjpg/video.mjpg"
                      alt=""
                      width={480}
                      height={320}
                      style={{ borderRadius: "10px" }}
                    />
                  </s.ContainerBackgroundChart>
                  <s.ContainerBackgroundChart>
                    <LabelInter
                      text={"Externa"}
                      fontSize={18}
                      fontWeight={"300"}
                    />

                    <img
                      src="http://62.242.189.219/mjpg/video.mjpg"
                      alt=""
                      width={480}
                      height={320}
                      style={{ borderRadius: "10px" }}
                    />
                  </s.ContainerBackgroundChart>
                </Box>
              </Box>
              <Box ml={4} mt={8}>
                <Box>
                  <s.ContainerTitle ml={1} mb={1} width={"200px"}>
                    <img src={ProcessIcon} alt="Meteriologic station" />
                    <Box display={"flex"} flexDirection={"row"} ml={2}>
                      <LabelInter
                        text={"Status"}
                        fontSize={22}
                        fontWeight="300"
                      />
                      <LabelInter
                        text={"Processo"}
                        fontSize={22}
                        fontWeight="700"
                      />
                    </Box>
                  </s.ContainerTitle>
                  <ProcessCard />
                </Box>
                <Box mt={4}>
                  <s.ContainerTitle ml={1} mb={1} width={"190px"}>
                    <img src={StorageIcon} alt="Meteriologic station" />
                    <Box ml={2}>
                      <LabelInter
                        text={"Status"}
                        fontSize={22}
                        fontWeight="300"
                      />
                      <LabelInter
                        text={"Armazenamento"}
                        fontSize={22}
                        fontWeight="700"
                      />
                    </Box>
                  </s.ContainerTitle>
                  <StorageCard />
                </Box>
                <Box mt={4}>
                  <s.ContainerTitle ml={1} mb={2} width={"190px"}>
                    <img src={WindAeracaoIcon} alt="aeracao status" />
                    <LabelInter
                      text={"Status"}
                      fontSize={22}
                      fontWeight="300"
                    />
                    <LabelInter
                      text={"Aeração"}
                      fontSize={22}
                      fontWeight="700"
                    />
                  </s.ContainerTitle>
                  <AeracaoCard />
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
