import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useState } from 'react';

const BestDeal = () => {
  const [bestProducts, setBestProducts] = useState([])
  useEffect(()=>{
      fetch('http://localhost:5000/bestDeals')
      .then(res => res.json())
      .then(data => setBestProducts(data))
  },[])

    
    return (
        <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bestProducts?.map(item=>{
          return(
            <SwiperSlide key={item?._id}>Slide 1</SwiperSlide>
          )
        })}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
    );
};

export default BestDeal;





