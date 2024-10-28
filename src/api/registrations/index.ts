import { api } from "~/lib/api";
import { TRegistration, TRegistrationUpdate } from "./types";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getRegistrations = async (
  cpf?: string
): Promise<TRegistration[]> => {
  await delay(1000);
  return await api
    .get(`/registrations?cpf=${cpf}`)
    .then((response) => response.data);
};

export const updateRegistration = async ({
  id,
  body,
}: TRegistrationUpdate): Promise<TRegistration> => {
  return await api
    .put(`/registrations/${id}`, body)
    .then((response) => response.data);
};

export const addRegistration = async (
  body: TRegistration
): Promise<TRegistration> => {
  await delay(1000);
  return await api
    .post("/registrations", body)
    .then((response) => response.data);
};

export const deleteRegistration = async (id: string): Promise<TRegistration> => {
  return await api
    .delete(`/registrations/${id}`)
    .then((response) => response.data);
};