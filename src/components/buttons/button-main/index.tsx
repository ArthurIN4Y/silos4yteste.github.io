import { Button } from "@mui/material";
import {
  LabelInter,
  SupportTypography,
  SupportTypographyStrong,
} from "../../../utils/typography";
import * as s from "./styles";

interface Props {
  text: string;
  width?: string | undefined;
  height?: string | undefined;
  borderRadius?: string | undefined;
  fontSize?: number;
  onClick?: (event: any) => void;
  color?: string | undefined;
  widthRes?: string | undefined;
  textColor?: string | undefined;
  boxShadow?: string | undefined;
  startIcon?: any;
  disabled?: boolean;
}

export const ButtonMain = (props: Props) => {
  return (
    <Button
      startIcon={props.startIcon}
      sx={s.Style(
        props.width,
        props.height,
        props.borderRadius,
        props.color,
        props.widthRes,
        props.boxShadow
      )}
      variant="contained"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <LabelInter
        lineHeight="1"
        text={props.text}
        color={props.textColor || "#FFF"}
        fontSize={props.fontSize}
        fontWeight="700"
      />
    </Button>
  );
};
