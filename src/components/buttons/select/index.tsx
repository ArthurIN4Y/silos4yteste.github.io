import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { LabelInter } from "../../../utils/typography";
import * as s from "./styles";

interface Props {
  value?: string | number;
  onChange?: () => void;
  items?: {
    value: string | number;
    name: string;
  };
  width?: string;
  borderRadius?: string;
}

export const MainSelect = ({ width, borderRadius }: Props) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <Box mb={2}>
      <FormControl>
        <LabelInter text={"Nivel de acesso"} fontWeight="500" fontSize={18} />
        <Select
          size="small"
          value={value}
          onChange={handleChange}
          sx={s.style(width, borderRadius)}
          defaultValue={"administrador"}
        >
          <MenuItem value={"administrador"}>Administrador</MenuItem>
          <MenuItem value={"fabrica"}>Fabrica</MenuItem>
          <MenuItem value={"gerempresa"}>Ger. Empresa</MenuItem>
          <MenuItem value={"gercusto"}>Ger. Custo</MenuItem>
          <MenuItem value={"gertrabalho"}>Ger. centro trabalho</MenuItem>
          <MenuItem value={"operador"}>Operador</MenuItem>
          <MenuItem value={"basico"}>Básico</MenuItem>
          {/* {items?.map((item: any) => {
            <MenuItem value={item.value}>{item.name}</MenuItem>;
        })} */}
        </Select>
      </FormControl>
    </Box>
  );
};
