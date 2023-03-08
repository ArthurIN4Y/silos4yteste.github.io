import { Box, styled } from "@mui/material";

export const Container = styled(Box)({
    zIndex: 999,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: "16px",
    '@media (max-width: 600px)': {
        justifyContent: "center",
    }
})

export const ContainerFilters = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginLeft: "32px",

    '@media (max-width: 600px)': {
        marginLeft: "-30px",
    }
})

export const ContainerSelectFilter = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "50%",
})

export const ContainerSelectMapStyle = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
    position: "absolute",
    bottom: 0,
    left: 0,
    marginLeft: "132px",
    marginBottom: "16px",
    width: "90%",
    '@media (max-width: 600px)': {
        marginLeft: "13px",
        marginBottom: "70px",
    }
})

export const BackgroundStyleMap = styled(Box)({
    zIndex: 999,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 8px 19px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    padding: "16px",

    '@media (max-width: 600px)': {
        backgroundColor: "transparent",
        boxShadow: 'none',
    }
})

export const ButtonMenuContainer = styled(Box)({
    display: "flex",
    padding: "8px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    width: "auto",
    height: "24px",
    boxShadow: "0px 8px 19px rgba(0, 0, 0, 0.15) ",
})

export const UserLocationContainer = styled(Box)({
    marginBottom: "80px",
    marginRight: "-36.4px",

    '@media (max-width: 600px)': {
        marginBottom: "110px",
        marginRight: "-16px",
    }
})
export const style = {
    "& fieldset": { border: 'none' },
    'background-color': '#FFFFFF',
    'border-radius': '10px',
    'width': '200px',
    'box-shadow': "0px 8px 19px rgba(0, 0, 0, 0.15) ",
    'justify-content': 'center',
    'align-items': 'center',
    'display': 'flex',
    '& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        'display': 'flex',
    },

    '@media (max-width: 600px)': {
        'width': '70px',
    }
}