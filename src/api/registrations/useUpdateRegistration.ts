import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRegistration } from ".";
import { getRegistrationsKey } from "./keys";

const useUpdateRegistration = (successCallback?: VoidFunction, errorCallback?: VoidFunction) => {
  const queryClient = useQueryClient();
  const queryKey = getRegistrationsKey();

  return useMutation({
    mutationFn: updateRegistration,
    onSuccess: () => {
      successCallback && successCallback();
      queryClient.invalidateQueries({queryKey: queryKey});
    },
    onError: (error) => {
      console.log(error);
      errorCallback && errorCallback();
    }
  });
};

export default useUpdateRegistration;
