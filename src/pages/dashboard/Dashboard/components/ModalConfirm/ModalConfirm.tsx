import { TRegistrationStatus } from "~/api/registrations/types";
import Button from "~/components/Button";
import Modal from "~/components/Modal";

type TProps = {
  newStatus?: TRegistrationStatus | undefined
  idToDelete?: string | null
  onCancel: VoidFunction
  onConfirm: VoidFunction
}

const ModalConfirm = ({ onCancel, onConfirm, newStatus, idToDelete }: TProps) => {
  let actionToUpdate;

  switch (newStatus) {
    case 'APROVED':
      actionToUpdate = "aprovar";
      break;
    case 'REVIEW':
      actionToUpdate = "revisar novamente";
      break;
    case 'REPROVED':
      actionToUpdate = "reprovar";
      break;
  }

  const isUpdate = !!newStatus;
  const isDelete = !!idToDelete;

  const message = (isUpdate && `Tem certeza que deseja ${actionToUpdate} esta admissão?`) || (isDelete && `Tem certeza que deseja excluir esta admissão?`);
  
  return (
    <Modal
      open={!!newStatus || !!idToDelete}
      title="Confirmação"
      body={message}
      onClose={onCancel}
      actions={(
        <>
          <Button color="danger" onClick={onCancel}>Cancelar</Button>
          <Button color="success" onClick={onConfirm}>Confirmar</Button>
        </>
      )}
    />
  );
};

export default ModalConfirm;