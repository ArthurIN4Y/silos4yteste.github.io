import { Box, styled } from "@mui/material";

export const ContainerMain = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '24px',
    width: 'auto',
})

export const CardNote = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    width: '244px',
    height: '44px',
    padding: '12px',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: '16px',

    '.css-78trlr-MuiButtonBase-root-MuiIconButton-root':{
        padding: '0px',
    }
})

export const WrapperContent = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: '16px',
})