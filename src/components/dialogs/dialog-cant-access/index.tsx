import {
  Alert,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Snackbar,
} from "@mui/material";
import { LabelInter } from "../../../utils/typography";
import { ButtonMain } from "../../buttons/button-main";
import * as s from "./styles";
import { Input } from "../../Input";
import { ButtonLink } from "../../buttons/button-link";
import { useState } from "react";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

export const DialogCantAccess = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Email enviado com sucesso!
        </Alert>
      </Snackbar>
      <DialogTitle>
        <LabelInter
          text={"Recuperação de acesso"}
          fontSize={32}
          fontWeight="700"
        />
      </DialogTitle>
      <Box ml={3}>
        <Divider sx={{ maxWidth: "460px" }} />
      </Box>
      <DialogContent sx={s.MainContainer}>
        <Box sx={s.ContainerAlert}>
          <LabelInter
            text="Preencha os campos abaixo para solicitar uma recuperação de acesso!"
            fontWeight="400"
            fontSize={14}
          />
        </Box>
        <Box sx={s.ContentContainer}>
          <Input label={"Nome de usuário"} mb={2} />
          <Input label={"Email"} mb={2} />
          <Input
            label={"Descrição"}
            multiline
            rows={6}
            placeholder="Diga brevemente o que esta acontecendo..."
          />
        </Box>
        <Box sx={s.ContainerButton}>
          <ButtonMain
            text="Enviar"
            color="#DFBD2C"
            width="380px"
            height="56px"
            fontSize={18}
            onClick={() => setOpen(true)}
          />
          <ButtonLink
            text="Cancelar"
            fontSize="18px"
            onClick={() => handleClose}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
