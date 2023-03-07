import {
  Box,
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { HeaderTypographyStrong, LabelInter } from "../../../utils/typography";
import * as s from "./styles";
import { ButtonLink } from "../../buttons/button-link";
import { ChevronLeftRounded } from "@mui/icons-material";
import { Badge } from "../../badge";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  name?: string;
}

function createData(name: string) {
  return {
    name,
    history: [
      {
        customerId: "Jhon Doe",
        date: "2020-01-05",
        amount: 'alterou de "Desligado" para "Ligado"',
      },
      {
        customerId: "Bob Doe",
        date: "2020-01-02",
        amount: 'alterou de "Ligado" para "Desligado"',
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Alterações
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quem</TableCell>
                    <TableCell>Quando</TableCell>
                    <TableCell align="right">Alterou de * para *</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.customerId}
                      </TableCell>
                      <TableCell>{historyRow.date}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData("Tempo de aeração ligado"),
  createData("Tempo de aeração desligado"),
  createData("Velocidade do ventilador"),
  createData("Limite de resfriamento"),
  createData("Selecionar realizar a operação com chuva"),
];

export const DialogSettingsHistoryLarge = (props: Props) => {
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
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Configuração</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
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
