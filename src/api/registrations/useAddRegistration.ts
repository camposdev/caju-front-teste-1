import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRegistration } from ".";
import { getRegistrationsKey } from "./keys";
import { TRegistration } from "./types";

const useAddRegistration = (successCallback?: VoidFunction, errorCallback?: VoidFunction) => {
  const queryClient = useQueryClient();
  const queryKey = getRegistrationsKey();

  return useMutation({
    mutationFn: addRegistration,
    onSuccess: (data) => {
      successCallback && successCallback();
      queryClient.setQueryData<TRegistration[]>(
        queryKey,
        (currentData) =>
          currentData && [
            data,
            ...currentData
          ]
      );
    },
    onError: (error) => {
      console.log(error);
      errorCallback && errorCallback();
    }
  });
};

export default useAddRegistration;
