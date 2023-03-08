import { styled } from "@mui/material"

export const Container = {
    display: "flex",
    flexDirection: "column",
    width: '458px',
    height: '983px',
    padding: '16px',
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',

    '@media (max-width: 768px)': {
        width: '390px',
        padding: '8px',
        marginBottom: '32px',
        height: 'auto'
    }
}

export const Header = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: '100%',

    '@media (max-width: 768px)': {
        marginBottom: '8px',
        marginTop: '8px',
    }
}

export const BoxTitle = {
    display: "flex",
    flexDirection: "column",
}

export const Icon = styled('img')({
    width: '24px',
    height: '24px',
    marginRight: '8px',
})

export const Content = {
    display: "flex",
    flexDirection: "column",
    justifiyContent: "center",
    alignItems: "center",
    width: '100%',
    marginBottom: '16px',
    border: '1px solid #D9D9D9',
    borderRadius: '10px',

    '@media (max-width: 768px)': {
        width: 'auto'
    }
}
export const Footer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: '100%',
    marginTop: '22px',
    marginBottom: '22px',

    '@media (max-width: 768px)': {
        marginTop: '0px',
    }
}

export const ButtonContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: '100%',
}