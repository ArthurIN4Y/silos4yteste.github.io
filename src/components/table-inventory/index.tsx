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

interface TableClientsProps {
  more?: boolean;
  data?: any[];
  onDelete?: any;
  onEdit?: any;
}

export const TableInventory = ({
  more,
  data,
  onDelete,
  onEdit,
}: TableClientsProps) => {
  const [open, setOpen] = useState(false);

  const tooltipContent = ({ onDelete, onEdit }: any) => {
    return (
      <Box sx={s.ContainerGroupButton}>
        <GroupButton
          onDelete={onDelete}
          onEdit={onEdit}
          onRegister={() => setOpen(true)}
        />
      </Box>
    );
  };

  return (
    <>
      <DialogHistoryEdit
        isOpen={open}
        onClose={() => setOpen(false)}
        name="Cliente"
      />
      <Box sx={s.ContainerTable}>
        <Box sx={s.ContainerTableHeader}>
          <Box ml={2.5}>
            <HeaderTypographyStrong text="IdEquipamento" fontSize={18} />
          </Box>
          <Box ml={-13}>
            <HeaderTypographyStrong text="Equipamento" fontSize={18} />
          </Box>
          <Box ml={-8}>
            <HeaderTypographyStrong text="Responsável" fontSize={18} />
          </Box>
          <HeaderTypographyStrong text="Grão" fontSize={18} />
          <HeaderTypographyStrong text="LatLng" fontSize={18} />
          <HeaderTypographyStrong text="Status" fontSize={18} />
          <HeaderTypographyStrong text="" fontSize={18} />
        </Box>
        <>
          {more === true ? (
            <>
              {data?.map((item: any) => {
                return (
                  <Box sx={s.ContainerTableBody} key={item.id}>
                    <Box sx={s.ContainerTableBodyRow}>
                      <Box sx={s.ContainerTableBodyRowItem}>
                        <Box ml={2.5}>
                          <SupportTypography text={item.id} fontSize={16} />
                        </Box>
                        <Box ml={2}>
                          <SupportTypography
                            text={item.equipamento}
                            fontSize={16}
                          />
                        </Box>
                        <SupportTypography text={item.name} fontSize={16} />
                        <SupportTypography text={item.grain} fontSize={16} />
                        <SupportTypography text={item.latLng} fontSize={16} />
                        <SupportTypography text={item.status} fontSize={16} />
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
          ) : (
            <>
              {data?.slice(0, 3).map((item: any) => {
                return (
                  <Box sx={s.ContainerTableBody} key={item.id}>
                    <Box sx={s.ContainerTableBodyRow}>
                      <Box sx={s.ContainerTableBodyRowItem}>
                        <Box ml={2.5}>
                          <SupportTypography text={item.id} fontSize={16} />
                        </Box>
                        <Box ml={2}>
                          <SupportTypography
                            text={item.equipamento}
                            fontSize={16}
                          />
                        </Box>
                        <SupportTypography text={item.name} fontSize={16} />
                        <SupportTypography text={item.grain} fontSize={16} />
                        <SupportTypography text={item.latLng} fontSize={16} />
                        <SupportTypography text={item.status} fontSize={16} />
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
        </>
      </Box>
    </>

    // <TableContainer>
    //   <Table sx={{ minWidth: 650 }}>
    //     <TableHead sx={s.TableHead}>
    //       <TableRow>
    //         <TableCell sx={s.TableCell}>IdClient</TableCell>
    //         <TableCell sx={s.TableCell}>Nome</TableCell>
    //         <TableCell sx={s.TableCell}>Email</TableCell>
    //         <TableCell sx={s.TableCell}>Permissões</TableCell>
    //         <TableCell sx={s.TableCell}>Status</TableCell>
    //         <TableCell sx={s.TableCell}></TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {data.data.map((item: any) => {
    //         return (
    //           <TableRow key={item.id} sx={s.TableBody}>
    //             <TableCell sx={s.TableCell}>
    //               <SupportTypography text={item.id} fontSize={16} />
    //             </TableCell>
    //             <TableCell sx={s.TableCell}>
    //               <SupportTypography text={item.name} fontSize={16} />
    //             </TableCell>
    //             <TableCell sx={s.TableCell}>
    //               <SupportTypography text={item.email} fontSize={16} />
    //             </TableCell>
    //             <TableCell sx={s.TableCell}>
    //               <SupportTypography text={item.permissions} fontSize={16} />
    //             </TableCell>
    //             <TableCell sx={s.TableCell}>
    //               <SupportTypography text={item.status} fontSize={16} />
    //             </TableCell>
    //             <TableCell sx={s.TableCell}>
    //               <IconButton aria-label="settings" onClick={() => {}}>
    //                 <img src={GearIconYellow} alt="plus-icon" />
    //               </IconButton>
    //             </TableCell>
    //           </TableRow>
    //         );
    //       })}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};
