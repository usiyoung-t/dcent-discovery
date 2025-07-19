import { http, HttpResponse } from "msw";
import {
  bannersMockData,
  dappsMockData,
  favoriteIdsMockData,
} from "./mockData";

export const handlers = [
  /**
   * 배너 데이터 조회
   */
  http.get("/api/banners", ({ request }) => {
    const lang = request.headers.get("Accept-Language") || "ko";

    const banners = bannersMockData.map((banner) => ({
      id: banner.id,
      image: lang === "ko" ? banner.imageKo : banner.imageEn,
      description: lang === "ko" ? banner.descriptionKo : banner.descriptionEn,
      link: lang === "ko" ? banner.linkKo : banner.linkEn,
      buttonText: lang === "ko" ? banner.buttonTextKo : banner.buttonTextEn,
    }));

    // return HttpResponse.json({
    //   success: false,
    //   data: [],
    //   message: "Failed to fetch banners",
    // });

    return HttpResponse.json({
      success: true,
      data: banners,
    });
  }),

  /**
   * 디앱 데이터 조회
   */
  http.get("/api/dapps", ({ request }) => {
    const url = new URL(request.url);
    const lang = request.headers.get("Accept-Language") || "ko";
    const platform = url.searchParams.get("platform") || "ios";
    const env = import.meta.env.VITE_APP_ENV || "development";

    const filteredDapps = dappsMockData
      .filter((dapp) => {
        const { platforms, envs, langs } = dapp.displayConditions || {};

        if (platforms && !platforms.includes(platform)) return false;
        if (envs && !envs.includes(env)) return false;
        if (langs && !langs.includes(lang)) return false;

        return true;
      })
      .map((dapp) => ({
        id: dapp.id,
        network: dapp.network,
        name: lang === "ko" ? dapp.nameKo : dapp.nameEn,
        description: lang === "ko" ? dapp.descriptionKo : dapp.descriptionEn,
        iconUrl: dapp.iconUrl,
        linkUrl: dapp.linkUrl,
      }));

    // return HttpResponse.json({
    //   success: false,
    //   data: [],
    //   message: "Failed to fetch banners",
    // });

    return HttpResponse.json({
      success: true,
      data: {
        dapps: filteredDapps,
        favoriteIds: favoriteIdsMockData.favoriteIds,
      },
    });
  }),

  http.post("/api/favorites", async ({ request }) => {
    const { dappId } = (await request.json()) as { dappId: string };

    if (!favoriteIdsMockData.favoriteIds.includes(dappId)) {
      favoriteIdsMockData.favoriteIds.push(dappId);
    }

    return HttpResponse.json({ success: true }, { status: 201 });
  }),

  http.delete("/api/favorites/:dappId", ({ params }) => {
    const { dappId } = params as { dappId: string };

    if (dappId === "fail-case-id") {
      return new HttpResponse(null, {
        status: 500,
        statusText: "Server Error",
      });
    }

    favoriteIdsMockData.favoriteIds = favoriteIdsMockData.favoriteIds.filter(
      (id) => id !== dappId
    );

    return HttpResponse.json({ success: true });
  }),
];
