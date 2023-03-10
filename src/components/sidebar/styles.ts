import { Box, Drawer } from "@mui/material";
import { Theme, CSSObject, styled } from "@mui/material/styles";

const openedDrawer = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedDrawer = (theme: Theme): CSSObject => ({
  width: 94,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

export const DrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...(open && {
    ...openedDrawer(theme),
    "& .MuiDrawer-paper": {
      width: 280,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingLeft: 32,

      '@media (max-width: 600px)': {
        width: "100%",
      }
    },
  }),
  ...(!open && {
    ...closedDrawer(theme),
    "& .MuiDrawer-paper": {
      width: 96,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      '@media (max-width: 600px)': {
        width: "100%",
        height: "90px",
        top: 'revert',
        bottom: 0,
        position: "fixed",
        flexDirection: "row",
      }
    },
  }),
}));

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",

  '@media (max-width: 600px)': {
    width: "100px",
  }
}));

export const LogoContainer = styled("img")(() => ({
  width: 196,
  height: 56,
}))

export const ContainerList = styled(Box)({

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "50%",

  '@media (max-width: 600px)': {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  }
})

export const ContainerProfile = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "16px",
})

export const ContainerProfileHeader = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "180px",
})

export const ContainerProfileBody = styled(Box)({
  display: "flex",
  flexDirection: "row",
})

export const ContainerButton = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '120px',
  width: '100%',
}

export const ContainerAlert = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '20px',
  textAlign: 'center',
  width: '60%'
}

export const MainContainer = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column"
}

export const ContentContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "60%",
  textAlign: 'center',
  marginBottom: '20px',
}