import useGetRegistrations from "~/api/registrations/useGetRegistrations";
import Collumns from "./components/Columns/Collumns";
import { SearchBar } from "./components/Searchbar/Searchbar";
import { useSearchParams } from "react-router-dom";
import { CPF_SEARCH_PARAM } from "./constants";
import useUpdateRegistration from "~/api/registrations/useUpdateRegistration";
import { TRegistration, TRegistrationStatus, TRegistrationUpdate } from "~/api/registrations/types";
import { enqueueSnackbar } from "notistack";
import * as S from "./styles";
import { useState } from "react";
import ModalConfirm from "./components/ModalConfirm";
import useDeleteRegistration from "~/api/registrations/useDeleteRegistration";

const Dashboard = () => {
  const [userToUpdate, setUserToUpdate] = useState<TRegistrationUpdate | null>(null);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const cpf = searchParams.get(CPF_SEARCH_PARAM) || '';
  const registrations = useGetRegistrations(cpf);

  const updateRegistration = useUpdateRegistration(
    () => enqueueSnackbar('Admissão atualizada com sucesso!', { variant: 'success' }),
    () => enqueueSnackbar('Ops! Algo deu errado.', { variant: 'error' })
  );

  const deleteRegistration = useDeleteRegistration(
    () => enqueueSnackbar('Admissão excluída com sucesso!', { variant: 'success' }),
    () => enqueueSnackbar('Ops! Algo deu errado.', { variant: 'error' })
  );

  const handleConfirmUpdate = (data: TRegistration, newStatus: TRegistrationStatus) => {
    const params = {
      id: data.id,
      body: {
        ...data,
        status: newStatus
      }
    };
    setUserToUpdate(params as TRegistrationUpdate);
  };

  const handleConfirmDelete = (id: string) => {
    setUserToDelete(id);
  };
  
  const handleUpdate = () => {
    userToUpdate && updateRegistration.mutate(userToUpdate);
    setUserToUpdate(null);
  };

  const handleCancel = () => {
    setUserToUpdate(null);
    setUserToDelete(null);
  };

  const handleRefresh = () => {
    searchParams.delete(CPF_SEARCH_PARAM);
    setSearchParams(searchParams);
    registrations.refetch();
  };

  const handleDelete = () => {
    userToDelete && deleteRegistration.mutate(userToDelete);
    setUserToDelete(null);
  };

  return (
    <S.Container>
      <SearchBar onRefresh={handleRefresh} />
      <Collumns registrations={registrations} onUpdate={handleConfirmUpdate} onDelete={handleConfirmDelete} />

      <ModalConfirm 
        newStatus={userToUpdate?.body.status}
        idToDelete={userToDelete} 
        onCancel={handleCancel} 
        onConfirm={userToDelete ? handleDelete : handleUpdate}
      />
    </S.Container>
  );
};

export default Dashboard;
