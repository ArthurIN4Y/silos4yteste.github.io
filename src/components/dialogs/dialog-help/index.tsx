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

export const DialogHelp = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      sx={{ height: "auto", marginTop: "70px" }}
    >
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Email enviado com sucesso!
        </Alert>
      </Snackbar>
      <DialogTitle>
        <LabelInter
          text={"Esta com alguma dúvida?"}
          fontSize={32}
          fontWeight="700"
        />
      </DialogTitle>
      <Box ml={3}>
        <Divider sx={{ maxWidth: "320px" }} />
      </Box>
      <DialogContent sx={s.MainContainer}>
        <Box sx={s.ContainerAlert}>
          <LabelInter
            text="Preencha os campos abaixo e logo entraremos em contato!"
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
            placeholder="Nos conte brevemente qual a sua dúvida..."
          />
        </Box>
        <Box sx={s.ContainerButton}>
          <ButtonMain
            text="Enviar"
            color="#DFBD2C"
            width="380px"
            widthRes="100%"
            height="56px"
            fontSize={18}
            onClick={() => setOpen(true)}
          />
          <ButtonLink text="Cancelar" fontSize="18px" onClick={props.onClose}/>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
