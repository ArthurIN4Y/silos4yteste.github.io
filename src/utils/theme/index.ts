import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'Inter',
        ].join(','),
    },
    palette: {
        primary: {
            main: "#DFBD2C",
            light: "#FFFFFF",
        },
        secondary: {
            main: "#000000",
            light: '#989898'
        },
        success: {
            main: "#1DCA38",
        },
        text: {
            primary: "#33303E",
            secondary: "#8C8C8C",
            disabled: "#C4C4C4",
        }
    }
});