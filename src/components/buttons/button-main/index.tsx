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
}

export const ButtonMain = (props: Props) => {
  return (
    <Button
      sx={s.Style(props.width, props.height, props.borderRadius, props.color)}
      variant="contained"
      onClick={props.onClick}
    >
      <LabelInter
        text={props.text}
        color="#FFFFFF"
        fontSize={props.fontSize}
        fontWeight="700"
      />
    </Button>
  );
};
