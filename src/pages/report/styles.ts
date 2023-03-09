import { Box, styled } from "@mui/material";

export const ContainerHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    marginLeft: '120px',
    marginRight: '30px',

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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '175px',

    '@media (max-width: 768px)': {
        width: '170px',
    }
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
    alignItems: 'flex-start',
    marginTop: '20px',
    marginLeft: '120px',
    marginRight: '30px',
    flexDirection: 'column',

    '@media (max-width: 768px)': {
        marginLeft: '0px',
        marginRight: '0px',
        padding: '24px',
        justifyContent: 'center',
    }
})

export const ContainerTable = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    width: '1560px',
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

export const ContainerFilters = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        marginTop: '50px',
        alignItems: 'flex-start',
        windth: '100%',
    }
})

export const ContainerAccordion = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',

    '& .css-1elwnq4-MuiPaper-root-MuiAccordion-root': {
        width: '100%',
    },
})

export const SquareLegend = styled(Box)((backgroundColor: any) => ({
    width: '20px',
    height: '20px',
    borderRadius: '5px',
    backgroundColor: backgroundColor,
}))

export const ContainerLegend = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
})

export const ContainerChart = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',

    '@media (max-width: 768px)': {
        flexDirection: 'column',
    }
})