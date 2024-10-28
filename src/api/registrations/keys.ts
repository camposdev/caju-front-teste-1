import { QueryKey } from "@tanstack/react-query";

export const getRegistrationsKey = (): QueryKey => ['registrations'];
export const getRegistrationsByCPFKey = (cpf: string): QueryKey => ['registrations', cpf];
