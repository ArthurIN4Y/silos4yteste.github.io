import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { HeaderTypographyStrong, LabelInter } from "../../../utils/typography";
import { ButtonMain } from "../../buttons/button-main";
import * as s from "./styles";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

export const DialogDelete = (props: Props) => {
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle>
        <HeaderTypographyStrong text="Deletar" />
      </DialogTitle>
      <Box ml={3}>
        <Divider sx={{ maxWidth: "460px" }} />
      </Box>
      <DialogContent sx={s.MainContainer}>
        <Box sx={s.ContainerAlert}>
          <WarningAmberRoundedIcon
            sx={{ width: 32, height: 32, color: "#DFBD2C", marginRight: 1 }}
          />
          <LabelInter text="ATENÇÃO!" fontWeight="700" fontSize={24} />
        </Box>
        <Box sx={s.ContentContainer}>
          <LabelInter
            text="Você tem certeza que deseja deletar o cliente Lorem?"
            fontWeight="400"
            fontSize={18}
          />
        </Box>
        <Box sx={s.Style}>
          <ButtonMain text="Cancelar" color="#B2B2B2" onClick={props.onClose} />
          <ButtonMain text="Deletar" color="#DFBD2C" onClick={props.onClose} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
