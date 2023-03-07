import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { HeaderTypographyStrong, LabelInter } from "../../../utils/typography";
import * as s from "./styles";
import { ButtonLink } from "../../buttons/button-link";
import { ChevronLeftRounded } from "@mui/icons-material";
import { Badge } from "../../badge";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  name?: string;
}

function createData(name: string, when: string, who: string) {
  return { name, when, who };
}

const rows = [
  createData("Jhon Doe", "21/02/2023 - 11h", "Email alterado"),
  createData("Bob Doe", "21/02/2023 - 11h", "Email alterado"),
  createData("Lary Doe", "21/02/2023 - 11h", "Nome alterado"),
];

export const DialogHistoryEdit = (props: Props) => {
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle>
        <HeaderTypographyStrong text="Histórico de alterações" />
      </DialogTitle>
      <Box ml={3}>
        <Divider sx={{ maxWidth: "420px" }} />
      </Box>
      <DialogContent sx={s.MainContainer}>
        <Box sx={s.ContainerAlert}>
          <Box mb={2}>
            <Badge text={props.name} />
          </Box>
          <LabelInter
            text="As seguintes alterações foram feitas"
            fontWeight="400"
            fontSize={14}
          />
        </Box>
        <Box sx={s.ContentContainer}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <LabelInter
                      text={"Quem alterou"}
                      fontSize={16}
                      fontWeight="700"
                    />
                  </TableCell>
                  <TableCell>
                    <LabelInter
                      text={"Quando"}
                      fontSize={16}
                      fontWeight="700"
                    />
                  </TableCell>
                  <TableCell>
                    <LabelInter text={"Oque"} fontSize={16} fontWeight="700" />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <LabelInter
                        text={row.name}
                        fontSize={14}
                        fontWeight="400"
                      />
                    </TableCell>
                    <TableCell>
                      <LabelInter
                        text={row.when}
                        fontSize={14}
                        fontWeight="400"
                      />
                    </TableCell>
                    <TableCell>
                      <LabelInter
                        text={row.who}
                        fontSize={14}
                        fontWeight="400"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={s.Style}>
          <ButtonLink
            text="Voltar"
            fontSize="16px"
            startIcon={<ChevronLeftRounded />}
            onClick={props.onClose}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
