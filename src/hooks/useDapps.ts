import { useQuery } from "@tanstack/react-query";
import { getDapps, type DappsData } from "../api/dapps";

const useDapps = (lang: string, platform: string, env: string) => {
  const { data, isLoading, error } = useQuery<DappsData>({
    queryKey: ["dapps", lang, platform, env],
    enabled: !!lang && !!platform && !!env,
    queryFn: () => getDapps({ lang, platform, env }),
  });

  return { data, isLoading, error };
};

export default useDapps;
