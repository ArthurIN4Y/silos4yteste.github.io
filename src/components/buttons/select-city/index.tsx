import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { ArrowSelect } from "../../../assets/icons";
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

export const SelectCity = ({ width, borderRadius }: Props) => {
  const [value, setValue] = useState<string>();
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <Select
          // IconComponent={() => <img src={ArrowSelect} alt="arrow select" />}
          size="small"
          value={value}
          onChange={handleChange}
          sx={s.style(width, borderRadius)}
          defaultValue={"saoleopoldo"}
        >
          <MenuItem value={"saoleopoldo"}>São Leopoldo</MenuItem>
          <MenuItem value={"canoas"}>Canoas</MenuItem>
          <MenuItem value={"esteio"}>Esteio</MenuItem>
          <MenuItem value={"novohamburgo"}>Novo Hamburgo</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
