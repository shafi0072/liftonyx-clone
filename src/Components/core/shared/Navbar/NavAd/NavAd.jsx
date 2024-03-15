
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const NavAd = () => {
    return (
      <div className="max-w-xl  mx-auto pt-2 text-white ">
        <div className="text-white">
          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper  text-center text-sm text-white"
          >
            <SwiperSlide>10% OFF for First Time Purchase</SwiperSlide>
            <SwiperSlide>Free Shipping over RM150 for WM</SwiperSlide>
            <SwiperSlide>Buy 1 Get 30% OFF Shipping for WM</SwiperSlide>

            <SwiperSlide>Buy 1 Get 50% OFF Shipping for WM</SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

// export default NavAd;
export default NavAd;






