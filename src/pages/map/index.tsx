import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  IconButton,
} from "@mui/material";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { MarkerIcon } from "../../assets/icons/icons";
import "./styles.css";
import * as s from "./styles";
import { Input } from "../../components/Input";
import { SelectRegion } from "../../components/buttons/select-region";
import { SelectSilo } from "../../components/buttons/select-silo";
import { SelectCity } from "../../components/buttons/select-city";
import { SideBar } from "../../components/sidebar";
import { MapInfoCard } from "../../components/map-info-card";
import {
  MapStylesNormal,
  MapStylesSatelite,
  MenuIcon,
  SearchIcon,
} from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import { LocationMarker } from "../../components/location-on-map";
import L from "leaflet";
import { MenuMap } from "../../components/menu-map";
import { Footer } from "../../components/footer-nav";

const cordinates = [
  {
    id: 1,
    lat: -29.77903921080505,
    long: -51.12501860461128,
  },
  {
    id: 2,
    lat: -29.76088987047471,
    long: -51.125516751609744,
  },
  {
    id: 3,
    lat: -29.7735185202775,
    long: -51.10478864108434,
  },
  {
    id: 4,
    lat: -13.069886156662378,
    long: -55.90493883295435,
  },
  {
    id: 5,
    lat: -16.940292781935145,
    long: -48.8552445628937,
  },
];

export const MapPage = () => {
  const [view, setView] = useState("light-v11");
  const [onOpen, setOnOpen] = useState(false);
  const [width, setWidth] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setView(event.target.value as string);
  };

  const handleOpen = () => {
    setOnOpen((prevState) => !prevState);
  };

  const resize = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setWidth(true);
      } else setWidth(false);
    });
  };

  useEffect(() => {
    resize();
  }, []);

  return (
    <>
      <MapContainer
        center={[-29.77903921080505, -51.12501860461128]}
        zoom={15}
        zoomControl={true}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${view}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX_TOKEN}`}
        />
        {cordinates.map((cordinate) => {
          return (
            <Marker
              key={cordinate.id}
              position={[cordinate.lat, cordinate.long]}
              icon={MarkerIcon}
            >
              <Popup>
                <MapInfoCard />
              </Popup>
            </Marker>
          );
        })}
        <s.Container>
          {width ? (
            <>
              <SideBar />
            </>
          ) : (
            <>
              <Footer />
            </>
          )}
          <s.ContainerFilters>
            <Box>
              <s.ButtonMenuContainer>
                <IconButton aria-label="menu" onClick={() => handleOpen()}>
                  <img src={MenuIcon} alt="icon menu" />
                </IconButton>
                <Input
                  placeholder="Pesquise o id do Silo"
                  backgroundColor="#FFF"
                  width={width ? "320px" : "220px"}
                />
                <IconButton
                  aria-label="menu"
                  onClick={() => console.log("clicou")}
                >
                  <img src={SearchIcon} alt="icon menu" />
                </IconButton>
              </s.ButtonMenuContainer>
              <MenuMap open={onOpen} />
            </Box>
            {width && (
              <s.ContainerSelectFilter>
                <SelectRegion />
                <SelectCity />
                <SelectSilo />
              </s.ContainerSelectFilter>
            )}
          </s.ContainerFilters>
        </s.Container>
        <s.ContainerSelectMapStyle>
          <s.BackgroundStyleMap>
            {width ? (
              <>
                <FormControl>
                  <Box mb={1}>
                    <LabelInter
                      text={"Tipo de mapa"}
                      fontSize={12}
                      fontWeight="700"
                    />
                  </Box>
                  <Select
                    size="small"
                    value={view}
                    onChange={handleChange}
                    sx={s.style}
                  >
                    <MenuItem value={"light-v11"}>
                      <Box mr={1}>
                        <img src={MapStylesNormal} alt="map styles" />
                      </Box>
                      Padrão
                    </MenuItem>
                    <MenuItem value={"satellite-streets-v12"}>
                      <Box mr={1}>
                        <img src={MapStylesSatelite} alt="map styles" />
                      </Box>
                      Satélite
                    </MenuItem>
                  </Select>
                </FormControl>
              </>
            ) : (
              <>
                <FormControl>
                  <Select
                    size="small"
                    value={view}
                    onChange={handleChange}
                    sx={s.style}
                  >
                    <MenuItem value={"light-v11"}>
                      <img src={MapStylesNormal} alt="map styles" />
                    </MenuItem>
                    <MenuItem value={"satellite-streets-v12"}>
                      <img src={MapStylesSatelite} alt="map styles" />
                    </MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
          </s.BackgroundStyleMap>
          <s.UserLocationContainer>
            <LocationMarker />
          </s.UserLocationContainer>
        </s.ContainerSelectMapStyle>
      </MapContainer>
    </>
  );
};
