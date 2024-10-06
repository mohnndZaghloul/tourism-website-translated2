import hero1 from "../../assets/hero1.jpg";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "-200%"]);

  return (
    <section>
      <div ref={targetRef} className="h-[200vh]">
        <motion.div style={{ scale }} className="sticky top-0">
          <img
            className="rounded-3xl bg-cover bg-center w-full h-screen"
            src={hero1}
            alt="img"
          />
          <motion.div
            style={{ opacity }}
            className="absolute inset-0 rounded-3xl bg-black/40"
          />
          <motion.div
            style={{ opacity, y, x: "-50%" }}
            className="absolute top-1/2 left-1/2 text-center w-full capitalize text-lightText">
            <h1 className="uppercase text-5xl pb-4">{t("title")}</h1>
            <p className="text-2xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="container w-full lg:w-2/3 flex justify-center gap-8 capitalize">
        <h3 className="min-w-fit font-bold animate-pulse text-primary-200 text-2xl uppercase">
          offer title
        </h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            unde suscipit vitae labore inventore eos! Veniam in aperiam
            repudiandae perferendis sit, officiis deserunt nobis esse nemo
            provident porro praesentium facilis.
          </p>
          <div className="flex justify-between items-center pt-8">
            <button className="border border-primary-200 text-2xl hover:text-primary-200 rounded-xl px-4 py-2 hover:bg-transparent bg-primary-200 text-darkText transition capitalize">
              {t("book")}
            </button>
            <span className="text-3xl text-primary-200">2000 {t("EGP")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
