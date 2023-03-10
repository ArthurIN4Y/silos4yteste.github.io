import { Box, styled } from "@mui/material";

export const BackgroundContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    width: '310px',
    height: '152px',
    borderRadius: '10px',
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',

    '@media (max-width: 600px)': {
        width: '370px',
    }
});