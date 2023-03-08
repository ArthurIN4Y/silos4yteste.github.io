import { Box, styled } from "@mui/material";

export const ContainerMain = styled(Box)({
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    padding: "10px",
    marginBottom: "80px",
    height: "auto",
    width: "375px",
});

export const TemperatureContainer = styled(Box)({
    display: "flex",
    width: "auto",
    height: "auto",
    padding: "10px",
    backgroundColor: "#F0F0F0",
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    borderRadius: "8px",
    marginBottom: "16px",
});

export const DividerVertical = styled(Box)({
    width: "1px",
    height: "80px",
    backgroundColor: "#c3c3c3",
    marginLeft: "10px",
});

export const TemperatureTextContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "10px",
});
export const TemperatureTextContainerRight = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginLeft: "10px",
});
export const MoreInformationContainer = styled(Box)({
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
});
export const DividerHorizontal = styled(Box)({
    width: "100%",
    height: "1px",
    backgroundColor: "#c3c3c3",
    marginTop: "4px",
    marginBottom: "4px",
})
