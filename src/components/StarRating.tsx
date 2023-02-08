import starEmptyIcon from "../assets/estrela_vazia.svg";
import starFilledIcon from "../assets/estrela_cheia.svg";

import { motion } from "framer-motion";
import Image from "next/image";
import { useAtom } from "jotai";
import { ratingAtom } from "../atoms/ratingAtom";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? `${process.env.VERCEL_URL}/api/updateRating`
    : "http://localhost:3000/api/updateRating";

const StarRating = () => {
  const [rating, setRating] = useAtom(ratingAtom);

  const updateRating = async (r: number) => {
    await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ rating: r }),
    }).then(() => {
      setRating(r);
    });
  };

  return (
    <div className="flex gap-3">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 * index }}
          className="w-10 h-10 cursor-pointer"
          key={index}
          onClick={() => updateRating(star)}
        >
          <Image
            src={rating >= star ? starFilledIcon : starEmptyIcon}
            alt="Estrela"
            width={100}
            height={100}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StarRating;
