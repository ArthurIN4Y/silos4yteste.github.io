import { Box, IconButton } from "@mui/material";
import L from "leaflet";
import { useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { SetLocationIcon } from "../../assets/icons";
import { UserLocation } from "../../assets/icons/icons";

export const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  console.log(position, "POSITION HERE");
  const map = useMap();

  const setUsersLocation = () => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "8px",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "4px",
          marginBottom: "8px",
        }}
      >
        <IconButton onClick={setUsersLocation}>
          <img src={SetLocationIcon} alt="localização" />
        </IconButton>
      </Box>
      {position === null ? null : (
        <Marker key={position} position={position} icon={UserLocation}>
          <Popup>Você está aqui</Popup>
        </Marker>
      )}
    </>
  );
};
