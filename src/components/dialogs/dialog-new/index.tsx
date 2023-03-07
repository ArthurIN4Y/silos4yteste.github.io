import ArrowBackIosNewRounded from "@mui/icons-material/ArrowBackIosNewRounded";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { HeaderTypographyStrong } from "../../../utils/typography";
import { Badge } from "../../badge";
import { ButtonLink } from "../../buttons/button-link";
import { ButtonMain } from "../../buttons/button-main";
import * as s from "./styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  inputs: any;
  title: string;
  subtitle: string;
}

export const DialogCustom = (props: Props) => {
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle>
        <HeaderTypographyStrong text={props.title} />
      </DialogTitle>
      <Box ml={3}>
        <Divider sx={{ maxWidth: "379px" }} />
      </Box>
      <Box minWidth={"210px"} ml={3.2} mt={2}>
        <Badge text={props.subtitle} />
      </Box>
      <DialogContent>
        {props.inputs}
        <Box sx={s.Style}>
          <ButtonLink
            text="voltar"
            startIcon={<ArrowBackIosNewRounded />}
            onClick={props.onClose}
          />
          <ButtonMain text="Salvar" />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
