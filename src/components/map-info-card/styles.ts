import { Box, styled } from "@mui/material";
import { theme } from "../../utils/theme";

export const ContainerMain = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "188px",
    height: "auto",
})

export const Circle = styled(Box)({
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: theme.palette.success.main,
})

export const TitleWrapper = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
})

export const SubtitleWrapper = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
})

export const ContentWrapper = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
})