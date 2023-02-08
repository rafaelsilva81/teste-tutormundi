import starEmptyIcon from "../assets/estrela_vazia.svg";
import starFilledIcon from "../assets/estrela_cheia.svg";
import { useAtom } from "jotai";
import { ratingAtom } from "../atoms/ratingAtom";
import { motion } from "framer-motion";

const StarRating = () => {
  const [rating, setRating] = useAtom(ratingAtom);

  console.log(rating);
  return (
    <div className="flex gap-3">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <motion.img
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 * index }}
          className="w-10 h-10 cursor-pointer"
          src={rating >= star ? starFilledIcon : starEmptyIcon}
          alt="Estrela vazia"
          key={index}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
