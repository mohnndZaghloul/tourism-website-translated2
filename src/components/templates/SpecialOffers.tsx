import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import { useTranslation } from "react-i18next";

const SpecialOffers = () => {
  const { t } = useTranslation();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [32, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], ["100%", "-44%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const x1 = useTransform(scrollYProgress, [0.6, 1], ["0%", "-100%"]);
  const x2 = useTransform(scrollYProgress, [0.6, 1], ["0%", "100%"]);

  return (
    <section
      dir="ltr"
      ref={targetRef}
      className="h-[200vh] bg-primary-100 mt-20">
      <motion.div
        style={{ y }}
        className="sticky top-1/2 translate-y-1/2 flex justify-center items-center overflow-hidden">
        <motion.div
          style={{ scale, borderRadius, x: x1 }}
          className="rounded-3xl relative w-1/2 h-[90vh] overflow-hidden">
          <img className="w-full h-full bg-center" src={hero1} alt="img" />
          <motion.div
            style={{ opacity }}
            className="absolute inset-0 text-center px-10 flex flex-col capitalize text-lightText justify-center items-center bg-black/40">
            <h1 className="text-5xl uppercase text-primary-100 pb-10">{t("title")}</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptate itaque delectus animi eligendi! Earum doloribus corrupti
              autem eius necessitatibus vel dolores voluptate, laborum dolorem?
              Laboriosam laudantium aspernatur consectetur adipisci.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          style={{ scale, borderRadius, x: x2 }}
          className="rounded-3xl relative w-1/2 h-[90vh] overflow-hidden">
          <img className="w-full h-full bg-center" src={hero2} alt="img" />
          <motion.div
            style={{ opacity }}
            className="absolute inset-0 text-center px-10 flex flex-col capitalize text-lightText justify-center items-center bg-black/40">
            <h1 className="text-5xl uppercase text-primary-100 pb-10">{t("title")}</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptate itaque delectus animi eligendi! Earum doloribus corrupti
              autem eius necessitatibus vel dolores voluptate, laborum dolorem?
              Laboriosam laudantium aspernatur consectetur adipisci.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpecialOffers;
