import { useTranslation } from "react-i18next";

type offer_TP = {
  id: number;
  img: string;
  title: string;
  details: string;
};
type OfferCardProps = {
  offerDetails: offer_TP;
};

const OfferCard: React.FC<OfferCardProps> = ({ offerDetails }) => {
  const { t } = useTranslation();

  return (
    <div className="transition cursor-pointer aspect-square rounded-3xl overflow-hidden bg-white">
      <div className="h-[55%] rounded-2xl">
        <img
          className="w-full h-full bg-center rounded-2xl"
          src={offerDetails.img}
          alt={offerDetails.title}
        />
      </div>
      <div className="flex flex-col justify-between h-[45%] px-5 py-4">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-semibold">{offerDetails.title}</h3>
            <span className="font-bold text-2xl text-Secondary">
              1000 {t("EGP")}
            </span>
          </div>
          <p className="leading-5 line-clamp-3 my-2">
            {offerDetails.details} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Beatae totam iure ratione. Facere animi
            recusandae, libero velit a neque natus quis beatae veniam possimus
            consectetur! Veniam explicabo in vel earum.
          </p>
        </div>
        <div className="ms-auto">
          <button className="border border-primary-200 text-xl lg:text-2xl hover:text-primary-200 rounded-xl px-4 py-2 hover:bg-transparent bg-primary-200 text-darkText transition capitalize">
            {t("book")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
