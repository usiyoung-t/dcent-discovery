import axios from "axios";

export interface Dapp {
  id: string;
  network?: string[];
  name: string;
  description: string;
  iconUrl: string;
  linkUrl: string;
}

export interface DappsData {
  dapps: Dapp[];
  favoriteIds: string[];
}

interface GetDappsParams {
  lang: string;
  platform: string;
  env: string;
}

export const getDapps = async ({ lang, platform, env }: GetDappsParams) => {
  const response = await axios.get("/api/dapps", {
    params: {
      platform,
      env,
    },
    headers: {
      "Accept-Language": lang,
    },
  });

  if (!response.data.success) {
    throw new Error(response.data.message || "Failed to fetch dapps");
  }

  return response.data.data;
};
