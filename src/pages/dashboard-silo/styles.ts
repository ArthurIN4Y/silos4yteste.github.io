import { styled, Box } from "@mui/material";

interface Props {
    width?: string;
    color?: string;
}

export const ContainerMain = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
});

export const ContainerHeader = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "80px",
    backgroundColor: 'black',
    marginTop: '-16px',
    borderRadius: '0 0 20px 20px',
    position: "fixed",
    marginBottom: '16px',
    zIndex: 9999,
});

export const ContainerBody = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
});

export const ContainerScroll = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flexWrap: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
    scrollBehavior: "smooth",
    ':-webkit-overflow-scrolling': "touch",
    marginLeft: "-23px",
})

export const ContainerGroupStatus = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginRight: "8px",
    marginBottom: "16px",
    marginLeft: "8px",
})

export const ContainerTitle = styled(Box)(({ width }: Props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width ? width : '280px',
}))

export const ContainerBackground = styled(Box)(({ width }: Props) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    width: width ? width : '1080px',
    height: '454px',
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    marginBottom: '32px',
}))

export const LegendSquare = styled(Box)(({ color }: Props) => ({
    width: '16px',
    height: '16px',
    borderRadius: '4px',
    backgroundColor: color ? color : '#000000',
}))

export const ContainerBackgroundChart = styled(Box)({
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 8px 19px rgba(0, 0, 0, 0.15)',
    width: '1042px',
    height: '332px',
    borderRadius: '10px',
    padding: '24px',
})

export const LegendContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '62px',
    alignItems: 'center',
})

export const LogoContainer = styled("img")(() => ({
    width: 196,
    height: 56,
}))
