import client from "./client";

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
  const response = await client.get("/api/dapps", {
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

export const addFavorite = async (dappId: string) => {
  const response = await client.post("/api/favorites", { dappId });

  if (!response.data.success) {
    throw new Error(response.data.message || "Failed to add favorite");
  }
};

export const deleteFavorite = async (dappId: string) => {
  const response = await client.delete(`/api/favorites/${dappId}`);

  if (!response.data.success) {
    throw new Error(response.data.message || "Failed to delete favorite");
  }
};
