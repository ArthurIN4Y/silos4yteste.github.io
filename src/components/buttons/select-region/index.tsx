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

export const SelectRegion = ({ width, borderRadius }: Props) => {
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
          defaultValue="regiaosul"
        >
          <MenuItem value={"regiaosul"}>Região Sul</MenuItem>
          <MenuItem value={"regiaonorte"}>Região Norte</MenuItem>
          <MenuItem value={"regiaocentro"}>Região Centro</MenuItem>
          <MenuItem value={"regiaooeste"}>Região Oeste</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
