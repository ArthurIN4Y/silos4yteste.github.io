import { styled } from "@mui/material"

export const Container = {
    display: "flex",
    flexDirection: "column",
    width: '458px',
    height: 'auto',
    padding: '16px',
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',

    '@media (max-width: 768px)': {
        width: '390px',
        padding: '8px',
    }
}

export const Header = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
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
}
export const Footer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: '100%',
}

export const ButtonContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: '100%',
}