import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

import OfferCard from "../ui/OfferCard";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type offers_TP = {
  id: number;
  img: string;
  title: string;
  details: string;
}[];

const offers: offers_TP = [
  {
    id: 1,
    img: hero1,
    title: "offer 1",
    details: "text 1",
  },
  {
    id: 2,
    img: hero2,
    title: "offer 2",
    details: "text 2",
  },
  {
    id: 3,
    img: hero3,
    title: "offer 3",
    details: "text 3",
  },
  {
    id: 4,
    img: hero1,
    title: "offer 4",
    details: "text 4",
  },
  {
    id: 5,
    img: hero2,
    title: "offer 5",
    details: "text 5",
  },
  {
    id: 6,
    img: hero3,
    title: "offer 6",
    details: "text 6",
  },
];

const Services = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [0.85, 1]);

  return (
    <section ref={targetRef} className="bg-primary-100 h-[150vh]">
      <motion.div
        style={{ scale, y: "-50%" }}
        className="sticky top-1/2 -translate-y-1/2">
        <Swiper
          dir="ltr"
          effect={"coverflow"}
          className="mySwiper p-10"
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}>
          {offers?.map((offer) => (
            <SwiperSlide
              className="transition cursor-pointer aspect-square rounded-3xl overflow-hidden"
              key={offer.id}>
              <OfferCard offerDetails={offer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Services;
