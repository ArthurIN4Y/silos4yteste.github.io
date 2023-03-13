import {
  CapacityIcon,
  GrainIcon,
  SiloImage,
  WeightIcon,
} from "../../assets/icons";
import { theme } from "../../utils/theme";
import { Box, Dialog, Divider, IconButton } from "@mui/material";
import { LabelInter } from "../../utils/typography";
import {
  ContainerHeader,
  ContainerSubtitle,
  ContainerAbout,
  ContainerMain,
  ContainerSubtitleCam,
} from "./styles";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useState } from "react";
import { ButtonMain } from "../buttons/button-main";

export const UnitCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Box ml={40}>
        <IconButton>
          <CancelRoundedIcon onClick={() => setOpen(false)} />
        </IconButton>
        </Box>
        <Box sx={{ padding: "24px", marginTop: '-32px' }}>
          <LabelInter text={"Interna"} fontSize={18} fontWeight={"300"} />

          <img
            src="http://173.198.10.174/mjpg/video.mjpg"
            alt=""
            width={320}
            height={220}
            style={{ borderRadius: "10px" }}
          />
          <LabelInter text={"Externa"} fontSize={18} fontWeight={"300"} />

          <img
            src="http://62.242.189.219/mjpg/video.mjpg"
            alt=""
            width={320}
            height={220}
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Dialog>
      <ContainerMain mt={2}>
        <ContainerHeader>
          <LabelInter text="Unidade" fontSize={22} fontWeight="500" />
          <LabelInter
            text="São Leopoldo | 015"
            fontSize={22}
            fontWeight="700"
          />
        </ContainerHeader>
        <ContainerSubtitleCam>
          <ContainerSubtitle>
            <LabelInter
              text="Armazém Expointer | Região Sul"
              fontSize={14}
              fontWeight="400"
              color={theme.palette.text.secondary}
            />
          </ContainerSubtitle>
          {/* <ButtonLink
            text={"Câmeras"}
            startIcon={<VideocamRoundedIcon />}
            mt={"-12px"}
            onClick={() => setOpen(true)}
          /> */}
        </ContainerSubtitleCam>
        <ContainerAbout>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Box mr={1}>
              <img src={GrainIcon} alt="grain type" style={{ height: 22 }} />
            </Box>
            <LabelInter
              text="Tipo de grão:"
              fontSize={14}
              fontWeight="700"
              color={theme.palette.text.secondary}
            />
            <LabelInter
              text="Soja"
              fontSize={14}
              fontWeight="400"
              color={theme.palette.text.secondary}
            />
          </Box>
          <Box mr={1} ml={2}>
            <img src={CapacityIcon} alt="Capacity" style={{ height: 22 }} />
          </Box>
          <LabelInter
            text="Capacidade:"
            fontSize={14}
            fontWeight="700"
            color={theme.palette.text.secondary}
          />
          <LabelInter
            text="5000m³"
            fontSize={14}
            fontWeight="400"
            color={theme.palette.text.secondary}
          />
        </ContainerAbout>
        <ContainerAbout>
          <Box mr={1}>
            <img src={WeightIcon} alt="Weight now" style={{ height: 22 }} />
          </Box>
          <LabelInter
            text="Peso Atual:"
            fontSize={14}
            fontWeight="700"
            color={theme.palette.text.secondary}
          />
          <LabelInter
            text="60.000kg"
            fontSize={14}
            fontWeight="400"
            color={theme.palette.text.secondary}
          />
        </ContainerAbout>
        {window.innerWidth < 600 && (
          <ButtonMain
            text={"Câmeras"}
            startIcon={<CameraAltRoundedIcon />}
            onClick={() => setOpen(true)}
            widthRes={"100%"}
          />
        )}
        <Box mt={"4px"}>
          <img
            src={SiloImage}
            alt="Silo image"
            // style={(window.innerWidth < 600 && { width: 390 })}
          />
        </Box>
        {(window.innerWidth < 600 && <></>) || (
          <Divider sx={{ width: 330, borderColor: "#D9D9D9" }} />
        )}
      </ContainerMain>
    </>
  );
};
