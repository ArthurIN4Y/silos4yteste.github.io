import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { GearIconYellow } from "../../assets/icons";
import {
  HeaderTypographyStrong,
  SupportTypography,
} from "../../utils/typography";
import { GroupButton } from "../buttons/button-group";
import { DialogHistoryEdit } from "../dialogs/dialog-edit-history";
import * as s from "./styles";

interface TableProps {
  more: boolean;
  data: any[];
  onEdit: () => void;
  onDelete: () => void;
}

export const TableCompany = ({ more, data, onDelete, onEdit }: TableProps) => {
  const [openHistory, setOpenHistory] = useState(false);
  const tooltipContent = ({ onDelete, onEdit }: any) => {
    return (
      <Box sx={s.ContainerGroupButton}>
        <GroupButton onDelete={onDelete} onEdit={onEdit} onRegister={() => setOpenHistory(true)}/>
      </Box>
    );
  };
  return (
    <>
      <DialogHistoryEdit
        isOpen={openHistory}
        onClose={() => setOpenHistory(false)}
        name={"Empresa"}
      />
      <Box sx={s.ContainerTable}>
        <Box sx={s.ContainerTableHeader}>
          <Box ml={2.5}>
            <HeaderTypographyStrong text="IdEmpresa" fontSize={18} />
          </Box>
          <Box ml={-13}>
            <HeaderTypographyStrong text="Razão social" fontSize={18} />
          </Box>
          <Box ml={-13}>
            <HeaderTypographyStrong text="Endereço" fontSize={18} />
          </Box>
          <Box ml={-8}>
            <HeaderTypographyStrong text="CNPJ" fontSize={18} />
          </Box>
          <HeaderTypographyStrong text="" fontSize={18} />
        </Box>
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
                      <IconButton aria-label="settings" onClick={() => {}}>
                        <img src={GearIconYellow} alt="plus-icon" />
                      </IconButton>
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
                      <Tooltip
                        title={tooltipContent({ onEdit, onDelete })}
                        placement="right"
                        sx={{ cursor: "pointer" }}
                        componentsProps={{
                          tooltip: {
                            sx: {
                              bgcolor: "transparent",
                            },
                          },
                        }}
                      >
                        <IconButton aria-label="settings">
                          <img src={GearIconYellow} alt="plus-icon" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </>
        )}
      </Box>
    </>
  );
};
