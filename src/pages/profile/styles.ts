import { Box, styled } from "@mui/material"

export const ContainerProfile = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "16px",
})

export const ContainerProfileHeader = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "180px",
})

export const ContainerProfileBody = styled(Box)({
    display: "flex",
    flexDirection: "row",
})

export const ContainerHeader = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "80px",
    backgroundColor: 'black',
    borderRadius: '0 0 20px 20px',
    position: "fixed",
    marginBottom: '16px',
    zIndex: 9999,
});

export const LogoContainer = styled("img")(() => ({
    width: 196,
    height: 56,
}))