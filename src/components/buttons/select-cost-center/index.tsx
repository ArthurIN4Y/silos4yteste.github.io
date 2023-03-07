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

export const MainSelectCostCenter = ({ width, borderRadius }: Props) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <Box mb={2}>
      <FormControl>
        <LabelInter text={"Centro de custo"} fontWeight="500" fontSize={18} />
        <Select
          size="small"
          value={value}
          onChange={handleChange}
          sx={s.style(width, borderRadius)}
        >
          <MenuItem value={1}>Centro 1</MenuItem>
          <MenuItem value={2}>Centro 2</MenuItem>
          <MenuItem value={3}>Centro 3</MenuItem>
          {/* {items?.map((item: any) => {
            <MenuItem value={item.value}>{item.name}</MenuItem>;
        })} */}
        </Select>
      </FormControl>
    </Box>
  );
};
