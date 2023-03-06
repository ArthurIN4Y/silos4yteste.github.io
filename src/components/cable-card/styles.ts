import { Box, styled } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { padding } from "@mui/system";

interface Props {
    color: string;
}

export const BackgroundContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '85px',
    height: '368px',
    borderRadius: '10px 10px 0px 0px',
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#33303E',
    marginLeft: '32px',
});

export const TemperatureContainer = styled(Box)(({ color }: Props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '85px',
    height: '67px',
    backgroundColor: color,
}))

export const ToolTipContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '144px',
    height: '70px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '10px 8px',
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    marginLeft: '-24px',
})
