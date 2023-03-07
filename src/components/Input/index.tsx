import { AccountCircle } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import { LabelTypography } from "../../utils/typography";
import * as s from "./style";

interface Props {
  label?: string | undefined;
  mb?: number;
  width?: string;
  borderRadius?: string;
  defaultValue?: string;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  backgroundColor?: string;
  boxShadow?: string;
  startAdornment?: JSX.Element;
}

export const Input = (props: Props) => {
  return (
    <Box
      mb={props.mb}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <LabelTypography text={props?.label} fontWeight={undefined} />
      <TextField
        placeholder={props.placeholder}
        rows={props.rows}
        multiline={props.multiline}
        sx={s.Style(
          props.width,
          props.borderRadius,
          props.backgroundColor,
          props.boxShadow
        )}
        size="small"
        defaultValue={props.defaultValue}
      />
    </Box>
  );
};
