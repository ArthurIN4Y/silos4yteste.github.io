import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerHeader = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "250px",
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
    alignItems: "center",
    width: "300px",
    marginBottom: "4px",
})