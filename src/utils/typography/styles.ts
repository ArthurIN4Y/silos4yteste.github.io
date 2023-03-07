import { styled, Typography } from "@mui/material";
import { theme } from "../theme";

interface Props {
    fontSize?: number;
    color?: string;
    fontWeight?: string;
}

export const TextHeader = styled(Typography)(({ fontSize }: { fontSize?: number }) => ({
    fontFamily: "Roboto",
    fontSize: fontSize ? fontSize : "22px",
    fontWeight: "300",
    color: theme.palette.text.primary,
}))

export const TextHeaderStrong = styled(Typography)(({ fontSize, color }: { fontSize?: number, color?: string }) => ({
    fontFamily: "Roboto",
    fontSize: fontSize ? fontSize : "18px",
    fontWeight: "700",
    color: color ? color : theme.palette.text.primary,
}))

export const TextSubtitle = styled(Typography)(({ marginLeft }: { marginLeft?: string }) => ({
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "400",
    color: theme.palette.text.secondary,
    marginLeft: marginLeft ? marginLeft : '0px'
}))

export const TextDetails = styled(Typography)({
    fontFamily: "Inter",
    fontSize: "12px",
    fontWeight: "400",
    color: theme.palette.text.secondary,
})

export const TextDetailsStrong = styled(Typography)({
    fontFamily: "Inter",
    fontSize: "12px",
    fontWeight: "700",
    color: theme.palette.text.secondary,
})

export const TextDay = styled(Typography)({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "700",
    color: theme.palette.text.primary,
})

export const SupportText = styled(Typography)(({ color }: { color?: string }) => ({
    fontFamily: "Roboto",
    fontWeight: "400",
    color: color ? color : theme.palette.text.secondary,
}))

export const SupportTextStrong = styled(Typography)(({ color }: { color?: string }) => ({
    fontFamily: "Roboto",
    fontWeight: "700",
    color: color ? color : theme.palette.text.primary,
}))

export const TextCable = styled(Typography)({
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "700",
    color: theme.palette.primary.main,
})

export const TextTemperature = styled(Typography)({
    fontFamily: "Inter",
    fontSize: "10px",
    fontWeight: "400",
    color: '#FFFFFF'
})

export const TextCelcius = styled(Typography)({
    fontFamily: "Inter",
    fontSize: "32px",
    fontWeight: "700",
    color: '#FFFFFF'
})

export const LabelStyle = {
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "500",
    color: theme.palette.text.primary,
}

export const TextInter = styled(Typography)((props: Props) => ({
    fontFamily: "Inter",
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    color: props.color,
    '@media (max-width: 768px)': {
        lineHeight: '1',
        fontSize: '14px',
    }
}));

export const TextRoboto = styled(Typography)((props: Props) => ({
    fontFamily: "Roboto",
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    color: props.color,
}));