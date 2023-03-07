import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { LabelInter } from "../../../utils/typography";
import { ButtonMain } from "../../buttons/button-main";
import * as s from "./styles";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

export const DialogPasswordChanged = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle>
        <LabelInter
          text={"Senha alterada com sucesso!"}
          fontWeight="700"
          fontSize={24}
        />
      </DialogTitle>
      <Box ml={3}>
        <Divider sx={{ maxWidth: "460px" }} />
      </Box>
      <DialogContent sx={s.MainContainer}>
        <Box sx={s.ContentContainer}>
          <LabelInter
            text="Clique no botão abaixo para voltar para a tela de login!"
            fontWeight="400"
            fontSize={18}
          />
        </Box>
        <Box mt={4}>
          <ButtonMain
            text="Login"
            color="#DFBD2C"
            width="380px"
            height="56px"
            fontSize={18}
            onClick={() => navigate("/login")}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
