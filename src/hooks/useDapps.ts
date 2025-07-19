import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addFavorite,
  deleteFavorite,
  getDapps,
  type DappsData,
} from "../api/dapps";
import { useAppContext } from "../context/useAppContext";

const useDapps = () => {
  const { lang, platform, env } = useAppContext();

  const queryClient = useQueryClient();
  const queryKey = ["dapps", lang, platform, env];

  const { data, isLoading, error } = useQuery<DappsData>({
    queryKey: ["dapps", lang, platform, env],
    enabled: !!lang && !!platform && !!env,
    queryFn: () => getDapps({ lang, platform, env }),
  });

  const addFavoriteMutation = useMutation({
    mutationFn: (dappId: string) => addFavorite(dappId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const deleteFavoriteMutation = useMutation({
    mutationFn: (dappId: string) => deleteFavorite(dappId),
    onMutate: async (dappId: string) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData<DappsData>(queryKey);

      if (previousData) {
        queryClient.setQueryData(queryKey, {
          ...previousData,
          favoriteIds: previousData.favoriteIds.filter((id) => id !== dappId),
        });
      }

      return { previousData };
    },
    onError: (_err, _dappId, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return {
    data,
    isLoading,
    error,
    addFavorite: addFavoriteMutation.mutate,
    deleteFavorite: deleteFavoriteMutation.mutate,
  };
};

export default useDapps;
