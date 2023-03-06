import { Box } from "@mui/material";
import { HeaderTypographyStrong } from "../../utils/typography";
import * as s from "./styles";

interface BadgeProps {
  text: string;
  color?: string;
}

export const Badge = (props: BadgeProps) => {
  return (
    <Box sx={s.ContainerBadge}>
      <HeaderTypographyStrong text={props.text} color='#FFFFFF' />
    </Box>
  );
};
