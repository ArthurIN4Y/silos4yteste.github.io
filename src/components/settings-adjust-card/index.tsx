import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import {
  ArrowDownGrayIcon,
  ArrowDownRounded,
  ArrowUpGrayIcon,
  ArrowUpRounded,
} from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import * as s from "./styles";

interface AdjustCardProps {
  text: string;
  subTitle: string;
  about: string;
  marginBottom?: number | undefined;
  marginTop?: number | undefined;
  mr?: number;
  toggleEnabled?: boolean;
}

export const AdjustCard = (props: AdjustCardProps) => {
  const [value, setValue] = useState(0);

  const removerValue = () => {
    if (value === 0) {
      setValue(0);
    } else setValue(value - 1);
  };

  return (
    <Box sx={s.Container(props.marginBottom, props.marginTop)}>
      <Box>
        <LabelInter
          text={props.text}
          fontSize={18}
          fontWeight={"400"}
          color={"#7A7786"}
        />
        <LabelInter
          text={props.subTitle}
          fontSize={18}
          fontWeight={"700"}
          color={"#7A7786"}
        />
      </Box>
      <Box display={"flex"} justifyContent="center" alignItems="center">
        <Box display={"flex"} flexDirection="column">
          <IconButton
            sx={{
              "&.Mui-disabled": {
                pointerEvents: "auto",
              },
              cursor: props.toggleEnabled ? "not-allowed" : "pointer",
            }}
            aria-label="arrow-up"
            onClick={() => setValue(value + 1)}
            disabled={props.toggleEnabled}
          >
            {props.toggleEnabled ? (
              <Tooltip
                title={
                  <LabelInter
                    text={"Clique em editar para alterar os valores"}
                    fontSize={14}
                    fontWeight="700"
                  />
                }
                arrow
              >
                <img src={ArrowUpGrayIcon} alt='consultar'/>
              </Tooltip>
            ) : (
              <img src={ArrowUpRounded} alt='consultar'/>
            )}
          </IconButton>
          <IconButton
            aria-label="arrow-up"
            onClick={() => removerValue()}
            disabled={props.toggleEnabled}
          >
            {props.toggleEnabled ? (
              <img src={ArrowDownGrayIcon} alt='consultar'/>
            ) : (
              <img src={ArrowDownRounded} alt='consultar'/>
            )}
          </IconButton>
        </Box>
        <Box sx={s.ValueBox} mr={1}>
          <LabelInter
            text={value}
            fontSize={28}
            fontWeight={"700"}
            color={"#7A7786"}
          />
        </Box>
        <Box mr={props.mr}>
          <LabelInter
            text={props.about}
            fontSize={20}
            fontWeight="500"
            color={"#7A7786"}
          />
        </Box>
      </Box>
    </Box>
  );
};
