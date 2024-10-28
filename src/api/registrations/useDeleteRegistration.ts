import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRegistration } from ".";
import { getRegistrationsKey } from "./keys";

const useDeleteRegistration = (successCallback?: VoidFunction, errorCallback?: VoidFunction) => {
  const queryClient = useQueryClient();
  const queryKey = getRegistrationsKey();

  return useMutation({
    mutationFn: deleteRegistration,
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

export default useDeleteRegistration;
