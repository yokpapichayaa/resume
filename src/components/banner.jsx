import banner1 from '../images/portImage1.jpg'
import banner2 from '../images/portImage2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
  return (
    <Swiper spaceBetween={20} slidesPerView={1} 
        autoplay={{ delay: 5000, disableOnInteraction: false,}}  modules={[Autoplay]}  loop={true}>
      <SwiperSlide className="bgb" style={{ backgroundImage: `url(${banner1})` }}>
      </SwiperSlide>
      <SwiperSlide className="bgb" style={{ backgroundImage:`url(${banner2})` }}>
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
