import { FormControl, MenuItem, Select } from "@mui/material";

interface Props {
  value: any;
  onChange: () => void;
}

export const SelectButton = ({ value, onChange }: Props) => (
  <>
    <FormControl>
      <Select
        sx={{ height: "27px", width: '100px' ,borderRadius: "5px" }}
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>Anual</em>
        </MenuItem>
        <MenuItem value={1}>Mensal</MenuItem>
        <MenuItem value={2}>Diario</MenuItem>
      </Select>
    </FormControl>
  </>
);
