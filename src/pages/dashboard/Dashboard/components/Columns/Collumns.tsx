import * as S from "./styles";
import RegistrationCard from "../RegistrationCard/RegistrationCard";
import { TRegistration, TRegistrationStatus } from "~/api/registrations/types";
import { UseQueryResult } from "@tanstack/react-query";
import Spinner from "~/components/Spinner/Spinner";

type TColumns = {
  status: TRegistrationStatus
  title: string
}

type TProps = {
  registrations?: UseQueryResult<TRegistration[]>
  onUpdate: (data: TRegistration, newStatus: TRegistrationStatus) => void
  onDelete: (id: string) => void
};

const Collumns = ({ registrations, onUpdate, onDelete }: TProps) => {
  const allColumns: TColumns[] = [
    { status: 'REVIEW', title: "Pronto para revisar" },
    { status: 'APROVED', title: "Aprovado" },
    { status: 'REPROVED', title: "Reprovado" }
  ];

  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column $status={collum.status} key={collum.title} aria-label={collum.title}>
            <>
              <S.TitleColumn $status={collum.status}>
                {collum.title}
              </S.TitleColumn>

              <S.CollumContent>
                {registrations?.isFetching ? (
                  <>
                    <S.Loading $status={collum.status}>
                      <Spinner aria-label="Carregando" />
                    </S.Loading>
                  </>
                ) : (
                  <>
                    {registrations?.data?.filter((registration) => registration.status === collum.status).map((registration) => {
                      return (
                        <RegistrationCard
                          data={registration}
                          key={registration.id}
                          onUpdate={onUpdate}
                          onDelete={onDelete}
                        />
                      );
                    })}
                  </>
                )}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
