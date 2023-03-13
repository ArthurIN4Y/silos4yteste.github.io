import { Box, styled } from "@mui/material";

export const ContainerMain = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "270px",
    height: "auto",
    padding: "10px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0px 8px 19px rgba(0, 0, 0, 0.15) ",
    zIndex: 1000,
    position: "absolute",
    marginTop: "8px",

    '& .css-atvxjh-MuiFormControlLabel-root': {
        marginLeft: "0px",
    },
    '& .css-1d4i30i-MuiButtonBase-root-MuiRadio-root': {
        padding: "4px",
    }
})

export const ContainerSelect = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
})