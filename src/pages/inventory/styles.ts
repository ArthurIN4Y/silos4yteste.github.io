import { Box, styled } from "@mui/material";

export const ContainerHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    marginLeft: '120px',

    "@media (max-width: 768px)": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "80px",
        backgroundColor: 'black',
        marginTop: '-26px',
        borderRadius: '0 0 20px 20px',
        position: "fixed",
        marginBottom: '16px',
        zIndex: 9999,
        marginLeft: '0px',

    }
})

export const ContainerText = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '240px',
})

export const ContainerMenu = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '240px',
})


export const ContainerBody = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    marginLeft: '120px',

    '@media (max-width: 768px)': {
        marginLeft: '0px',
        justifyContent: 'center',
    }
})

export const ContainerTable = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    width: '96%',
    height: 'auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 8px 19px rgba(0,0,0,0.15)',
    borderRadius: '10px',
    flexDirection: 'column',
})

export const ContainerSeeMore = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: "12px",
})

export const LogoContainer = styled("img")(() => ({
    width: 196,
    height: 56,
}))