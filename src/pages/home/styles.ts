import { Box, styled } from "@mui/material";
import Background from '../../assets/images/background.png'

export const Container = styled(Box)({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `linear-gradient(to bottom, #000000 35.59%, rgba(0, 0, 0, 0)), url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
})

export const ContainerHeader = {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'flex-end',
    'margin': '60px 53px'
}

export const ContainerContent = {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
}