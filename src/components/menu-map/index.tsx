import {
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  List,
  Radio,
  RadioGroup,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { ArrowSelect } from "../../assets/icons";
import { theme } from "../../utils/theme";
import { LabelInter } from "../../utils/typography";
import { ButtonMain } from "../buttons/button-main";
import * as s from "./styles";

interface MenuMapProps {
  open: boolean;
}

export const MenuMap = (Props: MenuMapProps) => {
  const [onRegion, setOnRegion] = useState<boolean>(false);
  const [onCity, setOnCity] = useState<boolean>(false);
  const [onArmazem, setOnArmazem] = useState<boolean>(false);
  const [onGrain, setOnGrain] = useState<boolean>(false);
  const [valueRegiao, setValueRegiao] = useState("sul");
  const [valueCidade, setValueCidade] = useState("saoleopoldo");
  const [valueArmazem, setValueArmazem] = useState("armazem1");
  const [valueGrain, setValueGrain] = useState("soja");

  const handleChangeRegiao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRegiao((event.target as HTMLInputElement).value);
  };
  const handleChangeCidade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueCidade((event.target as HTMLInputElement).value);
  };
  const handleChangeArmazem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueArmazem((event.target as HTMLInputElement).value);
  };

  const handleChangeGrain = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueGrain((event.target as HTMLInputElement).value);
  };

  return (
    <>
      {Props.open && (
        <ThemeProvider theme={theme}>
          <s.ContainerMain>
            <Box width={"100%"}>
              <LabelInter
                text={"Filtros"}
                fontWeight="700"
                fontSize={18}
                color={"#33303E"}
              />
            </Box>
            <List sx={{ width: "100%", marginTop: "12px" }}>
              <s.ContainerSelect mb={1}>
                <IconButton
                  sx={{ justifyContent: "space-between", width: "100%" }}
                  onClick={() => setOnRegion(!onRegion)}
                >
                  <LabelInter text={"Selecione uma Região"} fontSize={14} />
                  {onRegion ? (
                    <>
                      <img
                        src={ArrowSelect}
                        alt="arrow select"
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </>
                  ) : (
                    <>
                      <img src={ArrowSelect} alt="arrow select" />
                    </>
                  )}
                </IconButton>
                {onRegion && (
                  <Box>
                    <RadioGroup
                      aria-labelledby="radio-regiao"
                      name="regiao"
                      value={valueRegiao}
                      onChange={handleChangeRegiao}
                    >
                      <FormControlLabel
                        value="sul"
                        control={<Radio color={"primary"} />}
                        label={<LabelInter text={"Região Sul"} fontSize={14} />}
                      />
                      <FormControlLabel
                        value="norte"
                        control={<Radio />}
                        label={
                          <LabelInter text={"Região Norte"} fontSize={14} />
                        }
                      />
                      <FormControlLabel
                        value="centro"
                        control={<Radio />}
                        label={
                          <LabelInter text={"Região Centro"} fontSize={14} />
                        }
                      />
                      <FormControlLabel
                        value="Leste"
                        control={<Radio />}
                        label={
                          <LabelInter text={"Região Leste"} fontSize={14} />
                        }
                      />
                    </RadioGroup>
                  </Box>
                )}
              </s.ContainerSelect>
              <Divider />
              <s.ContainerSelect mb={1}>
                <IconButton
                  sx={{ justifyContent: "space-between", width: "100%" }}
                  onClick={() => setOnCity(!onCity)}
                >
                  <LabelInter text={"Selecione uma Cidade"} fontSize={14} />
                  {onCity ? (
                    <>
                      <img
                        src={ArrowSelect}
                        alt="arrow select"
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </>
                  ) : (
                    <>
                      <img src={ArrowSelect} alt="arrow select" />
                    </>
                  )}
                </IconButton>
                {onCity && (
                  <Box>
                    <RadioGroup
                      aria-labelledby="radio-city"
                      name="city"
                      value={valueCidade}
                      onChange={handleChangeCidade}
                    >
                      <FormControlLabel
                        value="saoleopoldo"
                        control={<Radio color={"primary"} />}
                        label={
                          <LabelInter text={"São Leopoldo"} fontSize={14} />
                        }
                      />
                      <FormControlLabel
                        value="outracidade"
                        control={<Radio />}
                        label={
                          <LabelInter text={"Outra Cidade"} fontSize={14} />
                        }
                      />
                    </RadioGroup>
                  </Box>
                )}
              </s.ContainerSelect>
              <Divider />
              <s.ContainerSelect mb={1}>
                <IconButton
                  sx={{ justifyContent: "space-between", width: "100%" }}
                  onClick={() => setOnArmazem(!onArmazem)}
                >
                  <LabelInter text={"Selecione um Armazém"} fontSize={14} />
                  {onArmazem ? (
                    <>
                      <img
                        src={ArrowSelect}
                        alt="arrow select"
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </>
                  ) : (
                    <>
                      <img src={ArrowSelect} alt="arrow select" />
                    </>
                  )}
                </IconButton>
                {onArmazem && (
                  <Box>
                    <RadioGroup
                      aria-labelledby="radio-armazem"
                      name="armazem"
                      value={valueArmazem}
                      onChange={handleChangeArmazem}
                    >
                      <FormControlLabel
                        value="armazem1"
                        control={<Radio color={"primary"} />}
                        label={
                          <LabelInter text={"Armazém IN4Y"} fontSize={14} />
                        }
                      />
                      <FormControlLabel
                        value="armazem2"
                        control={<Radio />}
                        label={
                          <LabelInter text={"Armazém IN4Y 2"} fontSize={14} />
                        }
                      />
                    </RadioGroup>
                  </Box>
                )}
              </s.ContainerSelect>
              <Divider />
              <s.ContainerSelect mb={1}>
                <IconButton
                  sx={{ justifyContent: "space-between", width: "100%" }}
                  onClick={() => setOnGrain(!onGrain)}
                >
                  <LabelInter text={"Selecione o Tipo do Grão"} fontSize={14} />
                  {onGrain ? (
                    <>
                      <img
                        src={ArrowSelect}
                        alt="arrow select"
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </>
                  ) : (
                    <>
                      <img src={ArrowSelect} alt="arrow select" />
                    </>
                  )}
                </IconButton>
                {onGrain && (
                  <Box>
                    <RadioGroup
                      aria-labelledby="radio-grain"
                      name="grain"
                      value={valueGrain}
                      onChange={handleChangeGrain}
                    >
                      <FormControlLabel
                        value="soja"
                        control={<Radio color={"primary"} />}
                        label={<LabelInter text={"Soja"} fontSize={14} />}
                      />
                      <FormControlLabel
                        value="milho"
                        control={<Radio />}
                        label={<LabelInter text={"Milho"} fontSize={14} />}
                      />
                    </RadioGroup>
                  </Box>
                )}
              </s.ContainerSelect>
            </List>
            <ButtonMain text={"Filtrar"} />
          </s.ContainerMain>
        </ThemeProvider>
      )}
    </>
  );
};
