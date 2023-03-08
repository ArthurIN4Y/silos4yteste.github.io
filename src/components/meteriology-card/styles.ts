import { Box, styled } from "@mui/material";

export const BackgroundContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 16px 20px 16px',
    width: '332px',
    height: '400px',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    "@media (max-width: 768px)": {
        width: '310px',
        padding: '8px',
        marginBottom: '112px',
    }
});

export const ContainerInformations = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '276px',
    width: '300px',
    padding: '12px',
    border: '1px solid #E5E5E5',
    borderRadius: '5px',
    "@media (max-width: 768px)": {
        width: '290px',
        padding: '8px',
    }

});

export const BoxInformation = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: '14px',
})