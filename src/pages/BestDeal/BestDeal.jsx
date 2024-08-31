import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import BestDealCard from "./BestDealCard/BestDealCard";

const BestDeal = () => {
  const [bestProducts, setBestProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bestDeals")
      .then((res) => res.json())
      .then((data) => setBestProducts(data));
  }, []);

  return (
    <div>
      <div className="bg-[#f16022] border-2 my-10 py-2">
                <h2 className="text-2xl md:text-4xl font-semibold text-center text-white uppercase">Our Best Deals</h2>
            </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {bestProducts?.map((item) => {
          return (
            <SwiperSlide key={item?._id}>
              <BestDealCard item={item} />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default BestDeal;
