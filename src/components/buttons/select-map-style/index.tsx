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

export const SelectMap = ({ width, borderRadius, value, onChange }: Props) => {
  // const [value, setValue] = useState<string>();
  // const handleChange = (event: SelectChangeEvent) => {
  //   setValue(event.target.value);
  // };
  return (
    <Box>
      <FormControl>
        <Select
          IconComponent={() => <img src={ArrowSelect} alt="arrow select" />}
          size="small"
          value={value}
          onChange={onChange}
          sx={s.style(width, borderRadius)}
        >
          <MenuItem value={"light-v11"}>Padrão</MenuItem>
          <MenuItem value={"satellite-streets-v12"}>Satélite</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
