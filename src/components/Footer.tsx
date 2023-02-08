import clsx from "clsx";
import { useAtom } from "jotai/react";
import { ratingAtom } from "../atoms/ratingAtom";

const Footer = () => {
  const [rating, _] = useAtom(ratingAtom);
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="flex items-center justify-center m-8 gap-8 font-secondary font-semibold">
        <button
          className="
            text-primary transition ease-out duration-200 py-2 px-6 rounded-full 
            hover:text-primary/80 active:bg-primary/40"
        >
          PULAR
        </button>

        <button
          className={clsx(
            "rounded-full text-white py-2 px-6 transition ease-out duration-200",
            rating === 0
              ? "bg-tertiary cursor-not-allowed"
              : "bg-primary hover:bg-primary/80 active:bg-primary/40"
          )}
        >
          CONFIRMAR
        </button>
      </div>
    </footer>
  );
};

export default Footer;