import { Box } from "@mui/material";
import { useState } from "react";
import {
  HeaderTypographyStrong,
  SupportTypography,
} from "../../utils/typography";
import { GroupButton } from "../buttons/button-group";
import { MainSelectWorkCenter } from "../buttons/select-work-center";
import { DialogHistoryEdit } from "../dialogs/dialog-edit-history";
import { DialogCustom } from "../dialogs/dialog-new";
import { Input } from "../Input";
import * as s from "./styles";

interface TableProps {
  more: boolean;
  data: any[];
  onDelete: () => void;
}

export const TableEquipaments = ({ more, data, onDelete }: TableProps) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  return (
    <>
      <DialogHistoryEdit
        isOpen={openHistory}
        onClose={() => setOpenHistory(false)}
        name={"Equipamento"}
      />
      <DialogCustom
        isOpen={openEdit}
        onClose={() => setOpenEdit(false)}
        inputs={
          <>
            <Input label="Nome" mb={2} defaultValue="Lorem Ipsum" />
            <Input
              label="Descritivo"
              mb={2}
              defaultValue="Uma breve descrição"
            />
            <MainSelectWorkCenter />
          </>
        }
        title={"Editar equipamento"}
        subtitle={"Equipamento"}
      />
      <Box sx={s.ContainerTable}>
        <Box sx={s.ContainerTableHeader}>
          <Box ml={2.5}>
            <HeaderTypographyStrong text="IdEquipamento" fontSize={18} />
          </Box>
          <Box ml={-13}>
            <HeaderTypographyStrong text="Name" fontSize={18} />
          </Box>
          <Box ml={-8}>
            <HeaderTypographyStrong text="Descritivo" fontSize={18} />
          </Box>
          <HeaderTypographyStrong text="" fontSize={18} />
        </Box>
        <>
          {more === true ? (
            <>
              {data.map((item: any) => {
                return (
                  <Box sx={s.ContainerTableBody} key={item.id}>
                    <Box sx={s.ContainerTableBodyRow}>
                      <Box sx={s.ContainerTableBodyRowItem}>
                        <Box ml={2.5}>
                          <SupportTypography text={item.id} fontSize={16} />
                        </Box>
                        <SupportTypography text={item.email} fontSize={16} />
                        <SupportTypography
                          text={item.permissions}
                          fontSize={16}
                        />
                        <GroupButton
                          onEdit={() => setOpenEdit(true)}
                          onRegister={() => setOpenHistory(true)}
                          onDelete={onDelete}
                        />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </>
          ) : (
            <>
              {data.slice(0, 3).map((item: any) => {
                return (
                  <Box sx={s.ContainerTableBody} key={item.id}>
                    <Box sx={s.ContainerTableBodyRow}>
                      <Box sx={s.ContainerTableBodyRowItem}>
                        <Box ml={2.5}>
                          <SupportTypography text={item.id} fontSize={16} />
                        </Box>
                        <SupportTypography text={item.email} fontSize={16} />
                        <SupportTypography
                          text={item.permissions}
                          fontSize={16}
                        />
                        <GroupButton
                          onEdit={() => setOpenEdit(true)}
                          onRegister={() => setOpenHistory(true)}
                          onDelete={onDelete}
                        />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </>
          )}
        </>
      </Box>
    </>
  );
};
