import { useQuery } from "@tanstack/react-query";
import { getBanners, type Banner } from "../api/banner";
import { useAppContext } from "../context/useAppContext";

const useBanners = () => {
  const { lang } = useAppContext();

  const { data, isLoading, error } = useQuery<Banner[]>({
    queryKey: ["banners", lang],
    queryFn: () => getBanners({ lang }),
  });

  return { data, isLoading, error };
};

export default useBanners;
