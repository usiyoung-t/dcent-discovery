import client from "./client";

export interface Banner {
  id: string;
  image: string;
  description: string;
  link: string;
  buttonText: string;
}

interface GetBannersParams {
  lang: string;
}

export const getBanners = async ({ lang }: GetBannersParams) => {
  const response = await client.get("/api/banners", {
    headers: {
      "Accept-Language": lang,
    },
  });

  if (!response.data.success) {
    throw new Error(response.data.message || "Failed to fetch banners");
  }

  return response.data.data;
};
