import { Box } from "@mui/material";
import { LabelInter } from "../../utils/typography";
import * as s from "./styles";

interface SettingsInfoCardProps {
  color: string;
  text: string;
}

export const SettingsInfoCard = (props: SettingsInfoCardProps) => {
  return (
    <Box sx={s.style(props.color)}>
      <LabelInter
        text={props.text}
        fontWeight={"700"}
        fontSize={20}
        color={"#FFFFFF"}
      />
    </Box>
  );
};
