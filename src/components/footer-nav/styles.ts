import { Box, styled } from "@mui/material";

export const Footer = styled(Box)({
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 1000,
})