import { Typography } from "@mui/material";
import {
  TextHeader,
  TextHeaderStrong,
  TextSubtitle,
  TextDetails,
  TextDetailsStrong,
  TextDay,
  SupportText,
  SupportTextStrong,
  TextCable,
  TextTemperature,
  TextCelcius,
  LabelStyle,
  TextInter,
} from "./styles";

interface Props {
  text: string | number;
  fontSize?: number;
  marginLeft?: string;
  color?: string | undefined;
  fontWeight?: string | undefined;
}

export const HeaderTypography = ({ text, fontSize }: Props) => {
  return <TextHeader fontSize={fontSize}>{text}</TextHeader>;
};

export const HeaderTypographyStrong = ({ text, fontSize, color }: Props) => {
  return (
    <TextHeaderStrong fontSize={fontSize} color={color}>
      {text}
    </TextHeaderStrong>
  );
};

export const SubtitleTypography = ({ text, marginLeft }: Props) => {
  return <TextSubtitle marginLeft={marginLeft}>{text}</TextSubtitle>;
};

export const DetailsTypography = ({ text }: Props) => {
  return <TextDetails>{text}</TextDetails>;
};

export const DetailsTypographyStrong = ({ text }: Props) => {
  return <TextDetailsStrong>{text}</TextDetailsStrong>;
};

export const DayTypography = ({ text, fontSize }: Props) => {
  return <TextDay fontSize={fontSize}>{text}</TextDay>;
};

export const SupportTypography = ({ text, fontSize, color }: Props) => {
  return (
    <SupportText fontSize={fontSize} color={color}>
      {text}
    </SupportText>
  );
};

export const SupportTypographyStrong = ({ text, fontSize, color }: Props) => {
  return (
    <SupportTextStrong fontSize={fontSize} color={color}>
      {text}
    </SupportTextStrong>
  );
};

export const CableTitleTypography = ({ text }: Props) => {
  return <TextCable>{text}</TextCable>;
};

export const TemperatureTypography = ({ text }: Props) => {
  return <TextTemperature>{text}</TextTemperature>;
};

export const CelciusTypography = ({ text }: Props) => {
  return <TextCelcius>{text}</TextCelcius>;
};

export const LabelTypography = ({ text }: Props) => {
  return <Typography sx={LabelStyle}>{text}</Typography>;
};

export const LabelInter = (props: Props) => {
  return (
    <TextInter
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
    >
      {props.text}
    </TextInter>
  );
};
