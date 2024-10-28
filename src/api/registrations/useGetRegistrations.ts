import { useQuery } from "@tanstack/react-query";
import { TRegistration } from "./types";
import { getRegistrationsByCPFKey, getRegistrationsKey } from "./keys";
import { getRegistrations } from ".";

const useGetRegistrations = (cpf?: string) => {
  return useQuery<TRegistration[]>({
    queryKey: cpf ? getRegistrationsByCPFKey(cpf) : getRegistrationsKey(),
    queryFn: () => getRegistrations(cpf)
  });
};

export default useGetRegistrations;
