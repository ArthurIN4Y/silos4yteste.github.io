import { Box, styled } from "@mui/material";
import { theme } from "../../utils/theme";

export const BackgroundContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    width: '213px',
    height: '190px',
    borderRadius: '10px',
    padding: '16px',
    "@media (max-width: 768px)": {
        width: '310px',
        height: '200px',
    }
});

export const ContainerHeader = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const ContainerContent = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '12px',
})