import Button from "~/components/Button";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import IconButton from "~/components/IconButton";
import { TRegistration, TRegistrationStatus } from "~/api/registrations/types";

type TProps = {
  data: TRegistration
  onUpdate: (data: TRegistration, newStatus: TRegistrationStatus) => void
  onDelete: (id: string) => void
};

const RegistrationCard = ({ data, onUpdate, onDelete }: TProps) => {
  return (
    <S.Card $status={data.status} aria-label="Candidato">
      <S.HeaderContent>
        <S.IconAndText>
          <HiOutlineUser />
          <h3>{data.employeeName}</h3>
        </S.IconAndText>
        <S.IconAndText>
          <HiOutlineMail />
          <p>{data.email}</p>
        </S.IconAndText>
        <S.IconAndText>
          <HiOutlineCalendar />
          <time>{data.admissionDate}</time>
        </S.IconAndText>
      </S.HeaderContent>
      
      <S.Actions>
        <S.Flex>
          {data.status === 'REVIEW' && (
            <>
              <Button color="success" size="small" onClick={() => onUpdate(data, "APROVED")}>Aprovar</Button>
              <Button color="danger" size="small" onClick={() => onUpdate(data, "REPROVED")}>Reprovar</Button>
            </>
          )}
          {(data.status === 'APROVED' || data.status === 'REPROVED') && (
            <Button color="warning" size="small" onClick={() => onUpdate(data, "REVIEW")}>Revisar novamente</Button>
          )}
        </S.Flex>

        <IconButton size="small" color="danger" onClick={() => onDelete(data.id!)} aria-label="Deletar">
          <HiOutlineTrash />
        </IconButton>
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
