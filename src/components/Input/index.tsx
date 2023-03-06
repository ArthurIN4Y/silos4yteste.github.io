import { Box, TextField } from "@mui/material";
import { LabelTypography } from "../../utils/typography";
import * as s from "./style";

interface Props {
  label: string;
  mb?: number;
  width?: string;
  borderRadius?: string;
  defaultValue?: string;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
}

export const Input = (props: Props) => {
  return (
    <Box mb={props.mb} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      <LabelTypography text={props.label} fontWeight={undefined} />
      <TextField
        placeholder={props.placeholder}
        rows={props.rows}
        multiline={props.multiline}
        sx={s.Style(props.width, props.borderRadius)}
        size="small"
        defaultValue={props.defaultValue}
      />
    </Box>
  );
};
