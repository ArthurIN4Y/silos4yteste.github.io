import { Box, Button } from "@mui/material";
import * as s from "./styles";

interface Props {
  startIcon?: any;
  text: string;
  onClick?: (event: any) => void;
  fontSize?: string | undefined;
  ml?: string | undefined;
  mr?: string | undefined;
  color?: string | undefined;
  mt?: string | undefined;
  disabled?: boolean;
}

export const ButtonLink = (props: Props) => {
  return (
    <Box mr={props.mr} ml={props.mr} mt={props.mt}>
      <Button
        startIcon={props.startIcon}
        size="small"
        sx={s.Style(props.fontSize, props.color)}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.text}
      </Button>
    </Box>
  );
};
