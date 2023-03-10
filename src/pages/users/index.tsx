import { Avatar, Box, IconButton } from "@mui/material";
import {
  BellIcon,
  HelpIcon,
  PlusIcon,
  UserIconYellow,
} from "../../assets/icons";
import { Badge } from "../../components/badge";
import { SideBar } from "../../components/sidebar";
import {
  HeaderTypographyStrong,
  LabelInter,
  SupportTypography,
  SupportTypographyStrong,
} from "../../utils/typography";
import * as s from "./styles";
import { TableClients } from "../../components/table";
import { DialogCustom } from "../../components/dialogs/dialog-new";
import { useState } from "react";
import { Input } from "../../components/Input";
import { TableEquipaments } from "../../components/table-equipaments";
import { TableCompany } from "../../components/table-company";
import { TableCcstCenter } from "../../components/table-cost-center";
import { TableWorkCenter } from "../../components/table-work-center";
import { MainSelect } from "../../components/buttons/select";
import { SelectCompany } from "../../components/buttons/select-company";
import { MainSelectWorkCenter } from "../../components/buttons/select-work-center";
import { MainSelectCostCenter } from "../../components/buttons/select-cost-center";
import { ButtonLink } from "../../components/buttons/button-link";
import { DialogDelete } from "../../components/dialogs/dialog-delete";
import { UserMenu } from "../../components/user-menu";
import { Notifications } from "../../components/notifications";

const data = [
  {
    id: 1,
    name: "Lorem",
    email: "LoremIpsum@mail.com",
    permissions: "Usuario",
    status: "Ativo",
  },
  {
    id: 2,
    name: "Lorem",
    email: "LoremIpsum@mail.com",
    permissions: "Usuario",
    status: "Ativo",
  },
  {
    id: 3,
    name: "Lorem",
    email: "LoremIpsum@mail.com",
    permissions: "Usuario",
    status: "Ativo",
  },
  {
    id: 4,
    name: "Lorem",
    email: "LoremIpsum@mail.com",
    permissions: "Usuario",
    status: "Ativo",
  },
  {
    id: 5,
    name: "Lorem",
    email: "LoremIpsum@mail.com",
    permissions: "Usuario",
    status: "Ativo",
  },
  {
    id: 6,
    name: "Lorem",
    email: "LoremIpsum@mail.com",
    permissions: "Usuario",
    status: "Ativo",
  },
  {
    id: 7,
    name: "Lorem",
    email: "LoremIpsum@mail.com",
    permissions: "Usuario",
    status: "Ativo",
  },
];

