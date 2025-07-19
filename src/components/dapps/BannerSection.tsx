import { DAPP_ICON_URL } from "../../constants";
import Carousel from "../ui/Carousel";
import { SwiperSlide } from "swiper/react";
import useBanners from "../../hooks/useBanners";

const BannerSection = () => {
  const {
    data: banners,
    isLoading: isLoadingBanners,
    error: errorBanners,
  } = useBanners();

  if (isLoadingBanners) {
    return <div>Loading...</div>;
  }

  if (errorBanners) {
    return <div>Error: {errorBanners.message}</div>;
  }

  return (
    <Carousel>
      {banners?.map((banner) => (
        <SwiperSlide key={banner.id}>
          <a href={banner.link} target="_blank" rel="noopener noreferrer">
            <div className="relative h-48 text-white bg-gray-800">
              <img
                src={DAPP_ICON_URL + banner.image}
                alt={banner.description || ""}
                className="object-cover w-full h-full opacity-80"
              />
              <div className="flex absolute inset-0 flex-col justify-center items-start p-5 w-90">
                {banner.description && (
                  <p className="mb-4 text-xl font-normal">
                    {banner?.description}
                  </p>
                )}
                {banner.buttonText && (
                  <button className="px-6 py-2 font-bold text-black bg-white rounded-full">
                    {banner.buttonText}
                  </button>
                )}
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default BannerSection;
