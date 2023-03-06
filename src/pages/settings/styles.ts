import { styled } from "@mui/system"

export const Header = {
    width: '100%',
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
}
export const ContainerRight = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: '300px',
    marginRight: "22px",
}

export const ContainerAvatar = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}

export const Avatar = {
    width: "30px",
    height: "30px",
}

export const GearIcon = styled('img')({
    width: "30px",
    height: "30px",
    marginRight: "10px",
})

export const GridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
}