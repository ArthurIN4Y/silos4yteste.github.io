import { Box, styled } from "@mui/material";

export const ContainerCard = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '16px',
    backgroundColor: '#fff',
    boxShadow: '0px 8px 19px rgba(0,0,0,0.15)',
    borderRadius: '10px',
    flexDirection: 'column',
    width: '342px',
    height: 'auto',
    marginBottom: '16px',
});

export const ContainerCardHeader = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
});

export const ContainerCardBody = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'column',
})

export const TextWrapper = styled(Box)({
    display: 'flex',
    width: 'auto',
    flexDirection: 'row',
}) 

export const ContainerGroupButton = {
    'box-shadow': '0px 8px 19px rgba(0, 0, 0, 0.15)',
    'border-radius': '10px',
}