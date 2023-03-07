import { Box, Button, ButtonGroup } from "@mui/material";
import { theme } from "../../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import * as s from "./styles";

interface ButtonProps {
  onEdit?: () => void;
  onRegister?: () => void;
  onDelete?: () => void;
}

export const GroupButton = ({ onEdit, onDelete, onRegister }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        color="primary"
      >
        <Button sx={s.StyleButton} onClick={onEdit}>
          Editar
        </Button>
        <Button sx={s.StyleButton} onClick={onRegister}>
          Registros
        </Button>
        <Button sx={s.StyleButton} onClick={onDelete}>
          Deletar
        </Button>
      </ButtonGroup>
    </ThemeProvider>
  );
};
