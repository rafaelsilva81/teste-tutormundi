import starEmptyIcon from "../assets/estrela_vazia.svg";
import starFilledIcon from "../assets/estrela_cheia.svg";
import { useAtom } from "jotai";
import { ratingAtom } from "../atoms/ratingAtom";

const StarRating = () => {
  const [rating, setRating] = useAtom(ratingAtom);

  console.log(rating);
  return (
    <div>
      <div className="flex gap-3">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <img
            className="w-10 h-10 cursor-pointer"
            src={rating >= star ? starFilledIcon : starEmptyIcon}
            alt="Estrela vazia"
            key={index}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
