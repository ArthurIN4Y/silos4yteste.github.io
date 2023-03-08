import { styled, Box } from "@mui/material"

export const ContainerMain = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: '100%',
    marginLeft: '32px',

    '@media (max-width: 768px)': {
        marginLeft: '-95px',
    }
})

export const Header = {
    width: '100%',
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",

    '@media (max-width: 768px)': {
        justifyContent: "space-around",
        alignItems: "center",
    }
}

export const ContainerRight = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: '300px',
    marginRight: "22px",
    alignItems: "center",

    '@media (max-width: 768px)': {
        justifyContent: "flex-end",
        width: '100%',
    }
}

export const ContainerAvatar = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: '100%'
}

export const Avatar = {
    width: "30px",
    height: "30px",
}

export const GearIcon = styled('img')({
    width: "30px",
    height: "30px",
    marginRight: "10px",

    '@media (max-width: 768px)': {
        width: "20px",
        height: "20px",
        marginRight: "5px",
    }
})

export const GridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",

    '@media (max-width: 768px)': {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
}

export const LogoContainer = styled("img")(() => ({
    width: 196,
    height: 56,
}))

export const Icon = styled('img')({
    width: '24px',
    height: '24px',
    marginRight: '8px',
})

export const ContainerTitle = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '8px'
})

export const ContainerHeader = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "80px",
    backgroundColor: 'black',
    marginTop: '90px',
    borderRadius: '0 0 20px 20px',
    position: "fixed",
    marginBottom: '16px',
    zIndex: 9999,
});