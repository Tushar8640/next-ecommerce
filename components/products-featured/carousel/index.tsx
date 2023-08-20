import ProductItem from "./../../product-item";
import { ProductTypeList } from "types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

type ProductsCarouselType = {
  products: ProductTypeList[];
};

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    
  
        slidesPerView={slidesPerView}
        modules={[Autoplay]}
        className="swiper-wrapper"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              color={item.color}
              discount={item.discount}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
