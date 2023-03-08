import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


export const ContainerMain = styled(Box)({
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    marginTop: "22px",
    marginBottom: "10px",
    width: "375px",
})

export const ContainerHeader = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "305px",
});

export const ContainerSubtitle = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "330px",
    fontSize: "14px",
    color: "#9E9E9E",
    marginBottom: "12px",
});

export const Circle = styled(Box)({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#1DCA38",
});

export const ContainerAbout = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    width: "auto",
    marginBottom: "4px",
})