export const UsersPage = () => {
  const [open, setOpen] = useState(false);
  const [newEquipament, setNewEquipament] = useState(false);
  const [newCompany, setNewCompany] = useState(false);
  const [newCcstCenter, setNewCcstCenter] = useState(false);
  const [newWorkCenter, setNewWorkCenter] = useState(false);
  const [viewMoreClients, setViewMoreClients] = useState(false);
  const [viewMoreEquipments, setViewMoreEquipments] = useState(false);
  const [viewMoreCompanies, setViewMoreCompanies] = useState(false);
  const [viewMoreCostCenter, setViewMoreCostCenter] = useState(false);
  const [viewMoreWorkCenter, setViewMoreWorkCenter] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openOnDelete, setOpenOnDelete] = useState(false);
  const [openEditCompany, setOpenEditCompany] = useState(false);
  const [openEditCostCenter, setOpenEditCostCenter] = useState(false);
  const [openEditWorkCenter, setOpenEditWorkCenter] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickViewMoreClients = () => {
    setViewMoreClients(true);
  };

  const handleClickViewLess = () => {
    setViewMoreClients(false);
  };

  const handleClickOpenEquipament = () => {
    setNewEquipament(true);
  };

  const handleClickOpenCompany = () => {
    setNewCompany(true);
  };

  const handleClickOpenCcstCenter = () => {
    setNewCcstCenter(true);
  };

  const handleClickOpenWorkCenter = () => {
    setNewWorkCenter(true);
  };

  return (
    <Box sx={s.Container}>
      <SideBar />
      <Box sx={s.ContainerMain} component="main">
        <DialogDelete
          isOpen={openOnDelete}
          onClose={() => setOpenOnDelete(false)}
        />
        <DialogCustom
          isOpen={openEditCostCenter}
          onClose={() => setOpenEditCostCenter(false)}
          inputs={
            <>
              <Input label="Nome Centro de Custo" mb={2} defaultValue="Lorem" />
              <Input
                label="Descrição"
                mb={2}
                defaultValue="LoremIpsum@mail.com"
              />
              <SelectCompany />
            </>
          }
          title="Editar centro de custo"
          subtitle="Centro de custo"
        />
        <DialogCustom
          isOpen={openEditCompany}
          onClose={() => setOpenEditCompany(false)}
          inputs={
            <>
              <Input
                label="Razão social"
                mb={2}
                defaultValue="Loram Isum LTDA"
              />
              <Input label="CEP" mb={2} defaultValue="900-9999" />
              <Input label="Logradouro" mb={2} defaultValue="Rua Loram Isum" />
              <Input label="Numero" mb={2} defaultValue="123" />
              <Input label="Cidade" mb={2} defaultValue="Loram Isum City" />
              <Input label="Estado" mb={2} defaultValue="LI" />
              <Input label="CNPJ" mb={2} defaultValue="29.375.092/0001-76" />
            </>
          }
          title="Editar Empresa"
          subtitle="Empresa"
        />
        <DialogCustom
          isOpen={openEdit}
          onClose={() => setOpenEdit(false)}
          inputs={
            <>
              <Input label="Nome" mb={2} defaultValue="Lorem" />
              <Input label="Email" mb={2} defaultValue="LoremIpsum@mail.com" />
              <Input label="Telefone" mb={2} defaultValue="(51) 9 0000 0000" />
              <MainSelect />
            </>
          }
          title="Editar Usuário"
          subtitle="Usuário"
        />
        <DialogCustom
          isOpen={openEditWorkCenter}
          onClose={() => setOpenEditWorkCenter(false)}
          inputs={
            <>
              <Input
                label="Nome Centro de Trabalho"
                mb={2}
                defaultValue="Lorem"
              />
              <Input
                label="Descrição"
                mb={2}
                defaultValue="Uma breve descrição"
              />
              <MainSelectCostCenter />
            </>
          }
          title="Editar Centro de Trabalho"
          subtitle="Centro de trabalho"
        />
        <DialogCustom
          isOpen={open}
          onClose={() => setOpen(false)}
          inputs={
            <>
              <Input label="Nome" mb={2} />
              <Input label="Email" mb={2} />
              <Input label="Telefone" mb={2} />
              <MainSelect />
            </>
          }
          title="Novo Usuário"
          subtitle="Usuário"
        />
        <DialogCustom
          isOpen={newEquipament}
          onClose={() => setNewEquipament(false)}
          inputs={
            <>
              <Input label="Nome" mb={2} />
              <Input label="Descritivo" mb={2} />
              <MainSelectWorkCenter />
            </>
          }
          title={"Novo equipamento"}
          subtitle={"Equipamento"}
        />
        <DialogCustom
          isOpen={newCompany}
          onClose={() => setNewCompany(false)}
          inputs={
            <>
              <Input label="Razão social" mb={2} />
              <Input label="CEP" mb={2} />
              <Input label="Logradouro" mb={2} />
              <Input label="Numero" mb={2} />
              <Input label="Cidade" mb={2} />
              <Input label="Estado" mb={2} />
              <Input label="CNPJ" mb={2} />
            </>
          }
          title={"Nova Empresa"}
          subtitle={"Empresa"}
        />

        <DialogCustom
          isOpen={newCcstCenter}
          onClose={() => setNewCcstCenter(false)}
          inputs={
            <>
              <Input label="Nome Centro de custo" mb={2} />
              <Input label="Descrição" mb={2} />
              <SelectCompany />
            </>
          }
          title={"Novo centro de custo"}
          subtitle={"Centro de custo"}
        />
        <DialogCustom
          isOpen={newWorkCenter}
          onClose={() => setNewWorkCenter(false)}
          inputs={
            <>
              <Input label="Nome Centro de trabalho" mb={2} />
              <Input label="Descrição" mb={2} />
              <MainSelectCostCenter />
            </>
          }
          title={"Novo centro de trabalho"}
          subtitle={"Centro de trabalho"}
        />
        <Box sx={s.ContainerHeader}>
          <Box sx={s.ContainerLeft}>
            <img
              src={UserIconYellow}
              alt="user-icon"
              style={{ width: "32px", height: "32px" }}
            />
            <LabelInter text="Usuários" fontSize={24} fontWeight="700" />
          </Box>
          <Box sx={s.ContainerRight}>
            <Box>
              <Notifications />
            </Box>
            <Box sx={s.ContainerAvatar}>
              <Avatar sx={s.Avatar} />
              <Box display={"flex"} flexDirection={"row"} ml={1}>
                <SupportTypography text="Olà" />
                <SupportTypographyStrong text=", João" />
              </Box>
            </Box>
            <UserMenu />
          </Box>
        </Box>
        <Box sx={s.ContainerBody}>
          <Box sx={s.ContainerBodyHeader}>
            <Badge text="Clientes" />
            <Box sx={s.ContainerAddNew}>
              <SupportTypography text="Criar novo" />
              <IconButton size="small" onClick={() => handleClickOpen()}>
                <img src={PlusIcon} alt="plus-icon" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={s.ContainerBodyContent}>
            <TableClients
              data={data}
              more={viewMoreClients}
              onDelete={() => setOpenOnDelete(true)}
              onEdit={() => setOpenEdit(true)}
            />
          </Box>
          {viewMoreClients ? (
            <>
              <Box sx={s.ContainerSeeMore}>
                <ButtonLink
                  text="Ver menos..."
                  onClick={() => handleClickViewLess()}
                />
              </Box>
            </>
          ) : (
            <Box sx={s.ContainerSeeMore}>
              <ButtonLink
                text="Ver mais..."
                onClick={() => handleClickViewMoreClients()}
              />
            </Box>
          )}
        </Box>
        <Box sx={s.ContainerBody}>
          <Box sx={s.ContainerBodyHeader} mt={2}>
            <Badge text="Equipamentos" />
            <Box sx={s.ContainerAddNew}>
              <SupportTypography text="Criar novo" />
              <IconButton
                size="small"
                onClick={() => handleClickOpenEquipament()}
              >
                <img src={PlusIcon} alt="plus-icon" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={s.ContainerBodyContent}>
            <TableEquipaments
              data={data}
              more={viewMoreEquipments}
              onDelete={() => setOpenOnDelete(true)}
            />
          </Box>
          <Box sx={s.ContainerSeeMore}>
            {viewMoreEquipments ? (
              <>
                <Box sx={s.ContainerSeeMore}>
                  <ButtonLink
                    text="Ver menos..."
                    onClick={() => setViewMoreEquipments(false)}
                  />
                </Box>
              </>
            ) : (
              <Box sx={s.ContainerSeeMore}>
                <ButtonLink
                  text="Ver mais..."
                  onClick={() => setViewMoreEquipments(true)}
                />
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={s.ContainerBody}>
          <Box sx={s.ContainerBodyHeader} mt={2}>
            <Badge text="Empresas" />
            <Box sx={s.ContainerAddNew}>
              <SupportTypography text="Criar novo" />
              <IconButton size="small" onClick={() => handleClickOpenCompany()}>
                <img src={PlusIcon} alt="plus-icon" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={s.ContainerBodyContent}>
            <TableCompany
              data={data}
              more={viewMoreCompanies}
              onDelete={() => setOpenOnDelete(true)}
              onEdit={() => setOpenEditCompany(true)}
            />
          </Box>
          <Box sx={s.ContainerSeeMore}>
            {viewMoreCompanies ? (
              <>
                <Box sx={s.ContainerSeeMore}>
                  <ButtonLink
                    text="Ver menos..."
                    onClick={() => setViewMoreCompanies(false)}
                  />
                </Box>
              </>
            ) : (
              <Box sx={s.ContainerSeeMore}>
                <ButtonLink
                  text="Ver mais..."
                  onClick={() => setViewMoreCompanies(true)}
                />
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={s.ContainerBody}>
          <Box sx={s.ContainerBodyHeader} mt={2}>
            <Badge text="Centros de custo" />
            <Box sx={s.ContainerAddNew}>
              <SupportTypography text="Criar novo" />
              <IconButton
                size="small"
                onClick={() => handleClickOpenCcstCenter()}
              >
                <img src={PlusIcon} alt="plus-icon" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={s.ContainerBodyContent}>
            <TableCcstCenter
              data={data}
              more={viewMoreCostCenter}
              onDelete={() => setOpenOnDelete(true)}
              onEdit={() => setOpenEditCostCenter(true)}
            />
          </Box>
          <Box sx={s.ContainerSeeMore}>
            {viewMoreCostCenter ? (
              <>
                <Box sx={s.ContainerSeeMore}>
                  <ButtonLink
                    text="Ver menos..."
                    onClick={() => setViewMoreCostCenter(false)}
                  />
                </Box>
              </>
            ) : (
              <Box sx={s.ContainerSeeMore}>
                <ButtonLink
                  text="Ver mais..."
                  onClick={() => setViewMoreCostCenter(true)}
                />
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={s.ContainerBody} mb={4}>
          <Box sx={s.ContainerBodyHeader} mt={2}>
            <Badge text="Centros de trabalho" />
            <Box sx={s.ContainerAddNew}>
              <SupportTypography text="Criar novo" />
              <IconButton
                size="small"
                onClick={() => handleClickOpenWorkCenter()}
              >
                <img src={PlusIcon} alt="plus-icon" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={s.ContainerBodyContent}>
            <TableWorkCenter
              data={data}
              more={viewMoreWorkCenter}
              onDelete={() => setOpenOnDelete(true)}
              onEdit={() => setOpenEditWorkCenter(true)}
            />
          </Box>
          <Box sx={s.ContainerSeeMore}>
            {viewMoreWorkCenter ? (
              <>
                <Box sx={s.ContainerSeeMore}>
                  <ButtonLink
                    text="Ver menos..."
                    onClick={() => setViewMoreWorkCenter(false)}
                  />
                </Box>
              </>
            ) : (
              <Box sx={s.ContainerSeeMore}>
                <ButtonLink
                  text="Ver mais..."
                  onClick={() => setViewMoreWorkCenter(true)}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
