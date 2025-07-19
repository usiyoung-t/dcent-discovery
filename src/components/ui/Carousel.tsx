import { Children, useState, type ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Carousel = ({ children }: { children: ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const totalSlides = Children.count(children);

  if (!children) {
    return null;
  }

  return (
    <div className="overflow-hidden relative w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
      >
        {children}
      </Swiper>

      <div className="absolute right-3 bottom-3 z-10 px-2 py-1 text-xs text-white bg-black bg-opacity-50 rounded-full">
        {isNaN(currentIndex) ? 0 : currentIndex} / {totalSlides}
      </div>
    </div>
  );
};

export default Carousel;
